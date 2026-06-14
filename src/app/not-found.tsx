import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex min-h-[100svh] flex-col items-center justify-center bg-[var(--color-canvas)] text-center px-6">
      <p className="mb-4 font-mono text-[11px] uppercase tracking-widest text-[var(--color-ink-3)]">
        404
      </p>
      <h1
        className="mb-4 font-display italic text-[var(--color-ink)]"
        style={{ fontSize: "clamp(3rem, 7vw, 6rem)", lineHeight: 1, letterSpacing: "-0.04em" }}
      >
        Page not found.
      </h1>
      <p className="mb-10 text-[var(--color-ink-2)]" style={{ maxWidth: "38ch" }}>
        This page doesn&apos;t exist — or it was moved. Head home and try again.
      </p>
      <Button variant="primary" size="lg" asChild>
        <Link href="/">Back to home</Link>
      </Button>
    </div>
  );
}
