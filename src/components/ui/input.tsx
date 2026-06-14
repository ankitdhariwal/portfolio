import * as React from "react";
import { cn } from "@/lib/utils";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, error, ...props }, ref) => (
    <input
      type={type}
      className={cn(
        "flex h-11 w-full rounded-[var(--radius-md)] border bg-[var(--color-surface)] px-4",
        "font-sans text-sm text-[var(--color-ink)] placeholder:text-[var(--color-ink-3)]",
        "transition-colors duration-150 outline-none",
        error
          ? "border-red-400 focus:border-red-500"
          : "border-[var(--color-edge)] focus:border-[var(--color-accent)]",
        "disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      ref={ref}
      {...props}
    />
  )
);
Input.displayName = "Input";

export { Input };
