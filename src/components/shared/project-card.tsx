"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import { Badge } from "@/components/ui/Badge";
import { cn } from "@/lib/utils";
import type { Project } from "@/types";

interface ProjectCardProps {
  project:   Project;
  index?:    number;
  variant?:  "default" | "featured";
  className?: string;
}

export function ProjectCard({
  project,
  index = 0,
  variant = "default",
  className,
}: ProjectCardProps) {
  const isFeatured = variant === "featured";

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-8% 0px" }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-[var(--radius-xl)]",
        "border border-[var(--color-edge)] bg-[var(--color-surface)]",
        "transition-all duration-300 hover:-translate-y-1 hover:border-[var(--color-edge-2)] hover:shadow-[var(--shadow-lg)]",
        isFeatured && "lg:flex-row",
        className
      )}
    >
      <div className={cn("flex flex-1 flex-col p-7", isFeatured && "lg:p-10")}>
        {/* Header row */}
        <div className="mb-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            {/* Status dot */}
            <span
              className={cn(
                "h-1.5 w-1.5 rounded-full",
                project.status === "live"    && "bg-emerald-500",
                project.status === "wip"     && "bg-amber-400",
                project.status === "archived"&& "bg-[var(--color-ink-3)]"
              )}
            />
            <span className="font-mono text-[11px] uppercase tracking-widest text-[var(--color-ink-3)]">
              {project.year}
            </span>
          </div>

          {/* Links */}
          <div className="flex items-center gap-2">
            {project.links.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                onClick={(e) => e.stopPropagation()}
                className="p-1.5 text-[var(--color-ink-3)] transition-colors hover:text-[var(--color-ink)]"
              >
                <FaGithub size={15} />
              </a>
            )}
            {(project.links.live ?? project.links.demo) && (
              <a
                href={project.links.live ?? project.links.demo}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Live demo"
                onClick={(e) => e.stopPropagation()}
                className="p-1.5 text-[var(--color-ink-3)] transition-colors hover:text-[var(--color-accent)]"
              >
                <ArrowUpRight size={16} />
              </a>
            )}
          </div>
        </div>

        {/* Categories */}
        <div className="mb-3 flex flex-wrap gap-1.5">
          {project.categories.map((cat) => (
            <Badge key={cat} color="cyan" size="sm">
              {cat}
            </Badge>
          ))}
        </div>

        {/* Title */}
        <h3
          className={cn(
            "mb-3 font-display text-[var(--color-ink)] transition-colors group-hover:text-[var(--color-accent)]",
            isFeatured ? "text-heading" : "text-base font-semibold"
          )}
        >
          {project.title}
        </h3>

        {/* Description */}
        <p
          className={cn(
            "flex-1 text-[var(--color-ink-2)] leading-relaxed",
            isFeatured ? "text-sm" : "text-sm"
          )}
        >
          {project.description}
        </p>

        {/* Tech stack */}
        <div className="mt-5 flex flex-wrap gap-1.5 border-t border-[var(--color-edge)] pt-5">
          {project.tech.slice(0, 5).map((t) => (
            <span
              key={t}
              className="font-mono text-[11px] text-[var(--color-ink-3)]"
            >
              {t}
            </span>
          ))}
          {project.tech.length > 5 && (
            <span className="font-mono text-[11px] text-[var(--color-ink-3)]">
              +{project.tech.length - 5} more
            </span>
          )}
        </div>
      </div>
    </motion.article>
  );
}
