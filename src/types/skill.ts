export interface Skill {
  name: string;
  icon?: string;
  level?: number;
}

export interface SkillCategory {
  name: string;
  color: string;
  ring: "inner" | "middle" | "outer";
  skills: Skill[];
}
