"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Eye } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import type { Project } from "@/types";
import { CATEGORY_COLORS } from "@/lib/constants";

const categoryDotColors: Record<string, string> = {
  AI: "#93c5fd", Agents: "#60a5fa", NLP: "#60a5fa",
  Vision: "#ee4c2c", Automation: "#ff9900", SaaS: "#61dafb",
};

interface ProjectCardProps {
  project: Project;
  onOpenModal: (project: Project) => void;
  index: number;
}

export function ProjectCard({ project, onOpenModal, index }: ProjectCardProps) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="dev-card flex flex-col h-full overflow-hidden cursor-pointer group"
      style={{
        borderTop: `3px solid ${categoryDotColors[project.categories[0]] ?? "#93c5fd"}`,
      }}
      onClick={() => onOpenModal(project)}
    >
      <div className="p-6 flex flex-col flex-1">
        {/* Top row */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex gap-2 flex-wrap">
            {project.categories.slice(0, 2).map((cat) => (
              <span
                key={cat}
                className="text-[11px] font-semibold px-2.5 py-0.5 rounded"
                style={{
                  backgroundColor: `${categoryDotColors[cat] ?? "#93c5fd"}22`,
                  color: categoryDotColors[cat] ?? "#93c5fd",
                  border: `1px solid ${categoryDotColors[cat] ?? "#93c5fd"}44`,
                }}
              >
                {cat}
              </span>
            ))}
          </div>
          <span className="text-[#868e96] text-xs font-mono">{project.year}</span>
        </div>

        {/* Title */}
        <h3 className="font-bold text-white text-xl mb-2 leading-snug group-hover:text-[#93c5fd] transition-colors duration-200">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-[#868e96] text-[15px] leading-relaxed flex-1 mb-5">
          {project.description}
        </p>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.tech.slice(0, 5).map((t) => (
            <span
              key={t}
              className="text-xs font-mono text-[#868e96] bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.08)] rounded px-2 py-0.5"
            >
              {t}
            </span>
          ))}
          {project.tech.length > 5 && (
            <span className="text-xs font-mono text-[#868e96]">+{project.tech.length - 5}</span>
          )}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3 pt-4 border-t border-[rgba(211,211,211,0.1)]">
          <button
            onClick={(e) => { e.stopPropagation(); onOpenModal(project); }}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#93c5fd] hover:text-white transition-colors"
          >
            <Eye size={15} />
            Details
          </button>
          <div className="flex-1" />
          {project.links.github && (
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="text-[#868e96] hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <FaGithub size={18} />
            </a>
          )}
          {(project.links.live ?? project.links.demo) && (
            <a
              href={project.links.live ?? project.links.demo}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="text-[#868e96] hover:text-[#93c5fd] transition-colors"
              aria-label="Live demo"
            >
              <ExternalLink size={18} />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
