import type { Metadata } from "next";
import { SITE_URL } from "./constants";

export const siteMetadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Ankit Dhariwal — Senior AI Engineer",
    template: "%s | Ankit Dhariwal",
  },
  description:
    "Senior AI Engineer specializing in LLMs, Autonomous Agents, Automation, and Full-Stack AI Systems. Building intelligent systems that think, learn & scale.",
  keywords: [
    "AI Engineer",
    "Senior AI Engineer",
    "LLM",
    "Large Language Models",
    "Autonomous Agents",
    "Machine Learning",
    "Deep Learning",
    "PyTorch",
    "LangChain",
    "RAG",
    "NLP",
    "Computer Vision",
    "Full Stack AI",
    "Ankit Dhariwal",
  ],
  authors: [{ name: "Ankit Dhariwal", url: SITE_URL }],
  creator: "Ankit Dhariwal",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    title: "Ankit Dhariwal — Senior AI Engineer",
    description:
      "Building intelligent systems that think, learn, and scale. Specializing in LLMs, Agents, and Full-Stack AI.",
    siteName: "Ankit Dhariwal",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Ankit Dhariwal — Senior AI Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ankit Dhariwal — Senior AI Engineer",
    description: "Building intelligent systems that think, learn, and scale.",
    creator: "@ankitdhariwal",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};
