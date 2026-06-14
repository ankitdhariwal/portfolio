import { cn } from "@/lib/utils";

interface SectionLabelProps {
  index?: string;   // "01", "02", etc.
  label:  string;
  className?: string;
}

export function SectionLabel({ index, label, className }: SectionLabelProps) {
  return (
    <p
      className={cn(
        "inline-flex items-center gap-2",
        "font-mono text-xs uppercase tracking-[0.18em] text-[var(--color-ink-3)]",
        className
      )}
    >
      {index && (
        <>
          <span className="text-[var(--color-accent)]">{index}</span>
          <span className="text-[var(--color-edge-2)]">—</span>
        </>
      )}
      {label}
    </p>
  );
}
