import type { SkillCategory } from "@/types";

export const skillCategories: SkillCategory[] = [
  {
    name: "AI / GenAI & LLMs",
    color: "#3b82f6",
    ring: "inner",
    skills: [
      { name: "OpenAI GPT" },
      { name: "Anthropic Claude" },
      { name: "Google Gemini" },
      { name: "LiteLLM" },
      { name: "LightRAG" },
      { name: "MLflow" },
      { name: "Prompt Engineering" },
      { name: "Fine-tuning" },
      { name: "Embeddings" },
    ],
  },
  {
    name: "Agentic AI & RAG",
    color: "#60a5fa",
    ring: "middle",
    skills: [
      { name: "CrewAI" },
      { name: "Autogen" },
      { name: "Google ADK" },
      { name: "Weaviate" },
      { name: "pgvector" },
      { name: "Astra DB" },
      { name: "Neo4j" },
      { name: "RAGAS" },
      { name: "DeepEval" },
    ],
  },
  {
    name: "Backend & APIs",
    color: "#93c5fd",
    ring: "middle",
    skills: [
      { name: "Python" },
      { name: "Go" },
      { name: "FastAPI" },
      { name: "Flask" },
      { name: "Django" },
      { name: "Node.js" },
      { name: "gRPC" },
      { name: "GraphQL" },
      { name: "Microservices" },
    ],
  },
  {
    name: "Cloud, Data & DevOps",
    color: "#2563eb",
    ring: "outer",
    skills: [
      { name: "GCP" },
      { name: "AWS" },
      { name: "Azure" },
      { name: "PostgreSQL" },
      { name: "MongoDB" },
      { name: "Redis" },
      { name: "Kafka" },
      { name: "Docker" },
      { name: "Kubernetes" },
    ],
  },
];

export const featuredSkills = [
  "Python", "Go", "FastAPI", "LiteLLM", "LightRAG", "OpenAI", "Anthropic Claude",
  "CrewAI", "Autogen", "Neo4j", "Astra DB", "MLflow", "PostgreSQL", "Redis",
  "GCP", "AWS", "Azure", "Docker", "Kubernetes", "RAGAS",
];

export const floatingTechBadges = [
  "Python", "Go", "FastAPI", "Docker", "Kubernetes", "GCP", "AWS", "MLflow",
];
