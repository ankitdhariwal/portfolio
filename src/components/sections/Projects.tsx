"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectCard } from "@/components/features/ProjectCard";
import { ProjectModal } from "@/components/features/ProjectModal";
import { projects } from "@/data/projects";
import { PROJECT_CATEGORIES } from "@/lib/constants";
import { cn } from "@/lib/utils";
import type { Project, ProjectCategory } from "@/types";

export function Projects() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filtered = useMemo(() => {
    if (activeCategory === "All") return projects;
    return projects.filter((p) => p.categories.includes(activeCategory as ProjectCategory));
  }, [activeCategory]);

  return (
    <section id="projects" className="dev-section bg-[#0f1f3d]">
      <div className="dev-container">
        <SectionHeading
          title="Open Source Projects"
          emoji="🔧"
          subtitle="Production-grade AI systems built from research to deployment."
        />

        {/* Filter */}
        <div className="flex flex-wrap gap-3 mb-10">
          {PROJECT_CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={cn(
                "px-5 py-2 rounded-full text-sm font-semibold border transition-all duration-200",
                activeCategory === cat
                  ? "bg-[#2563eb] border-[#2563eb] text-white shadow-[0_0_15px_rgba(37,99,235,0.4)]"
                  : "border-[rgba(59,130,246,0.2)] text-[#868e96] hover:border-[#2563eb] hover:text-white"
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={i}
                onOpenModal={setSelectedProject}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {filtered.length === 0 && (
          <p className="text-center text-[#868e96] py-12">No projects in this category.</p>
        )}
      </div>

      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  );
}
