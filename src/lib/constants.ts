export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://ankitdhariwal.com";

export const NAV_LINKS = [
  { label: "Skills",         href: "#skills"       },
  { label: "Work Experience",href: "#experience"   },
  { label: "Projects",       href: "#projects"     },
  { label: "Achievements",   href: "#achievements" },
  { label: "About",          href: "#about"        },
  { label: "Contact Me",     href: "#contact"      },
] as const;

export const SOCIAL_LINKS = {
  github:      "https://github.com/ankitdhariwal",
  linkedin:    "https://linkedin.com/in/ankitdhariwal",
  twitter:     "https://twitter.com/ankitdhariwal",
  huggingface: "https://huggingface.co/ankitdhariwal",
  email:       "mailto:ankitdhariwal2@gmail.com",
} as const;

export const CATEGORY_COLORS = {
  AI:         "cyan",
  Agents:     "purple",
  NLP:        "purple",
  Vision:     "magenta",
  Automation: "green",
  SaaS:       "cyan",
} as const;

export const PROJECT_CATEGORIES = [
  "All",
  "AI",
  "Agents",
  "NLP",
  "Vision",
  "Automation",
  "SaaS",
] as const;
