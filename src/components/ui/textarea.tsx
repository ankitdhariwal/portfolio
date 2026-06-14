import * as React from "react";
import { cn } from "@/lib/utils";

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: boolean;
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, error, ...props }, ref) => (
    <textarea
      className={cn(
        "flex min-h-[120px] w-full rounded-[var(--radius-md)] border bg-[var(--color-surface)] px-4 py-3",
        "font-sans text-sm text-[var(--color-ink)] placeholder:text-[var(--color-ink-3)]",
        "transition-colors duration-150 outline-none resize-none",
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
Textarea.displayName = "Textarea";

export { Textarea };
