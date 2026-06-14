"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { personal } from "@/data/personal";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";

export function About() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });

  return (
    <section id="about" ref={ref} className="dev-section bg-[#0f1f3d]">
      <div className="dev-container">
        <div className="flex flex-col lg:flex-row items-start gap-14">
          <motion.div
            className="flex-1"
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <SectionHeading
              title="What I Do"
              emoji="👨‍💻"
              subtitle="I specialize in building production-grade AI systems — from LLMs and autonomous agents to computer vision pipelines and full-stack AI products."
            />
            {personal.bio.split("\n\n").map((para, i) => (
              <p key={i} className="text-[#868e96] text-base leading-relaxed mb-4">{para}</p>
            ))}
            <div className="flex items-center gap-2 mt-6">
              <span className="w-2.5 h-2.5 rounded-full bg-[#2563eb] animate-pulse" />
              <span className="text-[#93c5fd] font-medium">{personal.availability}</span>
            </div>
          </motion.div>

          <motion.div
            className="w-full lg:w-[380px] shrink-0"
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <div className="grid grid-cols-2 gap-4">
              {personal.stats.map((stat) => (
                <div key={stat.label} className="dev-card p-6 text-center">
                  <p className="font-bold text-[#93c5fd] mb-1" style={{ fontSize: "2.2rem" }}>
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} enabled={inView} duration={2000} />
                  </p>
                  <p className="text-[#868e96] text-sm leading-snug">{stat.label}</p>
                </div>
              ))}
            </div>
            <div className="dev-card p-6 mt-4">
              <p className="text-[#93c5fd] font-semibold text-xs mb-3 uppercase tracking-wider">Key Technologies</p>
              <div className="flex flex-wrap gap-2">
                {["Python","Go","FastAPI","Flask","LiteLLM","LightRAG","OpenAI","Anthropic","CrewAI","Autogen","Neo4j","Astra DB","MLflow","PostgreSQL","GCP","AWS","Azure","Docker","Kubernetes"].map((t) => (
                  <span key={t} className="skill-badge text-xs">{t}</span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
