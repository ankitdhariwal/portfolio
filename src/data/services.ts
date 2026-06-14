export interface Service {
  id:          string;
  title:       string;
  description: string;
  tags:        string[];
}

export const services: Service[] = [
  {
    id:    "llm",
    title: "LLM Engineering",
    description:
      "Custom language model fine-tuning, prompt engineering, RAG architectures, and streaming inference APIs built for millions of requests.",
    tags:  ["Fine-tuning", "RAG", "Streaming"],
  },
  {
    id:    "agents",
    title: "Autonomous Agents",
    description:
      "Multi-step agent pipelines with tool use, memory, and human-in-the-loop controls — from single-agent scripts to full production systems.",
    tags:  ["LangGraph", "AutoGen", "Tool Use"],
  },
  {
    id:    "documents",
    title: "Document Intelligence",
    description:
      "High-throughput document processing, semantic search, and retrieval at scale. Sub-second latency across millions of documents.",
    tags:  ["Vector DBs", "Embeddings", "OCR"],
  },
  {
    id:    "vision",
    title: "Computer Vision",
    description:
      "Real-time detection, tracking, and segmentation pipelines. Optimised for edge deployment and high-throughput production inference.",
    tags:  ["YOLOv8", "TensorRT", "OpenCV"],
  },
  {
    id:    "mlops",
    title: "ML Infrastructure",
    description:
      "End-to-end MLOps: training pipelines, experiment tracking, model serving, A/B testing, and production monitoring with drift detection.",
    tags:  ["MLflow", "Kubernetes", "Prometheus"],
  },
  {
    id:    "fullstack",
    title: "Full-Stack AI Products",
    description:
      "Complete AI applications — Next.js frontends, FastAPI backends, cloud deployments. From validated prototype to production in weeks.",
    tags:  ["Next.js", "FastAPI", "AWS"],
  },
];
