import type { Metadata } from "next";
import { SectionLabel } from "@/components/shared/section-label";
import { Badge }        from "@/components/ui/Badge";
import { Separator }    from "@/components/ui/separator";
import { personal }     from "@/data/personal";
import { experiences }  from "@/data/experience";
import { achievements } from "@/data/achievements";
import { skillCategories } from "@/data/skills";

export const metadata: Metadata = {
  title:       "About",
  description: "Senior AI Engineer with 5+ years building production LLMs, autonomous agents, and ML systems.",
};

export default function AboutPage() {
  return (
    <div className="bg-[var(--color-canvas)]">

      {/* ── Page header ────────────────────────────────────────────── */}
      <section className="section pt-32">
        <div className="container">
          <SectionLabel index="00" label="About" className="mb-6" />
          <h1
            className="text-display font-display italic text-[var(--color-ink)] mb-6"
            style={{ maxWidth: "20ch" }}
          >
            I help teams ship AI that actually works.
          </h1>
          <p
            className="text-lead text-[var(--color-ink-2)]"
            style={{ maxWidth: "60ch" }}
          >
            {personal.bio.split("\n\n")[0]}
          </p>
        </div>
      </section>

      <Separator className="bg-[var(--color-edge)]" />

      {/* ── Bio + stats ────────────────────────────────────────────── */}
      <section className="section bg-[var(--color-surface)]">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Bio */}
            <div className="space-y-5">
              <h2 className="text-heading font-display text-[var(--color-ink)]">
                Background
              </h2>
              {personal.bio.split("\n\n").map((para, i) => (
                <p key={i} className="text-sm leading-relaxed text-[var(--color-ink-2)]">
                  {para}
                </p>
              ))}
              <div className="flex items-center gap-2 pt-2">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500" />
                <span className="font-mono text-xs text-[var(--color-ink-2)]">
                  {personal.availability}
                </span>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 content-start">
              {personal.stats.map((s) => (
                <div
                  key={s.label}
                  className="rounded-[var(--radius-lg)] border border-[var(--color-edge)] bg-[var(--color-canvas)] p-6"
                >
                  <p className="font-display text-3xl text-[var(--color-ink)]">
                    {s.value}{s.suffix}
                  </p>
                  <p className="mt-1 font-mono text-[11px] uppercase tracking-widest text-[var(--color-ink-3)]">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Separator className="bg-[var(--color-edge)]" />

      {/* ── Experience timeline ────────────────────────────────────── */}
      <section className="section bg-[var(--color-canvas)]">
        <div className="container">
          <SectionLabel label="Experience" className="mb-12" />

          <div className="space-y-0">
            {experiences.map((exp, i) => (
              <div
                key={exp.id}
                className="grid gap-4 border-b border-[var(--color-edge)] py-10 last:border-0 md:grid-cols-[200px_1fr]"
              >
                {/* Left: dates */}
                <div className="space-y-1">
                  <p className="font-mono text-xs text-[var(--color-accent)]">
                    {exp.startDate} — {exp.endDate}
                  </p>
                  <p className="font-mono text-[11px] uppercase tracking-widest text-[var(--color-ink-3)]">
                    {exp.type}
                  </p>
                </div>

                {/* Right: content */}
                <div className="space-y-3">
                  <div>
                    <h3 className="text-base font-semibold text-[var(--color-ink)]">
                      {exp.role}
                    </h3>
                    {exp.companyUrl ? (
                      <a
                        href={exp.companyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-[var(--color-accent)] hover:underline underline-offset-4"
                      >
                        {exp.company}
                      </a>
                    ) : (
                      <p className="text-sm text-[var(--color-ink-2)]">{exp.company}</p>
                    )}
                  </div>

                  <p className="text-sm leading-relaxed text-[var(--color-ink-2)]">
                    {exp.description}
                  </p>

                  <ul className="space-y-1.5">
                    {exp.achievements.map((ach, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-[var(--color-ink-2)]">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[var(--color-accent)]" />
                        {ach}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {exp.tech.slice(0, 7).map((t) => (
                      <Badge key={t} color="default" size="sm">{t}</Badge>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Separator className="bg-[var(--color-edge)]" />

      {/* ── Skills ─────────────────────────────────────────────────── */}
      <section className="section bg-[var(--color-surface)]">
        <div className="container">
          <SectionLabel label="Skills & Technologies" className="mb-12" />

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {skillCategories.map((cat) => (
              <div key={cat.name} className="space-y-4">
                <h3 className="font-mono text-[11px] uppercase tracking-widest text-[var(--color-ink-3)]">
                  {cat.name}
                </h3>
                <ul className="space-y-2">
                  {cat.skills.map((skill) => (
                    <li
                      key={skill.name}
                      className="flex items-center gap-2 text-sm text-[var(--color-ink-2)]"
                    >
                      <span
                        className="h-1 w-1 rounded-full shrink-0"
                        style={{ backgroundColor: cat.color }}
                      />
                      {skill.name}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Separator className="bg-[var(--color-edge)]" />

      {/* ── Achievements ───────────────────────────────────────────── */}
      <section className="section bg-[var(--color-canvas)]">
        <div className="container">
          <SectionLabel label="Achievements" className="mb-12" />

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {achievements.map((ach) => (
              <div
                key={ach.id}
                className="rounded-[var(--radius-lg)] border border-[var(--color-edge)] bg-[var(--color-surface)] p-6 space-y-2"
              >
                <h3 className="text-sm font-semibold text-[var(--color-ink)]">{ach.title}</h3>
                <p className="text-sm leading-relaxed text-[var(--color-ink-2)]">{ach.description}</p>
                {ach.year && (
                  <p className="font-mono text-[11px] text-[var(--color-ink-3)]">{ach.year}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
