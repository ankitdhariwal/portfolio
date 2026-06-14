import type { Metadata } from "next";
import { SectionLabel } from "@/components/shared/section-label";

export const metadata: Metadata = {
  title:       "Blog",
  description: "Writing on AI engineering, system design, and machine learning.",
};

export default function BlogPage() {
  return (
    <div className="bg-[var(--color-canvas)]">
      <section className="section pt-32">
        <div className="container">
          <SectionLabel index="00" label="Blog" className="mb-6" />
          <h1
            className="text-display font-display italic text-[var(--color-ink)] mb-4"
            style={{ maxWidth: "22ch" }}
          >
            Writing on AI engineering.
          </h1>
          <p className="text-lead text-[var(--color-ink-2)]" style={{ maxWidth: "52ch" }}>
            Occasional deep-dives on LLMs, agent systems, infrastructure,
            and the craft of building production AI.
          </p>
        </div>
      </section>

      {/* Empty state */}
      <section className="pb-32">
        <div className="container">
          <div className="flex flex-col items-center justify-center gap-4 rounded-[var(--radius-xl)] border border-dashed border-[var(--color-edge-2)] py-28 text-center">
            <p className="font-mono text-[11px] uppercase tracking-widest text-[var(--color-ink-3)]">
              Coming soon
            </p>
            <p className="text-sm text-[var(--color-ink-2)]" style={{ maxWidth: "36ch" }}>
              The first posts are in draft. Check back soon — or follow on{" "}
              <a
                href="https://twitter.com/ankitdhariwal"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--color-accent)] underline-offset-4 hover:underline"
              >
                X
              </a>{" "}
              for updates.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
