"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TimelineItem } from "@/components/features/TimelineItem";
import { experiences } from "@/data/experience";

export function Experience() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });

  const current = experiences.filter((e) => e.isCurrent);
  const past = experiences.filter((e) => !e.isCurrent);

  return (
    <section id="experience" ref={ref} className="dev-section bg-[#0a1628]">
      <div className="dev-container">
        <SectionHeading
          title="Work Experiences"
          emoji="💼"
          subtitle="My professional journey building AI systems across companies and domains."
        />

        {/* Current — Shorthills.ai */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-sm font-semibold px-3 py-1 rounded-full bg-[rgba(37,99,235,0.2)] border border-[rgba(37,99,235,0.4)] text-[#93c5fd]">
              @ Shorthills.ai
            </span>
            <div className="flex-1 h-px bg-[rgba(211,211,211,0.1)]" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {current.map((exp, i) => (
              <TimelineItem key={exp.id} experience={exp} index={i} inView={inView} />
            ))}
          </div>
        </div>

        {/* Past Experience */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <span className="text-sm font-semibold px-3 py-1 rounded-full bg-[rgba(59,130,246,0.1)] border border-[rgba(59,130,246,0.2)] text-[#868e96]">
              Past Experience
            </span>
            <div className="flex-1 h-px bg-[rgba(211,211,211,0.1)]" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {past.map((exp, i) => (
              <TimelineItem key={exp.id} experience={exp} index={i + current.length} inView={inView} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
