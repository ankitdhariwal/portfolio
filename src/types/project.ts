export type ProjectCategory = "AI" | "Agents" | "NLP" | "Vision" | "Automation" | "SaaS";

export interface ProjectLink {
  github?: string;
  live?: string;
  demo?: string;
  paper?: string;
  casestudy?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  categories: ProjectCategory[];
  tech: string[];
  highlights: string[];
  links: ProjectLink;
  image: string;
  featured: boolean;
  year: number;
  status: "live" | "wip" | "archived";
}
