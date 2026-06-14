"use client";

import { motion } from "framer-motion";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { scaleIn } from "@/lib/animations";
import { cn } from "@/lib/utils";

interface StatCardProps {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
  color?: "cyan" | "purple" | "magenta" | "green";
  enabled?: boolean;
  className?: string;
}

const colorMap = {
  cyan: "text-[#0EA5E9]",
  purple: "text-[#8B5CF6]",
  magenta: "text-[#0284C7]",
  green: "text-[#7DD3FC]",
};

export function StatCard({
  value,
  suffix = "",
  prefix = "",
  label,
  color = "cyan",
  enabled = true,
  className,
}: StatCardProps) {
  return (
    <motion.div
      variants={scaleIn}
      className={cn(
        "flex flex-col items-center gap-1 rounded-2xl border border-[rgba(0,212,255,0.1)] bg-[rgba(0,212,255,0.04)] px-6 py-5 text-center",
        className
      )}
    >
      <div className={cn("font-display font-bold text-3xl md:text-4xl", colorMap[color])}>
        <AnimatedCounter value={value} suffix={suffix} prefix={prefix} enabled={enabled} duration={2200} />
      </div>
      <p className="text-xs font-mono uppercase tracking-widest text-[#8892A4]">{label}</p>
    </motion.div>
  );
}
