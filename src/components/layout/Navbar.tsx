"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useTheme } from "next-themes";
import { NAV_LINKS } from "@/lib/constants";
import { personal } from "@/data/personal";
import { cn } from "@/lib/utils";

function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return <div className="w-14 h-7" />;

  const dark = theme === "dark";

  return (
    <button
      onClick={() => setTheme(dark ? "light" : "dark")}
      aria-label="Toggle theme"
      className={cn(
        "relative inline-flex items-center w-14 h-7 rounded-full border-2 transition-all duration-300 focus-visible:outline-none",
        dark
          ? "bg-[#2563eb] border-[#2563eb]"
          : "bg-[#93c5fd] border-[#93c5fd]"
      )}
    >
      <span
        className={cn(
          "absolute flex items-center justify-center w-5 h-5 rounded-full bg-white shadow-md transition-all duration-300 text-[11px]",
          dark ? "translate-x-7" : "translate-x-0.5"
        )}
      >
        {dark ? "🌙" : "☀️"}
      </span>
    </button>
  );
}

export function Navbar() {
  const [scrolled, setScrolled]     = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive]         = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) setActive(e.target.id); }),
      { rootMargin: "-50% 0px -50% 0px" }
    );
    NAV_LINKS.forEach(({ href }) => {
      const el = document.querySelector(href);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  const nav = (href: string) => {
    setMobileOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-[900] transition-all duration-300",
          scrolled
            ? "bg-[#0a1628]/95 backdrop-blur-sm shadow-[0_2px_20px_rgba(0,0,0,0.3)]"
            : "bg-transparent"
        )}
      >
        <div className="dev-container flex items-center justify-between py-4">
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Back to top"
            className="flex items-baseline gap-0 text-white hover:text-[#93c5fd] transition-colors duration-300"
          >
            <span
              className="text-[#93c5fd] font-mono font-bold text-xl leading-none"
            >
              {"< "}
            </span>
            <span
              className="font-mono text-white text-2xl leading-none px-0.5"
            >
              {personal.name}
            </span>
            <span
              className="text-[#93c5fd] font-mono font-bold text-xl leading-none"
            >
              {" />"}
            </span>
          </button>

          {/* Desktop links */}
          <nav className="hidden lg:flex items-center gap-0.5">
            {NAV_LINKS.map(({ label, href }) => (
              <button
                key={href}
                onClick={() => nav(href)}
                className={cn(
                  "px-4 py-2 rounded-md text-[14px] font-medium transition-all duration-200 whitespace-nowrap",
                  active === href.slice(1)
                    ? "text-white bg-[rgba(37,99,235,0.18)]"
                    : "text-[#868e96] hover:text-white hover:bg-[rgba(255,255,255,0.05)]"
                )}
              >
                {label}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <ThemeToggle />
            {/* Hamburger */}
            <button
              className="lg:hidden p-2 text-[#868e96] hover:text-white transition-colors"
              onClick={() => setMobileOpen(v => !v)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.22 }}
            className="fixed inset-x-0 top-[65px] z-[800] bg-[#0a1628] shadow-[0_8px_24px_rgba(0,0,0,0.4)] lg:hidden"
          >
            <div className="dev-container py-4 flex flex-col gap-1">
              {NAV_LINKS.map(({ label, href }) => (
                <button
                  key={href}
                  onClick={() => nav(href)}
                  className="py-3 px-4 text-left text-base font-medium text-[#868e96] hover:text-white hover:bg-[rgba(37,99,235,0.2)] rounded-md transition-colors"
                >
                  {label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
