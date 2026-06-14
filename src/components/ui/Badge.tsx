import { cn } from "@/lib/utils";

interface BadgeProps {
  color?: "cyan" | "purple" | "magenta" | "green" | "default";
  size?: "sm" | "md";
  children: React.ReactNode;
  className?: string;
}

const colorMap = {
  cyan:    "border-[rgba(14,165,233,0.3)]  bg-[rgba(14,165,233,0.08)]  text-[#0EA5E9]",
  purple:  "border-[rgba(139,92,246,0.3)]  bg-[rgba(139,92,246,0.08)]  text-[#8B5CF6]",
  magenta: "border-[rgba(2,132,199,0.3)]   bg-[rgba(2,132,199,0.08)]   text-[#0284C7]",
  green:   "border-[rgba(125,211,252,0.3)] bg-[rgba(125,211,252,0.08)] text-[#7DD3FC]",
  default: "border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.04)] text-[#8892A4]",
};

const sizeMap = {
  sm: "px-2.5 py-0.5 text-[10px]",
  md: "px-3   py-1   text-xs",
};

export function Badge({ color = "default", size = "sm", children, className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center font-mono font-medium tracking-wide rounded-full border",
        colorMap[color],
        sizeMap[size],
        className
      )}
    >
      {children}
    </span>
  );
}
