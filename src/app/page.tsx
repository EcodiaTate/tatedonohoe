"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import styles from "./vanishing.module.css";

export default function Page() {
  const [email, setEmail] = useState("");
  const [step, setStep] = useState<"email" | "idea" | "done">("email");
  const [idea, setIdea] = useState("");
  const [fading, setFading] = useState(false);
  const [elapsed, setElapsed] = useState(0);

  const duration = 45000; // 45s
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // disable backspace in idea mode
  useEffect(() => {
    if (step !== "idea") return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Backspace") e.preventDefault();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [step]);

  const handleSubmit = useCallback(async () => {
    if (fading || step !== "idea") return;

    setFading(true);
    try {
      await fetch("/api/send-idea", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, idea }),
      });
    } catch {
      // intentionally swallow — experience continues regardless
    }

    setTimeout(() => setStep("done"), 2500);
  }, [email, idea, fading, step]);

  // timer + send logic
  useEffect(() => {
    if (step !== "idea") return;

    const start = Date.now();
    const interval = setInterval(() => setElapsed(Date.now() - start), 100);
    const endTimer = setTimeout(() => handleSubmit(), duration);

    return () => {
      clearInterval(interval);
      clearTimeout(endTimer);
    };
  }, [step, duration, handleSubmit]);

  // Enter = Done (Shift+Enter = newline)
  useEffect(() => {
    if (step !== "idea") return;

    const handler = (e: KeyboardEvent) => {
      if (e.key !== "Enter") return;
      if (e.shiftKey) return; // allow newline
      e.preventDefault();
      handleSubmit();
    };

    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [step, handleSubmit]);

  const shimmerHTML = () => {
    // more generous shimmer vocabulary:
    // - verbs: build/create/make/ship/design/launch etc.
    // - nouns: app/site/product/tool/world etc.
    // - vibes: dream/obsessed/curious/weird/beautiful etc.
    // plus a few stems so "building", "builder", "created", "creating" shimmer too.
    const highlight =
      /\b(build(?:ing|er|ers)?|make(?:s|r|rs|ing)?|create(?:s|d|r|rs|ing)?|craft(?:s|ed|ing)?|design(?:s|ed|er|ing)?|invent(?:s|ed|ing)?|launch(?:es|ed|ing)?|ship(?:s|ped|ping)?|start(?:s|ed|ing)?|grow(?:s|n|ing)?|change(?:s|d|ing)?|break(?:s|ing)?|hack(?:s|ed|ing)?|learn(?:s|ed|ing)?|play(?:s|ed|ing)?|explore(?:s|d|ing)?|discover(?:s|ed|ing)?|dream(?:s|t|ing)?|imagine(?:s|d|ing)?|future|world|local|life|magic|spark|light|gravity|signal|pattern|story|myth|ritual|tool|product|service|platform|system|engine|app|site|website|mobile|native|backend|frontend|api|graph|neo4j|react|next(?:js)?|ai|agent|bot|assistant|automation|flow|dashboard|marketplace|community|studio|wallet|token|offer|reward|quest|sidequest|eco|sustain(?:able|ability)?|regenerat(?:e|ion|ive)|beautiful|weird|curious|obsess(?:ed|ion)?|secret|quiet|bold|simple|radical|dangerous|alive)\b/gi;

    // escape HTML first so user can't inject tags into dangerouslySetInnerHTML
    const escaped = idea
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");

    return escaped.replace(
      highlight,
      (m) => `<span class="${styles.shimmer}">${m}</span>`
    );
  };

  if (step === "done")
    return (
      <main className={styles.center}>
        <p className={styles.fadeText}>Well done. I'll have a think.</p>
      </main>
    );

  if (step === "email")
    return (
      <main className={styles.center}>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (/\S+@\S+\.\S+/.test(email)) setStep("idea");
          }}
        >
          <input
            type="email"
            required
            autoFocus
            className={styles.emailInput}
            placeholder="where should i reply ?"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </form>
      </main>
    );

  const progress = Math.min(elapsed / duration, 1);

  return (
    <main className={`${styles.surface} ${fading ? styles.fadeOut : ""}`}>
      {/* subtle bottom progress bar */}
      <div
        className={styles.progress}
        style={{ transform: `scaleX(${progress})` }}
      />

      {/* tiny prompt above body (separate from textarea placeholder) */}
      {idea.length === 0 && !fading && (
        <div className={styles.miniPrompt}>
          what are you trying to build?
          <span className={styles.miniPromptSub}>
            {" "}
          </span>
        </div>
      )}

      {/* prompt cursor if empty */}
      {idea.length === 0 && <div className={styles.cursorPrompt}>|</div>}

      {/* displayed text */}
      <div
        className={styles.textArea}
        dangerouslySetInnerHTML={{ __html: shimmerHTML() }}
      />

      {/* hidden textarea for input */}
      <textarea
        ref={textareaRef}
        autoFocus
        className={styles.hiddenInput}
        onChange={(e) => setIdea(e.target.value)}
        value={idea}
        placeholder="tell me what you want to build ..."
      />

      {/* non-invasive hints */}
      <div className={styles.hintRow}>
        <span className={styles.noBackspace}>no polishing</span>
        <button
          type="button"
          onClick={handleSubmit}
          className={styles.submitButton}
        >
          Done →
        </button>
      </div>
    </main>
  );
}
