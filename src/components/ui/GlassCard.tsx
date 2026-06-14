"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

interface GlassCardProps extends HTMLMotionProps<"div"> {
  variant?: "default" | "interactive" | "flat";
  glow?: "cyan" | "purple" | "magenta" | "green" | "none";
}

const glowMap = {
  cyan:    "hover:shadow-[0_0_30px_rgba(14,165,233,0.15)]",
  purple:  "hover:shadow-[0_0_30px_rgba(139,92,246,0.15)]",
  magenta: "hover:shadow-[0_0_30px_rgba(2,132,199,0.15)]",
  green:   "hover:shadow-[0_0_30px_rgba(125,211,252,0.15)]",
  none:    "",
};

export function GlassCard({
  variant = "default",
  glow = "none",
  className,
  children,
  ...props
}: GlassCardProps) {
  return (
    <motion.div
      className={cn(
        "glass transition-all duration-300",
        variant === "interactive" && "cursor-pointer hover:scale-[1.01]",
        variant === "flat" && "bg-[rgba(255,255,255,0.02)]",
        glowMap[glow],
        className
      )}
      {...props}
    >
      {children}
    </motion.div>
  );
}
