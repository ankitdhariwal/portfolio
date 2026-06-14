"use client";

import { useState, useMemo } from "react";
import { SectionLabel }  from "@/components/shared/section-label";
import { ProjectCard }   from "@/components/shared/project-card";
import { cn }            from "@/lib/utils";
import { projects }      from "@/data/projects";
import { PROJECT_CATEGORIES } from "@/lib/constants";
import type { ProjectCategory } from "@/types";

export default function WorkPage() {
  const [active, setActive] = useState<string>("All");

  const filtered = useMemo(() => {
    if (active === "All") return projects;
    return projects.filter((p) =>
      p.categories.includes(active as ProjectCategory)
    );
  }, [active]);

  return (
    <div className="bg-[var(--color-canvas)]">

      {/* Header */}
      <section className="section pt-32">
        <div className="container">
          <SectionLabel index="00" label="Work" className="mb-6" />
          <h1
            className="text-display font-display italic text-[var(--color-ink)] mb-4"
            style={{ maxWidth: "22ch" }}
          >
            Production AI, start to finish.
          </h1>
          <p className="text-lead text-[var(--color-ink-2)]" style={{ maxWidth: "55ch" }}>
            A selection of systems, products, and pipelines built over five years
            in AI engineering.
          </p>
        </div>
      </section>

      {/* Filter + grid */}
      <section className="pb-24">
        <div className="container">
          {/* Filter tabs */}
          <div className="mb-10 flex flex-wrap gap-2 border-b border-[var(--color-edge)] pb-6">
            {PROJECT_CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={cn(
                  "rounded-full px-4 py-1.5 font-mono text-[11px] uppercase tracking-widest transition-all",
                  active === cat
                    ? "bg-[var(--color-ink)] text-[var(--color-canvas)]"
                    : "text-[var(--color-ink-3)] hover:text-[var(--color-ink)]"
                )}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((p, i) => (
              <ProjectCard key={p.id} project={p} index={i} />
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="py-24 text-center font-mono text-sm text-[var(--color-ink-3)]">
              No projects in this category yet.
            </p>
          )}
        </div>
      </section>
    </div>
  );
}
