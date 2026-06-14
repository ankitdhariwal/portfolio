"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, MapPin, Clock } from "lucide-react";
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { SiHuggingface } from "react-icons/si";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ContactForm } from "@/components/features/ContactForm";
import { personal } from "@/data/personal";

const socials = [
  { href: personal.social.github,   icon: FaGithub,     bg: "#333",    label: "GitHub" },
  { href: personal.social.linkedin, icon: FaLinkedinIn, bg: "#0e76a8", label: "LinkedIn" },
  { href: personal.social.twitter,  icon: FaTwitter,    bg: "#1da1f2", label: "Twitter" },
  { href: "https://huggingface.co/ankitdhariwal", icon: SiHuggingface, bg: "#ff9d00", label: "HuggingFace" },
];

export function Contact() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });

  return (
    <section id="contact" ref={ref} className="dev-section bg-[#0a1628]">
      <div className="dev-container">
        <SectionHeading
          title="Get In Touch"
          emoji="☎️"
          subtitle="Have a project in mind or want to collaborate? Feel free to reach out!"
        />

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left — contact info */}
          <motion.div
            className="lg:w-[380px] shrink-0"
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="dev-card p-7 mb-6">
              <h3 className="font-bold text-white text-xl mb-4">Let&apos;s Talk 🤝</h3>
              <p className="text-[#868e96] text-[15px] leading-relaxed mb-6">
                I&apos;m currently open to senior AI engineering roles, consulting projects, and
                interesting collaborations. Whether you&apos;re building an AI product or just want to
                say hi — my inbox is always open.
              </p>

              <div className="space-y-4">
                <a href={personal.social.email}
                  className="flex items-center gap-3 text-[#868e96] hover:text-[#93c5fd] transition-colors group">
                  <div className="w-10 h-10 rounded-lg bg-[rgba(37,99,235,0.2)] border border-[rgba(37,99,235,0.3)] flex items-center justify-center group-hover:bg-[rgba(37,99,235,0.4)] transition-colors">
                    <Mail size={17} className="text-[#93c5fd]" />
                  </div>
                  <div>
                    <p className="text-xs text-[#868e96] mb-0.5">Email</p>
                    <p className="text-white font-medium text-sm">{personal.email}</p>
                  </div>
                </a>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[rgba(37,99,235,0.2)] border border-[rgba(37,99,235,0.3)] flex items-center justify-center">
                    <MapPin size={17} className="text-[#93c5fd]" />
                  </div>
                  <div>
                    <p className="text-xs text-[#868e96] mb-0.5">Location</p>
                    <p className="text-white font-medium text-sm">{personal.location}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[rgba(37,99,235,0.2)] border border-[rgba(37,99,235,0.3)] flex items-center justify-center">
                    <Clock size={17} className="text-[#93c5fd]" />
                  </div>
                  <div>
                    <p className="text-xs text-[#868e96] mb-0.5">Status</p>
                    <p className="text-[#93c5fd] font-medium text-sm">{personal.availability}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social */}
            <div className="dev-card p-6">
              <p className="text-sm font-semibold text-[#868e96] uppercase tracking-wider mb-4">Find me on</p>
              <div className="flex gap-3 flex-wrap">
                {socials.map(({ href, icon: Icon, bg, label }) => (
                  <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                    aria-label={label}
                    className="social-icon-btn transition-transform hover:-translate-y-1"
                    style={{ backgroundColor: bg }}>
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.div
            className="flex-1"
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <div className="dev-card p-8">
              <h3 className="font-bold text-white text-xl mb-6">Send a Message</h3>
              <ContactForm />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
