"use client";

import { ExternalLink, BookOpen, CheckCircle2 } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { Modal } from "@/components/ui/Modal";
import type { Project } from "@/types";

interface ProjectModalProps { project: Project | null; onClose: () => void; }

const categoryColors: Record<string, string> = {
  AI: "#93c5fd", Agents: "#60a5fa", NLP: "#60a5fa",
  Vision: "#ee4c2c", Automation: "#ff9900", SaaS: "#61dafb",
};

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  if (!project) return null;

  return (
    <Modal isOpen={!!project} onClose={onClose}>
      <div className="p-8">
        <div className="mb-6">
          <div className="flex flex-wrap gap-2 mb-3">
            {project.categories.map((cat) => (
              <span key={cat}
                className="text-xs font-semibold px-3 py-1 rounded-full"
                style={{ backgroundColor: `${categoryColors[cat] ?? "#93c5fd"}22`, color: categoryColors[cat] ?? "#93c5fd", border: `1px solid ${categoryColors[cat] ?? "#93c5fd"}44` }}>
                {cat}
              </span>
            ))}
            <span className="text-xs font-mono px-3 py-1 rounded-full bg-[rgba(255,255,255,0.05)] text-[#868e96] border border-[rgba(255,255,255,0.1)]">{project.year}</span>
          </div>
          <h2 className="font-bold text-white text-2xl mb-3">{project.title}</h2>
          <p className="text-[#868e96] text-base leading-relaxed">{project.longDescription}</p>
        </div>

        <div className="mb-6">
          <h3 className="text-sm font-semibold uppercase tracking-widest text-[#93c5fd] mb-3">Key Highlights</h3>
          <ul className="space-y-2">
            {project.highlights.map((hl, i) => (
              <li key={i} className="flex items-start gap-3 text-[15px] text-[#868e96]">
                <CheckCircle2 className="mt-0.5 shrink-0 text-[#2563eb]" size={16} />
                {hl}
              </li>
            ))}
          </ul>
        </div>

        <div className="mb-8">
          <h3 className="text-sm font-semibold uppercase tracking-widest text-[#93c5fd] mb-3">Tech Stack</h3>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span key={t}
                className="text-xs font-mono text-[#868e96] bg-[rgba(59,130,246,0.1)] border border-[rgba(59,130,246,0.2)] rounded px-3 py-1">
                {t}
              </span>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap gap-3">
          {project.links.live && (
            <a href={project.links.live} target="_blank" rel="noopener noreferrer" className="dev-btn text-sm py-2 px-4">
              <ExternalLink size={14} /> Live Demo
            </a>
          )}
          {project.links.demo && !project.links.live && (
            <a href={project.links.demo} target="_blank" rel="noopener noreferrer" className="dev-btn text-sm py-2 px-4">
              <ExternalLink size={14} /> View Demo
            </a>
          )}
          {project.links.github && (
            <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="dev-btn dev-btn-outline text-sm py-2 px-4">
              <FaGithub size={14} /> GitHub
            </a>
          )}
          {project.links.paper && (
            <a href={project.links.paper} target="_blank" rel="noopener noreferrer" className="dev-btn dev-btn-outline text-sm py-2 px-4">
              <BookOpen size={14} /> Paper
            </a>
          )}
        </div>
      </div>
    </Modal>
  );
}
