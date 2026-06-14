import type { Experience } from "@/types";

export const experiences: Experience[] = [
  {
    id: "shorthills-ai",
    company: "ShortHills AI",
    companyUrl: "https://shorthills.ai",
    role: "Senior Software Engineer",
    type: "full-time",
    startDate: "Nov 2024",
    endDate: "Present",
    isCurrent: true,
    location: "Gurugram, Haryana",
    description:
      "Architecting and leading production-grade GenAI platforms for UK healthcare, pharmaceutical clients, and PwC — owning end-to-end system design, agentic LLM orchestration, and cross-functional team delivery.",
    achievements: [
      "Architected and delivered an Automated APQR (Annual Product Quality Review) platform for a UK pharma client with full FastAPI backend and PostgreSQL schema design",
      "Contributed to the formation of the Agentic AI team at PwC and built multiple POCs across the organization",
      "Led development of the end-to-end Agentic AI workflow for the PwC NTH taxation model",
      "Built an AI-powered email deliverability and domain reputation platform with autonomous optimization pipelines and interactive dashboards",
      "Developed a multi-LLM gateway using LiteLLM with a centralized MLflow registry for governance, model versioning, and enterprise query accuracy",
      "Built a Hybrid Retrieval Intelligence System using LightRAG, Astra DB, and Neo4j with agentic retrieval pipelines for accurate, explainable knowledge search",
      "Led cross-functional teams of 10–15 members across multiple concurrent projects",
    ],
    tech: ["Python", "FastAPI", "LiteLLM", "LightRAG", "OpenAI", "Anthropic", "Neo4j", "Astra DB", "MLflow", "PostgreSQL", "GCP", "AWS"],
  },
  {
    id: "wingify",
    company: "Wingify (VWO)",
    companyUrl: "https://wingify.com",
    role: "Senior Software Engineer",
    type: "full-time",
    startDate: "Jun 2021",
    endDate: "Apr 2024",
    location: "Gurugram, Haryana",
    description:
      "Owned VWO's Pricing System, Payment Service, and Subscription Management platform — delivering third-party billing integrations and leading a team of engineers and QA.",
    achievements: [
      "Owned end-to-end delivery of VWO's Pricing System, Payment Service, and Subscription Management platform",
      "Delivered third-party billing integrations with Salesforce, Avangate, and 2Checkout to automate subscription lifecycle management and revenue reconciliation",
      "Built scalable Flask and PostgreSQL services with Redis/Memcached caching and Kafka/RabbitMQ pipelines",
      "Led a team of 2 engineers and QA members, driving sprint planning, code reviews, and architecture decisions",
    ],
    tech: ["Python", "Flask", "PostgreSQL", "Salesforce", "Redis", "Memcached", "Kafka", "RabbitMQ", "AWS"],
  },
  {
    id: "shiprocket",
    company: "Shiprocket",
    companyUrl: "https://shiprocket.in",
    role: "Software Engineer",
    type: "full-time",
    startDate: "Jan 2020",
    endDate: "Jun 2021",
    location: "Gurugram, Haryana",
    description:
      "Led the rebuild of the order-tracking platform handling millions of shipment events per day across 17+ courier partners, and contributed to the Reports System team.",
    achievements: [
      "Led the rebuild of the order-tracking platform handling millions of shipment events per day across 17+ courier partners using Go microservices, Buffalo, PostgreSQL, and Redis",
      "Designed and implemented the next phase of the tracking system end-to-end — from architecture through production rollout — enabling reliable near real-time shipment status updates for merchants",
      "Contributed to the Reports System team, delivering automated daily reports across multiple shipment tracking scenarios used by operations, merchant success, and business teams",
      "Collaborated with logistics, product, and engineering teams to onboard new courier partners and improve reliability of the tracking and reporting pipeline",
    ],
    tech: ["Go", "go-buffalo", "PostgreSQL", "Redis", "Kafka", "Docker", "Microservices"],
  },
  {
    id: "paytm",
    company: "Paytm (Paytm Mall)",
    companyUrl: "https://paytm.com",
    role: "Software Engineer",
    type: "full-time",
    startDate: "Aug 2018",
    endDate: "Dec 2019",
    location: "Noida, UP",
    description:
      "Developed REST APIs and server-side features for the Paytm Mall Catalog team, supporting eCommerce operations at scale.",
    achievements: [
      "Developed REST APIs and server-side features for the Paytm Mall Catalog as part of the Catalog team, supporting eCommerce operations at scale",
      "Built backend functionality for the product create and update flows, enabling the Catalog team to maintain accurate product data across a large inventory",
      "Re-architected the Buy Now logic to ensure consistent Product IDs across Grid and PDP, eliminating cart mismatch defects",
      "Worked closely with product managers and frontend teams to deliver new Catalog features, improving product data quality and platform stability",
    ],
    tech: ["Node.js", "JavaScript", "PostgreSQL", "Redis", "Memcached", "AWS", "REST APIs"],
  },
];
