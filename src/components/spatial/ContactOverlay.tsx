"use client";

import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function ContactOverlay() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const refId = useMemo(
    () => Math.random().toString(36).substring(7).toUpperCase(),
    [],
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-2xl"
    >
      {/* subtle glitch wash (less aggressive so it doesn’t trash text contrast) */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0.02, 0.08, 0.03, 0.10, 0.02] }}
        transition={{ repeat: Infinity, duration: 0.35 }}
        className="absolute inset-0 pointer-events-none mix-blend-overlay"
        style={{
          background:
            "linear-gradient(90deg, rgba(249,115,22,0.0) 0%, rgba(249,115,22,0.14) 50%, rgba(249,115,22,0.0) 100%)",
        }}
      />

      <motion.div
        initial={{ scale: 0.97, y: 18, opacity: 0 }}
        animate={{ scale: 1, y: 0, opacity: 1 }}
        transition={{ type: "spring", damping: 22, stiffness: 120 }}
        className="relative w-[92vw] max-w-md overflow-hidden border border-white/15 bg-zinc-950/70 shadow-2xl"
      >
        {/* scanline */}
        <div className="absolute top-0 left-0 h-[1px] w-full bg-white/15 animate-scanline" />

        <div className="px-8 py-8">
          <div className="flex items-start justify-between gap-6 mb-8">
            <div className="space-y-2">
              <div className="text-[11px] font-mono uppercase tracking-[0.22em] text-orange-400/90">
                Match Found
              </div>
              <h2 className="text-[22px] leading-tight font-semibold tracking-[-0.02em] text-white">
                Direct collaboration
              </h2>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Leave a signal. If it’s a fit, I’ll reply.
              </p>
            </div>

            <div className="text-right font-mono text-[10px] text-zinc-500 whitespace-nowrap pt-1">
              REF_ID
              <div className="text-zinc-400 tracking-[0.12em]">{refId}</div>
            </div>
          </div>

          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              <Field label="Project identity">
                <input
                  required
                  type="text"
                  placeholder="What are we calling it?"
                  className={cn(
                    "w-full bg-transparent border-b border-white/10",
                    "py-3 text-[15px] text-zinc-100 outline-none",
                    "transition-colors focus:border-white/35",
                    "placeholder:text-zinc-600",
                  )}
                />
              </Field>

              <Field label="Psychological goal">
                <textarea
                  required
                  placeholder="What should people feel when they use it?"
                  className={cn(
                    "w-full h-24 bg-transparent border-b border-white/10",
                    "py-3 text-[15px] text-zinc-100 outline-none resize-none",
                    "transition-colors focus:border-white/35",
                    "placeholder:text-zinc-600",
                  )}
                />
              </Field>

              <Field label="Return path">
                <input
                  required
                  type="email"
                  placeholder="you@domain.com"
                  className={cn(
                    "w-full bg-transparent border-b border-white/10",
                    "py-3 text-[15px] text-zinc-100 outline-none",
                    "transition-colors focus:border-white/35",
                    "placeholder:text-zinc-600",
                  )}
                />
              </Field>

              <button
                disabled={loading}
                type="submit"
                className={cn(
                  "relative w-full mt-2 py-4 overflow-hidden",
                  "font-mono text-[11px] font-semibold uppercase tracking-[0.26em]",
                  "transition-colors",
                  "bg-white text-black hover:bg-orange-500 hover:text-white",
                  "disabled:opacity-50 disabled:hover:bg-white disabled:hover:text-black",
                )}
              >
                {loading ? "Transmitting…" : "Send signal"}
              </button>

              <div className="pt-1 text-[11px] text-zinc-500 leading-relaxed">
                No pitch deck required. Two clear sentences beats a wall of context.
              </div>
            </form>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="py-10 text-center"
            >
              <div className="mb-4 text-orange-400">●</div>
              <h3 className="text-[18px] font-semibold text-white mb-2">
                Signal received.
              </h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Connection established. I’ll reach out soon.
              </p>
              <div className="mt-6 font-mono text-[10px] text-zinc-500 tracking-[0.18em] uppercase">
                REF_ID {refId}
              </div>
            </motion.div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="group relative">
      <label className="block mb-2 text-[11px] font-mono uppercase tracking-[0.22em] text-zinc-500 transition-colors group-focus-within:text-orange-400/90">
        {label}
      </label>
      {children}
    </div>
  );
}
