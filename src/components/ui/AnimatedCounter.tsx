"use client";

import { useAnimatedCounter } from "@/hooks/useAnimatedCounter";
import { cn } from "@/lib/utils";

interface AnimatedCounterProps {
  value: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  enabled?: boolean;
  className?: string;
}

export function AnimatedCounter({
  value,
  suffix = "",
  prefix = "",
  duration = 2000,
  enabled = true,
  className,
}: AnimatedCounterProps) {
  const count = useAnimatedCounter(value, duration, enabled);

  return (
    <span className={cn("tabular-nums", className)}>
      {prefix}{count}{suffix}
    </span>
  );
}
