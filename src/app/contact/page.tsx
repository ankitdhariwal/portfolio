"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Send, CheckCircle2 } from "lucide-react";
import { FaGithub, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import type { Metadata } from "next";
import { SectionLabel } from "@/components/shared/section-label";
import { Button }     from "@/components/ui/button";
import { Input }      from "@/components/ui/input";
import { Textarea }   from "@/components/ui/textarea";
import { Label }      from "@/components/ui/label";
import { Separator }  from "@/components/ui/separator";
import { personal }   from "@/data/personal";
import { SOCIAL_LINKS } from "@/lib/constants";

const schema = z.object({
  name:    z.string().min(2, "Name must be at least 2 characters"),
  email:   z.string().email("Enter a valid email"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(20, "Message must be at least 20 characters").max(1000),
});
type FormData = z.infer<typeof schema>;

function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    setStatus("loading");
    try {
      const res  = await fetch("/api/contact", {
        method:  "POST",
        headers: { "Content-Type": "application/json" },
        body:    JSON.stringify(data),
      });
      const json = await res.json();
      if (json.success) { setStatus("success"); reset(); }
      else setStatus("error");
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="flex flex-col items-center gap-4 py-20 text-center">
        <CheckCircle2 size={36} className="text-[var(--color-accent)]" />
        <h3 className="text-heading font-display text-[var(--color-ink)]">Message sent.</h3>
        <p className="text-sm text-[var(--color-ink-2)]">
          Thanks for reaching out — I&apos;ll reply within 24 hours.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="font-mono text-xs text-[var(--color-accent)] hover:underline underline-offset-4"
        >
          Send another
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="name">Name</Label>
          <Input id="name" placeholder="Your name" error={!!errors.name} {...register("name")} />
          {errors.name && <p className="text-xs text-red-500">{errors.name.message}</p>}
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="your@email.com" error={!!errors.email} {...register("email")} />
          {errors.email && <p className="text-xs text-red-500">{errors.email.message}</p>}
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="subject">Subject</Label>
        <Input id="subject" placeholder="What's this about?" error={!!errors.subject} {...register("subject")} />
        {errors.subject && <p className="text-xs text-red-500">{errors.subject.message}</p>}
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">Message</Label>
        <Textarea
          id="message"
          rows={6}
          placeholder="Tell me about your project, role, or idea…"
          error={!!errors.message}
          {...register("message")}
        />
        {errors.message && <p className="text-xs text-red-500">{errors.message.message}</p>}
      </div>

      {status === "error" && (
        <p className="rounded-[var(--radius-md)] border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">
          Something went wrong — please try again or email directly.
        </p>
      )}

      <Button
        type="submit"
        variant="primary"
        size="lg"
        disabled={status === "loading"}
        className="w-full"
      >
        {status === "loading" ? (
          <>
            <span className="h-4 w-4 animate-spin rounded-full border-2 border-[var(--color-canvas)] border-t-transparent" />
            Sending…
          </>
        ) : (
          <>
            <Send size={16} />
            Send message
          </>
        )}
      </Button>
    </form>
  );
}

export default function ContactPage() {
  const socials = [
    { href: SOCIAL_LINKS.github,    icon: FaGithub,     label: "GitHub"   },
    { href: SOCIAL_LINKS.linkedin,  icon: FaLinkedinIn, label: "LinkedIn" },
    { href: SOCIAL_LINKS.twitter,   icon: FaXTwitter,   label: "X"        },
  ];

  return (
    <div className="bg-[var(--color-canvas)]">
      <section className="section pt-32">
        <div className="container">
          <div className="grid gap-16 lg:grid-cols-[380px_1fr]">

            {/* ── Left: info ────────────────────────────────────────── */}
            <div className="space-y-10">
              <div className="space-y-4">
                <SectionLabel index="00" label="Contact" />
                <h1
                  className="text-title font-display italic text-[var(--color-ink)]"
                  style={{ maxWidth: "18ch" }}
                >
                  Let's build something.
                </h1>
                <p className="text-sm leading-relaxed text-[var(--color-ink-2)]">
                  Open to senior AI engineering roles, consulting engagements,
                  and interesting technical collaborations. I read every message.
                </p>
              </div>

              <Separator className="bg-[var(--color-edge)]" />

              <div className="space-y-4">
                <div className="space-y-0.5">
                  <p className="font-mono text-[11px] uppercase tracking-widest text-[var(--color-ink-3)]">Status</p>
                  <div className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500" />
                    <p className="text-sm text-[var(--color-ink-2)]">{personal.availability}</p>
                  </div>
                </div>
                <div className="space-y-0.5">
                  <p className="font-mono text-[11px] uppercase tracking-widest text-[var(--color-ink-3)]">Response time</p>
                  <p className="text-sm text-[var(--color-ink-2)]">Within 24 hours</p>
                </div>
                <div className="space-y-0.5">
                  <p className="font-mono text-[11px] uppercase tracking-widest text-[var(--color-ink-3)]">Timezone</p>
                  <p className="text-sm text-[var(--color-ink-2)]">IST (UTC+5:30)</p>
                </div>
                <div className="space-y-0.5">
                  <p className="font-mono text-[11px] uppercase tracking-widest text-[var(--color-ink-3)]">Email</p>
                  <a
                    href={SOCIAL_LINKS.email}
                    className="text-sm text-[var(--color-accent)] underline-offset-4 hover:underline"
                  >
                    ankitdhariwal2@gmail.com
                  </a>
                </div>
              </div>

              <Separator className="bg-[var(--color-edge)]" />

              <div className="flex gap-4">
                {socials.map(({ href, icon: Icon, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="flex h-10 w-10 items-center justify-center rounded-[var(--radius-md)]
                               border border-[var(--color-edge)] text-[var(--color-ink-3)]
                               transition-all hover:border-[var(--color-edge-2)] hover:text-[var(--color-ink)]"
                  >
                    <Icon size={16} />
                  </a>
                ))}
              </div>
            </div>

            {/* ── Right: form ───────────────────────────────────────── */}
            <div className="rounded-[var(--radius-xl)] border border-[var(--color-edge)] bg-[var(--color-surface)] p-8 lg:p-10">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
