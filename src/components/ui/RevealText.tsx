"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { cn } from "@/lib/utils";

interface RevealTextProps {
  children: string;
  className?: string;
  delay?: number;
  /** Split into words (default) or keep as single block */
  splitWords?: boolean;
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span";
}

const ease = [0.22, 1, 0.36, 1] as const;

export function RevealText({
  children,
  className,
  delay = 0,
  splitWords = true,
  as: Tag = "span",
}: RevealTextProps) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });

  if (!splitWords) {
    return (
      <Tag ref={ref as React.RefObject<HTMLElement & HTMLHeadingElement>} className={cn("block overflow-hidden", className)}>
        <motion.span
          className="block"
          initial={{ y: "105%" }}
          animate={inView ? { y: "0%" } : { y: "105%" }}
          transition={{ duration: 0.75, delay, ease }}
        >
          {children}
        </motion.span>
      </Tag>
    );
  }

  const words = children.split(" ");

  return (
    <Tag
      ref={ref as React.RefObject<HTMLElement & HTMLHeadingElement>}
      className={cn("inline", className)}
      aria-label={children}
    >
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden leading-[1.1]">
          <motion.span
            className="inline-block"
            initial={{ y: "105%" }}
            animate={inView ? { y: "0%" } : { y: "105%" }}
            transition={{ duration: 0.7, delay: delay + i * 0.05, ease }}
            aria-hidden
          >
            {word}
            {i < words.length - 1 ? " " : ""}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}
