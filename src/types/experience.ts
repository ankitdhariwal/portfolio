export interface Experience {
  id: string;
  company: string;
  companyUrl?: string;
  role: string;
  type: "full-time" | "contract" | "freelance";
  startDate: string;
  endDate: string;
  isCurrent?: boolean;
  location: string;
  description: string;
  achievements: string[];
  tech: string[];
  logo?: string;
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  year?: number;
  link?: string;
}
