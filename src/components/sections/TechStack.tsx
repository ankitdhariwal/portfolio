"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  SiPython, SiGo, SiFastapi, SiFlask, SiDjango,
  SiNodedotjs, SiPostgresql, SiRedis, SiMongodb,
  SiElasticsearch, SiApachekafka, SiDocker, SiKubernetes,
  SiGooglecloud, SiOpenai, SiNeo4J, SiPrometheus, SiGrafana,
} from "react-icons/si";
import { FaAws, FaRobot, FaBrain, FaCode, FaDatabase, FaCloud } from "react-icons/fa";

const SKILL_GROUPS = [
  {
    label: "AI / GenAI & LLMs",
    color: "#3b82f6",
    skills: [
      { name: "OpenAI GPT",       icon: SiOpenai,    color: "#ffffff" },
      { name: "Anthropic Claude", icon: FaBrain,     color: "#93c5fd" },
      { name: "Google Gemini",    icon: SiGooglecloud, color: "#4285F4" },
      { name: "LiteLLM",         icon: FaCode,      color: "#60a5fa" },
      { name: "MLflow",          icon: FaCode,      color: "#93c5fd" },
      { name: "LightRAG",        icon: FaBrain,     color: "#3b82f6" },
    ],
  },
  {
    label: "Agentic AI & RAG",
    color: "#60a5fa",
    skills: [
      { name: "CrewAI",     icon: FaRobot,    color: "#60a5fa" },
      { name: "Autogen",    icon: FaRobot,    color: "#93c5fd" },
      { name: "Google ADK", icon: SiGooglecloud, color: "#4285F4" },
      { name: "Neo4j",      icon: SiNeo4J,    color: "#018bff" },
      { name: "Astra DB",   icon: FaDatabase, color: "#60a5fa" },
      { name: "pgvector",   icon: SiPostgresql, color: "#4169E1" },
      { name: "RAGAS",      icon: FaCode,     color: "#93c5fd" },
      { name: "DeepEval",   icon: FaCode,     color: "#3b82f6" },
    ],
  },
  {
    label: "Backend & APIs",
    color: "#93c5fd",
    skills: [
      { name: "Python",     icon: SiPython,   color: "#3776AB" },
      { name: "Go",         icon: SiGo,       color: "#00ADD8" },
      { name: "FastAPI",    icon: SiFastapi,  color: "#009688" },
      { name: "Flask",      icon: SiFlask,    color: "#ffffff" },
      { name: "Django",     icon: SiDjango,   color: "#092E20" },
      { name: "Node.js",    icon: SiNodedotjs, color: "#339933" },
      { name: "gRPC",       icon: FaCode,     color: "#93c5fd" },
    ],
  },
  {
    label: "Cloud, Data & DevOps",
    color: "#2563eb",
    skills: [
      { name: "GCP",        icon: SiGooglecloud,   color: "#4285F4" },
      { name: "AWS",        icon: FaAws,           color: "#FF9900" },
      { name: "Azure",      icon: FaCloud,          color: "#0078D4" },
      { name: "PostgreSQL", icon: SiPostgresql,    color: "#4169E1" },
      { name: "Redis",      icon: SiRedis,         color: "#DC382D" },
      { name: "Kafka",      icon: SiApachekafka,   color: "#231F20" },
      { name: "Docker",     icon: SiDocker,        color: "#2496ED" },
      { name: "Kubernetes", icon: SiKubernetes,    color: "#326CE5" },
    ],
  },
];

export function TechStack() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });

  return (
    <section id="skills" ref={ref} className="dev-section bg-[#0a1628]">
      <div className="dev-container">
        <SectionHeading
          title="What I Bring"
          emoji="🛠️"
          subtitle="Technologies and tools I use to build intelligent, scalable AI systems and production backends."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SKILL_GROUPS.map((group, gi) => (
            <motion.div
              key={group.label}
              className="dev-card p-7"
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: gi * 0.1 }}
            >
              <div className="flex items-center gap-2 mb-6">
                <span className="w-3 h-3 rounded-full" style={{ backgroundColor: group.color, boxShadow: `0 0 8px ${group.color}` }} />
                <h3 className="font-semibold text-white text-sm uppercase tracking-wider">{group.label}</h3>
              </div>
              <div className="grid grid-cols-3 sm:grid-cols-4 gap-4">
                {group.skills.map((skill) => {
                  const Icon = skill.icon;
                  return (
                    <div key={skill.name} className="flex flex-col items-center gap-2 group cursor-default">
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-200 group-hover:scale-110"
                        style={{ backgroundColor: `${skill.color}18`, border: `1px solid ${skill.color}30` }}
                      >
                        <Icon size={24} style={{ color: skill.color }} />
                      </div>
                      <span className="text-[11px] text-[#868e96] text-center leading-tight group-hover:text-white transition-colors">
                        {skill.name}
                      </span>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
