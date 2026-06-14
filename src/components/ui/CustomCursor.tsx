"use client";

import { useEffect, useRef } from "react";
import { useMediaQuery } from "@/hooks/useMediaQuery";

export function CustomCursor() {
  const dotRef  = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const pos     = useRef({ x: -200, y: -200 });
  const ringPos = useRef({ x: -200, y: -200 });
  const rafRef  = useRef<number>(0);
  const hovered = useRef(false);
  const clicked = useRef(false);
  const isMobile = useMediaQuery("(hover: none)");

  useEffect(() => {
    if (isMobile) return;
    const dot  = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    const onMove = (e: MouseEvent) => {
      pos.current = { x: e.clientX, y: e.clientY };
      dot.style.transform = `translate(${e.clientX - 3}px, ${e.clientY - 3}px)`;
    };

    const onDown  = () => { clicked.current = true;  dot.style.transform += " scale(1.8)"; };
    const onUp    = () => { clicked.current = false; };

    const enter = (e: Event) => {
      hovered.current = true;
      const el = e.currentTarget as HTMLElement;
      const onCanvas = el.closest("canvas") !== null;
      ring.style.opacity = onCanvas ? "0" : "1";
      ring.style.transform = ring.style.transform.replace(" scale(1)", "") + " scale(2)";
      ring.style.borderColor = "rgba(14,165,233,0.7)";
    };

    const leave = () => {
      hovered.current = false;
      ring.style.opacity = "1";
      ring.style.borderColor = "rgba(248,249,250,0.2)";
    };

    const animate = () => {
      ringPos.current.x += (pos.current.x - ringPos.current.x) * 0.11;
      ringPos.current.y += (pos.current.y - ringPos.current.y) * 0.11;
      const scale = hovered.current ? " scale(2)" : " scale(1)";
      ring.style.transform = `translate(${ringPos.current.x - 18}px, ${ringPos.current.y - 18}px)${scale}`;
      rafRef.current = requestAnimationFrame(animate);
    };
    rafRef.current = requestAnimationFrame(animate);

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);

    const els = document.querySelectorAll("a, button, [data-cursor]");
    els.forEach(el => { el.addEventListener("mouseenter", enter); el.addEventListener("mouseleave", leave); });

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      cancelAnimationFrame(rafRef.current);
      els.forEach(el => { el.removeEventListener("mouseenter", enter); el.removeEventListener("mouseleave", leave); });
    };
  }, [isMobile]);

  if (isMobile) return null;

  return (
    <>
      <div
        ref={dotRef}
        className="fixed top-0 left-0 z-[9999] w-[6px] h-[6px] rounded-full bg-[#F8F9FA] pointer-events-none will-change-transform"
        style={{ transform: "translate(-200px,-200px)", transition: "transform 0.04s linear" }}
      />
      <div
        ref={ringRef}
        className="fixed top-0 left-0 z-[9998] w-9 h-9 rounded-full border border-[rgba(248,249,250,0.2)] pointer-events-none will-change-transform"
        style={{
          transform: "translate(-200px,-200px) scale(1)",
          transition: "border-color 0.2s, opacity 0.2s, transform 0.05s linear",
        }}
      />
    </>
  );
}
