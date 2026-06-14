"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { SiHuggingface } from "react-icons/si";
import { Mail } from "lucide-react";
import { personal } from "@/data/personal";

const TITLES = [
  "GenAI Engineer",
  "Backend Engineer",
  "LLM & Agentic AI Developer",
  "RAG Systems Architect",
];

function useTypewriter(titles: string[]) {
  const [idx, setIdx]             = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting]   = useState(false);

  useEffect(() => {
    const current = titles[idx];
    if (!deleting) {
      if (displayed.length < current.length) {
        const t = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 90);
        return () => clearTimeout(t);
      } else {
        const t = setTimeout(() => setDeleting(true), 2200);
        return () => clearTimeout(t);
      }
    } else {
      if (displayed.length > 0) {
        const t = setTimeout(() => setDisplayed(d => d.slice(0, -1)), 45);
        return () => clearTimeout(t);
      } else {
        setDeleting(false);
        setIdx(i => (i + 1) % titles.length);
      }
    }
  }, [displayed, deleting, idx, titles]);

  return displayed;
}

const socials = [
  { href: personal.social.github,                       icon: FaGithub,     bg: "#333",     label: "GitHub"      },
  { href: personal.social.linkedin,                     icon: FaLinkedinIn, bg: "#0e76a8",  label: "LinkedIn"    },
  { href: "https://huggingface.co/ankitdhariwal",       icon: SiHuggingface,bg: "#ff9d00",  label: "HuggingFace" },
  { href: personal.social.twitter,                      icon: FaTwitter,    bg: "#1da1f2",  label: "Twitter"     },
  { href: personal.social.email,                        icon: Mail,         bg: "#ea4335",  label: "Email"       },
];

export function Hero() {
  const title = useTypewriter(TITLES);

  return (
    <section
      id="hero"
      className="min-h-[100svh] flex items-center bg-[#0a1628] relative overflow-hidden"
    >
      {/* Ambient glows */}
      <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] rounded-full bg-[#2563eb] opacity-[0.05] blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-[#3b82f6] opacity-[0.04] blur-[120px] pointer-events-none" />

      <div className="dev-container w-full py-28">
        <div className="flex flex-col items-center">

          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65 }}
          >
            {/* Greeting */}
            <h1 className="text-[clamp(1.2rem,5vw,4.5rem)] font-semibold text-white mb-4 leading-tight whitespace-nowrap">
              Hi, I&apos;m {personal.name}{" "}
              <span className="wave-emoji" role="img" aria-label="wave">👋</span>
            </h1>

            {/* Description */}
            <p className="text-[clamp(1.1rem,2.2vw,1.4rem)] text-[#c3c3c3] leading-relaxed mb-4 mx-auto">
              A{" "}
              <span className="text-white font-semibold">GenAI & Backend Engineer</span>{" "}
              🚀 with 7+ years building production AI systems across SaaS, fintech, e-commerce, and pharma —
              specialized in LLM applications, agentic AI workflows, and RAG systems.
            </p>

            {/* Typewriter role */}
            <div
              className="font-semibold text-[#868e96] mb-8"
              style={{ fontSize: "clamp(1.1rem,2.5vw,1.6rem)", minHeight: "2.1em" }}
            >
              <span className="text-[#93c5fd]">&lt;</span>
              <span className="text-white">{title}</span>
              <span className="cursor-blink text-[#93c5fd]">|</span>
              <span className="text-[#93c5fd]">/&gt;</span>
            </div>

            {/* Social icons */}
            <div className="flex items-center gap-3 justify-center mb-8 flex-wrap">
              {socials.map(({ href, icon: Icon, bg, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="social-icon-btn"
                  style={{ backgroundColor: bg }}
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>

            {/* CTA buttons */}
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="dev-btn"
              >
                CONTACT ME
              </a>
              <a
                href={personal.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="dev-btn dev-btn-outline"
              >
                DOWNLOAD MY RESUME
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
