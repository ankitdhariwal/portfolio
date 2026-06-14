"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Trophy, Server, BookOpen, Award, Users, ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { achievements } from "@/data/achievements";

type IconComp = React.ComponentType<{ size?: number; className?: string }>;
const iconMap: Record<string, IconComp> = { Github: FaGithub, Trophy, Server, BookOpen, Award, Users };

const CARD_ACCENTS = ["#93c5fd","#60a5fa","#2563eb","#3b82f6","#ee4c2c","#ff9900"];

export function Achievements() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });

  return (
    <section id="achievements" ref={ref} className="dev-section bg-[#0f1f3d]">
      <div className="dev-container">
        <SectionHeading
          title="Achievements & Certifications"
          emoji="🏆"
          subtitle="Recognition and milestones from my career in AI engineering."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((ach, i) => {
            const Icon: IconComp = iconMap[ach.icon] ?? Trophy;
            const accent = CARD_ACCENTS[i % CARD_ACCENTS.length];
            return (
              <motion.div
                key={ach.id}
                className="dev-card p-7 flex flex-col"
                style={{ borderLeft: `3px solid ${accent}` }}
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                  style={{ backgroundColor: `${accent}18`, border: `1px solid ${accent}40`, color: accent }}
                >
                  <Icon size={22} className="shrink-0" />
                </div>
                <h3 className="font-bold text-white text-lg mb-2 leading-snug">{ach.title}</h3>
                <p className="text-[#868e96] text-[15px] leading-relaxed flex-1">{ach.description}</p>
                <div className="flex items-center justify-between mt-5 pt-4 border-t border-[rgba(211,211,211,0.1)]">
                  {ach.year && (
                    <span className="text-xs font-mono text-[#868e96]">{ach.year}</span>
                  )}
                  {ach.link && (
                    <a
                      href={ach.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-sm font-semibold transition-colors"
                      style={{ color: accent }}
                    >
                      View <ExternalLink size={13} />
                    </a>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
