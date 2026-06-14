"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Send, CheckCircle2, AlertCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import type { ContactFormData } from "@/types";

const schema = z.object({
  name:    z.string().min(2, "Name must be at least 2 characters"),
  email:   z.string().email("Invalid email address"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(20, "Message must be at least 20 characters").max(1000),
});

type FormStatus = "idle" | "loading" | "success" | "error";

const inputClass = "w-full bg-[rgba(255,255,255,0.04)] border border-[rgba(59,130,246,0.2)] rounded-lg px-4 py-3 text-white text-base outline-none transition-all duration-200 placeholder:text-[#868e96] focus:border-[#2563eb] focus:shadow-[0_0_0_2px_rgba(37,99,235,0.2)]";

export function ContactForm() {
  const [status, setStatus] = useState<FormStatus>("idle");

  const { register, handleSubmit, reset, formState: { errors } } = useForm<ContactFormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (json.success) { setStatus("success"); reset(); }
      else setStatus("error");
    } catch { setStatus("error"); }
  };

  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center gap-4 py-12 text-center">
        <div className="w-16 h-16 rounded-full bg-[rgba(37,99,235,0.2)] border border-[rgba(37,99,235,0.4)] flex items-center justify-center">
          <CheckCircle2 size={32} className="text-[#93c5fd]" />
        </div>
        <h3 className="font-bold text-white text-xl">Message Sent!</h3>
        <p className="text-[#868e96] text-sm max-w-xs">Thanks for reaching out. I&apos;ll get back to you within 24 hours.</p>
        <button onClick={() => setStatus("idle")} className="text-sm font-semibold text-[#93c5fd] hover:underline">
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <div className="flex flex-col gap-1.5">
          <label className="text-sm font-semibold text-[#868e96]">Name</label>
          <input className={cn(inputClass, errors.name && "border-red-500")} placeholder="Your name" {...register("name")} />
          {errors.name && <p className="text-xs text-red-400">{errors.name.message}</p>}
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="text-sm font-semibold text-[#868e96]">Email</label>
          <input type="email" className={cn(inputClass, errors.email && "border-red-500")} placeholder="your@email.com" {...register("email")} />
          {errors.email && <p className="text-xs text-red-400">{errors.email.message}</p>}
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <label className="text-sm font-semibold text-[#868e96]">Subject</label>
        <input className={cn(inputClass, errors.subject && "border-red-500")} placeholder="What's this about?" {...register("subject")} />
        {errors.subject && <p className="text-xs text-red-400">{errors.subject.message}</p>}
      </div>

      <div className="flex flex-col gap-1.5">
        <label className="text-sm font-semibold text-[#868e96]">Message</label>
        <textarea
          rows={5}
          className={cn(inputClass, "resize-none", errors.message && "border-red-500")}
          placeholder="Tell me about your project or opportunity..."
          {...register("message")}
        />
        {errors.message && <p className="text-xs text-red-400">{errors.message.message}</p>}
      </div>

      {status === "error" && (
        <div className="flex items-center gap-2 rounded-lg border border-red-500/30 bg-red-500/10 px-4 py-3">
          <AlertCircle size={15} className="text-red-400 shrink-0" />
          <p className="text-sm text-red-400">Something went wrong. Please try again or email directly.</p>
        </div>
      )}

      <button type="submit" disabled={status === "loading"} className="dev-btn w-full justify-center">
        {status === "loading" ? (
          <><span className="animate-spin inline-block w-4 h-4 border-2 border-white/30 border-t-white rounded-full" /> Sending...</>
        ) : (
          <><Send size={16} /> Send Message</>
        )}
      </button>
    </form>
  );
}
