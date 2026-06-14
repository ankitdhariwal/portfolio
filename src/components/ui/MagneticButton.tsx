"use client";

import { useRef, type ButtonHTMLAttributes } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { cn } from "@/lib/utils";

interface MagneticButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  external?: boolean;
  magnetStrength?: number;
}

const base =
  "inline-flex items-center justify-center gap-2 font-semibold rounded-full " +
  "select-none relative whitespace-nowrap transition-colors duration-200";

const sizeMap = {
  sm: "px-5 py-2 text-sm",
  md: "px-7 py-3 text-sm",
  lg: "px-9 py-4 text-base",
};

const variantMap = {
  primary: "bg-[#0EA5E9] text-[#020817] hover:bg-[#38BDF8]",
  outline: "border border-[rgba(248,249,250,0.15)] text-[#F8F9FA] hover:border-[#0EA5E9] hover:text-[#0EA5E9]",
  ghost:   "text-[#94A3B8] hover:text-[#F8F9FA]",
};

export function MagneticButton({
  variant = "primary",
  size = "md",
  href,
  external,
  className,
  children,
  magnetStrength = 0.35,
  ...props
}: MagneticButtonProps) {
  const btnRef = useRef<HTMLButtonElement>(null);
  const aRef   = useRef<HTMLAnchorElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 200, damping: 18 });
  const sy = useSpring(y, { stiffness: 200, damping: 18 });

  const getRect = () =>
    (btnRef.current ?? aRef.current)?.getBoundingClientRect();

  const onMove = (e: React.MouseEvent) => {
    const rect = getRect();
    if (!rect) return;
    x.set((e.clientX - (rect.left + rect.width  / 2)) * magnetStrength);
    y.set((e.clientY - (rect.top  + rect.height / 2)) * magnetStrength);
  };
  const onLeave = () => { x.set(0); y.set(0); };

  const classes = cn(base, sizeMap[size], variantMap[variant], className);

  if (href) {
    return (
      <motion.a
        ref={aRef}
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        style={{ x: sx, y: sy }}
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        whileTap={{ scale: 0.96 }}
        className={classes}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      ref={btnRef}
      style={{ x: sx, y: sy }}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      whileTap={{ scale: 0.96 }}
      className={classes}
      {...(props as React.ComponentPropsWithoutRef<typeof motion.button>)}
    >
      {children}
    </motion.button>
  );
}
