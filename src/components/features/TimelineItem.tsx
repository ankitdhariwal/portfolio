"use client";

import { motion } from "framer-motion";
import { MapPin, ExternalLink, Calendar } from "lucide-react";
import type { Experience } from "@/types";

interface TimelineItemProps {
  experience: Experience;
  index: number;
  inView: boolean;
}

const BANNER_GRADIENTS = [
  "linear-gradient(135deg, #1d4ed8 0%, #3b82f6 100%)",
  "linear-gradient(135deg, #1a3a8f 0%, #60a5fa 100%)",
  "linear-gradient(135deg, #0f5132 0%, #198754 100%)",
  "linear-gradient(135deg, #842029 0%, #dc3545 100%)",
];

const BANNER_BORDER_COLORS = ["#3b82f6", "#60a5fa", "#198754", "#dc3545"];

export function TimelineItem({ experience, index, inView }: TimelineItemProps) {
  const initial = experience.company.charAt(0).toUpperCase();
  const gradient = BANNER_GRADIENTS[index % BANNER_GRADIENTS.length];
  const borderColor = BANNER_BORDER_COLORS[index % BANNER_BORDER_COLORS.length];

  return (
    <motion.div
      className="dev-card overflow-visible relative"
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.12 }}
    >
      {/* Company banner */}
      <div
        className="h-[120px] flex items-start justify-center pt-5 relative rounded-t-[10px] overflow-hidden"
        style={{ background: gradient }}
      >
        <div
          className="absolute inset-0 opacity-20"
          style={{ backgroundImage: "radial-gradient(circle at 20% 50%, rgba(255,255,255,0.3) 0%, transparent 60%)" }}
        />
        <span className="relative z-10 text-white font-bold text-xl tracking-wide">
          {experience.company}
        </span>

        {/* Logo circle — overlaps banner/content boundary */}
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-20 h-20 rounded-full flex items-center justify-center z-20"
          style={{
            background: "#0f1f3d",
            border: `4px solid ${borderColor}`,
            boxShadow: "0 4px 20px rgba(0,0,0,0.4)",
          }}
        >
          {experience.logo ? (
            <img src={experience.logo} alt={experience.company} className="w-10 h-10 object-contain" />
          ) : (
            <span className="text-white font-bold text-2xl">{initial}</span>
          )}
        </div>
      </div>

      {/* Content — pt-14 to clear the overlapping circle */}
      <div className="p-6 pt-14">
        {/* Active badge */}
        {experience.isCurrent && (
          <div className="flex justify-center mb-3">
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-green-400 bg-[rgba(34,197,94,0.1)] border border-[rgba(34,197,94,0.25)] rounded-full px-3 py-0.5">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              Active
            </span>
          </div>
        )}

        {/* Role */}
        <h3 className="font-bold text-white text-xl mb-1 leading-snug text-center">
          {experience.role}
        </h3>

        {/* Dates + type */}
        <div className="flex items-center justify-center gap-3 mb-3 flex-wrap">
          <span className="flex items-center gap-1.5 text-sm text-[#93c5fd] font-mono">
            <Calendar size={13} />
            {experience.startDate} — {experience.endDate}
          </span>
          <span className="text-xs px-2 py-0.5 rounded bg-[rgba(37,99,235,0.2)] text-[#93c5fd] border border-[rgba(37,99,235,0.3)] capitalize">
            {experience.type}
          </span>
        </div>

        {/* Company link + location */}
        <div className="flex items-center justify-center gap-2 mb-4">
          {experience.companyUrl ? (
            <a
              href={experience.companyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm font-semibold text-[#93c5fd] hover:text-white transition-colors"
            >
              {experience.company} <ExternalLink size={12} />
            </a>
          ) : (
            <span className="text-sm font-semibold text-[#93c5fd]">{experience.company}</span>
          )}
          <span className="text-[#868e96]">·</span>
          <span className="text-sm text-[#868e96] flex items-center gap-1">
            <MapPin size={12} /> {experience.location}
          </span>
        </div>

        <p className="text-[#868e96] text-[14px] leading-relaxed mb-5 text-center">
          {experience.description}
        </p>

        <ul className="space-y-2 mb-5">
          {experience.achievements.map((ach, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-[#868e96] leading-relaxed">
              <span className="mt-[7px] w-1.5 h-1.5 rounded-full bg-[#2563eb] shrink-0" />
              {ach}
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-2 pt-4 border-t border-[rgba(211,211,211,0.1)]">
          {experience.tech.map((t) => (
            <span
              key={t}
              className="text-xs font-mono text-[#868e96] bg-[rgba(59,130,246,0.1)] border border-[rgba(59,130,246,0.2)] rounded px-2 py-0.5"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
