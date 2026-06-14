import type { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "hybrid-rag-system",
    title: "Hybrid Retrieval Intelligence System",
    description:
      "Enterprise knowledge search platform using LightRAG, Astra DB, and Neo4j with agentic retrieval pipelines for accurate, explainable, context-aware AI responses.",
    longDescription:
      "Built a Hybrid Retrieval Intelligence System combining graph-based retrieval (Neo4j) with vector search (Astra DB) and LightRAG for enterprise knowledge retrieval. The agentic pipeline intelligently routes queries, decomposes complex questions, and synthesizes multi-source answers with full explainability.",
    categories: ["AI", "Agents"],
    tech: ["LightRAG", "Neo4j", "Astra DB", "Python", "FastAPI", "OpenAI", "Anthropic"],
    highlights: [
      "Graph + vector hybrid retrieval using Neo4j and Astra DB",
      "Agentic retrieval pipelines for context-aware, explainable responses",
      "LightRAG integration for advanced graph-aware RAG",
      "Enterprise-grade knowledge search with multi-source synthesis",
      "Built at ShortHills AI for production enterprise deployment",
    ],
    links: {
      github: "https://github.com/ankitdhariwal",
    },
    image: "/assets/projects/hybrid-rag.jpg",
    featured: true,
    year: 2025,
    status: "live",
  },
  {
    id: "pwc-agentic-ai-platform",
    title: "PwC Agentic AI Platform",
    description:
      "End-to-end Agentic AI workflow platform built for PwC's NTH taxation model — contributed to the formation of the Agentic AI team and delivered multiple POCs across the organization.",
    longDescription:
      "Worked as a client-first engineer at PwC, contributing to the formation of their Agentic AI team and building multiple proof-of-concepts across the organization. Led the complete end-to-end development of an agentic platform for the PwC NTH taxation model, handling complex multi-step AI orchestration workflows.",
    categories: ["Agents", "AI", "Automation"],
    tech: ["Python", "FastAPI", "OpenAI", "Anthropic", "LiteLLM", "MLflow", "PostgreSQL", "GCP"],
    highlights: [
      "Contributed to formation of PwC's dedicated Agentic AI team",
      "Built multiple POCs across PwC's organization",
      "Led end-to-end development of the NTH taxation model agentic platform",
      "Complex multi-step agentic orchestration for tax workflow automation",
      "Enterprise-grade deployment on GCP infrastructure",
    ],
    links: {
      github: "https://github.com/ankitdhariwal",
    },
    image: "/assets/projects/pwc-agent.jpg",
    featured: true,
    year: 2025,
    status: "live",
  },
  {
    id: "automated-apqr-platform",
    title: "Automated APQR Platform",
    description:
      "Production-grade GenAI platform for Automated Annual Product Quality Review (APQR) for a UK pharmaceutical client — end-to-end system design, agentic LLM orchestration, and FastAPI backend.",
    longDescription:
      "Architected and led the full delivery of an Automated APQR (Annual Product Quality Review) platform for a UK healthcare and pharmaceutical client. Owned end-to-end system design including agentic LLM orchestration, FastAPI backends, and PostgreSQL schema design. The platform automates complex pharmaceutical quality review workflows that traditionally required weeks of manual effort.",
    categories: ["AI", "Automation", "Agents"],
    tech: ["Python", "FastAPI", "PostgreSQL", "OpenAI", "Anthropic", "LiteLLM", "Docker", "AWS"],
    highlights: [
      "End-to-end system design and delivery for UK pharma client",
      "Agentic LLM orchestration for complex pharmaceutical QA workflows",
      "FastAPI backend with robust PostgreSQL schema design",
      "Automates APQR workflows reducing weeks of manual effort",
      "Production-grade deployment with enterprise security standards",
    ],
    links: {
      github: "https://github.com/ankitdhariwal",
    },
    image: "/assets/projects/apqr-platform.jpg",
    featured: true,
    year: 2025,
    status: "live",
  },
  {
    id: "multi-llm-gateway",
    title: "Multi-LLM Gateway with MLflow Registry",
    description:
      "Centralized multi-LLM gateway using LiteLLM with an MLflow model registry for improved governance, model versioning, and enterprise query accuracy.",
    longDescription:
      "Built a unified multi-LLM gateway using LiteLLM that routes requests across OpenAI, Anthropic, Google Gemini, and other providers. Integrated with a centralized MLflow registry for model governance, version tracking, and A/B testing. Enables seamless LLM provider switching, cost optimization, and query-level observability.",
    categories: ["AI", "SaaS"],
    tech: ["LiteLLM", "MLflow", "Python", "FastAPI", "Redis", "PostgreSQL", "Docker", "Prometheus", "Grafana"],
    highlights: [
      "Unified gateway routing across OpenAI, Anthropic, Gemini, and more",
      "Centralized MLflow registry for model governance and versioning",
      "A/B testing and cost optimization across LLM providers",
      "Query-level observability with Prometheus and Grafana",
      "Redis caching layer for improved latency and cost reduction",
    ],
    links: {
      github: "https://github.com/ankitdhariwal",
    },
    image: "/assets/projects/llm-gateway.jpg",
    featured: false,
    year: 2025,
    status: "live",
  },
  {
    id: "email-deliverability-platform",
    title: "AI Email Deliverability Platform",
    description:
      "AI-powered email deliverability and domain reputation platform with autonomous optimization pipelines and interactive dashboards for improving inbox placement.",
    longDescription:
      "Built an AI-powered email deliverability and domain reputation platform for a US IT services client. Features autonomous optimization pipelines that monitor domain health, detect deliverability issues, and recommend/apply fixes. Includes interactive dashboards for real-time monitoring of inbox placement rates, spam scores, and domain reputation metrics.",
    categories: ["AI", "Automation", "SaaS"],
    tech: ["Python", "FastAPI", "OpenAI", "PostgreSQL", "Redis", "Celery", "React", "AWS"],
    highlights: [
      "Autonomous optimization pipelines for email deliverability",
      "Real-time domain reputation monitoring and alerting",
      "AI-driven recommendations for inbox placement improvement",
      "Interactive dashboards with actionable deliverability insights",
      "Scalable email communication infrastructure",
    ],
    links: {
      github: "https://github.com/ankitdhariwal",
    },
    image: "/assets/projects/email-platform.jpg",
    featured: false,
    year: 2024,
    status: "live",
  },
  {
    id: "glam-you-up",
    title: "Glam You Up — AI Beautification Platform",
    description:
      "AI-based face analysis platform performing a complete facial scan in 30–40 seconds using multiple AI agents to assess skin health, nutritional deficiencies, and wellness.",
    longDescription:
      "Developed an AI-based face analysis platform that performs a complete facial scan in 30–40 seconds using multiple AI agents. The system assesses skin health, nutritional deficiencies, and overall wellness, then delivers personalized recommendations for skincare products, vitamins, and supplements tailored to each individual's facial analysis.",
    categories: ["AI", "Agents"],
    tech: ["Python", "FastAPI", "OpenAI", "Computer Vision", "React", "PostgreSQL", "AWS"],
    highlights: [
      "Complete facial scan and analysis in 30–40 seconds",
      "Multi-agent AI system for skin health and wellness assessment",
      "Personalized recommendations for skincare, vitamins, and supplements",
      "Nutritional deficiency detection from facial analysis",
      "Personal project showcasing applied agentic AI",
    ],
    links: {
      github: "https://github.com/ankitdhariwal",
    },
    image: "/assets/projects/glam-you-up.jpg",
    featured: true,
    year: 2024,
    status: "live",
  },
  {
    id: "shipment-tracking-platform",
    title: "Shipment Tracking Platform",
    description:
      "High-throughput order-tracking platform handling millions of shipment events per day across 17+ courier partners using Go microservices.",
    longDescription:
      "Led the rebuild of Shiprocket's order-tracking platform handling millions of shipment events per day across 17+ courier partners. Built using Go microservices with Buffalo framework, PostgreSQL, and Redis for real-time state management. Designed the architecture from scratch through production rollout, enabling reliable near real-time shipment status updates for merchants.",
    categories: ["Automation", "SaaS"],
    tech: ["Go", "go-buffalo", "PostgreSQL", "Redis", "Kafka", "Docker", "Microservices"],
    highlights: [
      "Millions of shipment events per day across 17+ courier partners",
      "Go microservices with Buffalo framework for high throughput",
      "Near real-time shipment status updates for merchants",
      "Automated daily reports for operations and business teams",
      "Architecture designed and delivered end-to-end",
    ],
    links: {
      github: "https://github.com/ankitdhariwal",
    },
    image: "/assets/projects/tracking-platform.jpg",
    featured: false,
    year: 2021,
    status: "live",
  },
];
