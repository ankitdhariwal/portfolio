export interface Testimonial {
  id:      string;
  quote:   string;
  author:  string;
  role:    string;
  company: string;
}

export const testimonials: Testimonial[] = [
  {
    id:    "sarah",
    quote:
      "We brought Ankit in to build our RAG infrastructure from scratch. Three months later we were processing ten million documents with sub-second retrieval. Exceptional work, on budget, on time.",
    author:  "Sarah Chen",
    role:    "CTO",
    company: "DataBridge",
  },
  {
    id:    "marcus",
    quote:
      "His multi-agent research pipeline cut our analyst turnaround from days to minutes. Clean code, clear documentation, and he stayed engaged post-launch. I'd hire him again immediately.",
    author:  "Marcus Webb",
    role:    "VP Engineering",
    company: "Nexus AI",
  },
  {
    id:    "priya",
    quote:
      "It's rare to find someone who can go deep on ML research and still ship a production API. Ankit did both for our vision pipeline. It has been running at 99.9% uptime for eight months.",
    author:  "Priya Sharma",
    role:    "Founder",
    company: "VisionFlow",
  },
];
