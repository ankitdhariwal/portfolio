"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  /* base */
  [
    "inline-flex items-center justify-center gap-2 whitespace-nowrap",
    "font-sans font-medium text-sm tracking-wide",
    "transition-all duration-200 select-none",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2",
    "disabled:pointer-events-none disabled:opacity-40",
  ],
  {
    variants: {
      variant: {
        /* filled with page foreground — most impactful, editorial default */
        primary: [
          "bg-[var(--color-ink)] text-[var(--color-canvas)]",
          "hover:bg-[var(--color-ink-2)]",
        ],
        /* sky blue accent */
        accent: [
          "bg-[var(--color-accent)] text-[var(--color-accent-fg)]",
          "shadow-[var(--shadow-accent)] hover:shadow-[0_0_32px_rgba(14,165,233,0.40)]",
          "hover:opacity-90",
        ],
        /* outlined */
        outline: [
          "border border-[var(--color-edge-2)] bg-transparent text-[var(--color-ink)]",
          "hover:border-[var(--color-ink)] hover:bg-[var(--color-surface)]",
        ],
        /* low-key */
        ghost: [
          "bg-transparent text-[var(--color-ink-2)]",
          "hover:text-[var(--color-ink)] hover:bg-[var(--color-surface)]",
        ],
        /* text-only link */
        link: [
          "bg-transparent text-[var(--color-accent)] underline-offset-4",
          "hover:underline p-0 h-auto",
        ],
      },
      size: {
        sm:   "h-8  px-3.5 text-xs rounded-[var(--radius-md)]",
        md:   "h-10 px-5   text-sm rounded-[var(--radius-md)]",
        lg:   "h-12 px-7   text-base rounded-[var(--radius-lg)]",
        xl:   "h-14 px-9   text-base rounded-[var(--radius-xl)]",
        icon: "h-10 w-10   rounded-[var(--radius-md)]",
      },
    },
    defaultVariants: {
      variant: "primary",
      size:    "md",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
