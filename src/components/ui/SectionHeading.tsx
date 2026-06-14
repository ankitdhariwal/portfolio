"use client";

import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  emoji?: string;
  subtitle?: string;
  className?: string;
}

export function SectionHeading({ title, emoji, subtitle, className }: SectionHeadingProps) {
  return (
    <div className={cn("mb-14", className)}>
      <h1
        className="font-semibold text-white"
        style={{ fontSize: "clamp(2rem, 5vw, 3.2rem)", lineHeight: 1.2 }}
      >
        {title}
        {emoji && <span className="ml-3">{emoji}</span>}
      </h1>
      <div className="section-heading-line mt-3" />
      {subtitle && (
        <p className="text-[#868e96] text-base mt-4 max-w-2xl leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
