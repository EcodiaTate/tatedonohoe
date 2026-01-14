"use client";

import React, { useState, useEffect, useRef } from "react";
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

  // timer + send logic
  useEffect(() => {
    if (step !== "idea") return;
    const start = Date.now();
    const interval = setInterval(() => {
      setElapsed(Date.now() - start);
    }, 100);
    const endTimer = setTimeout(() => handleSubmit(), duration);
    return () => {
      clearInterval(interval);
      clearTimeout(endTimer);
    };
  }, [step]);

  async function handleSubmit() {
    if (fading || step !== "idea") return;
    setFading(true);
    await fetch("/api/send-idea", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, idea }),
    });
    setTimeout(() => setStep("done"), 2500);
  }

  const shimmerHTML = () => {
    const highlight = /(build|make|create|love|dream|change|start|world|light|grow)/gi;
    return idea.replace(highlight, (m) => `<span class="${styles.shimmer}">${m}</span>`);
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

      {/* prompt cursor if empty */}
      {idea.length === 0 && (
        <div className={styles.cursorPrompt}>|</div>
      )}

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
<button onClick={handleSubmit} className={styles.submitButton}>
          Done →
        </button>
      </div>
    </main>
  );
}
