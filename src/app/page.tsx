"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import styles from "./vanishing.module.css";

const INBOX ="3aeccaf7a7e1469935deff3ec48f2743";

export default function Page() {
  const [step, setStep] = useState<"email" | "idea" | "done">("email");
  const [email, setEmail] = useState("");
  const [idea, setIdea] = useState("");
  const [elapsed, setElapsed] = useState(0);
  const [fading, setFading] = useState(false);
  const [smileyPulse, setSmileyPulse] = useState(0);

  const duration = 45_000; // 45s
  const startRef = useRef<number | null>(null);

  const flashSmiley = useCallback(() => {
    setSmileyPulse((n) => n + 1);
  }, []);

  /* ------------------------------------------------------------
     Backspace disabled in idea mode
  ------------------------------------------------------------ */
  useEffect(() => {
    if (step !== "idea") return;

    const handler = (e: KeyboardEvent) => {
      if (e.key === "Backspace") {
        e.preventDefault();
        flashSmiley();
      }
    };

    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [step, flashSmiley]);

  /* ------------------------------------------------------------
     Timer
  ------------------------------------------------------------ */
  useEffect(() => {
    if (step !== "idea") return;

    startRef.current = Date.now();

    const tick = setInterval(() => {
      setElapsed(Date.now() - (startRef.current || 0));
    }, 100);

    const end = setTimeout(() => {
      submit();
    }, duration);

    return () => {
      clearInterval(tick);
      clearTimeout(end);
    };
  }, [step]);

  /* ------------------------------------------------------------
     Enter submits (Shift+Enter allowed)
  ------------------------------------------------------------ */
  useEffect(() => {
    if (step !== "idea") return;

    const handler = (e: KeyboardEvent) => {
      if (e.key === "Enter" && !e.shiftKey) {
        e.preventDefault();
        submit();
      }
    };

    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [step, email, idea]);

  /* ------------------------------------------------------------
     Submit → FormSubmit (client only)
  ------------------------------------------------------------ */
  const submit = async () => {
    if (fading || step !== "idea") return;
    setFading(true);

    const form = new FormData();
    form.append("email", email);
    form.append("idea", idea);
    form.append("_subject", `New idea from ${email}`);
    form.append("_template", "box");
    form.append("_captcha", "false");

    try {
      await fetch(`https://formsubmit.co/${INBOX}`, {
        method: "POST",
        body: form,
      });
    } catch {
      // ignore — experience continues regardless
    }

    setTimeout(() => setStep("done"), 2200);
  };

  /* ------------------------------------------------------------
     Shimmer highlighting
  ------------------------------------------------------------ */
  const shimmerHTML = () => {
    const highlight =
      /\b(build|make|create|design|invent|launch|ship|start|grow|change|break|learn|play|explore|future|world|tool|product|system|app|site|platform|ai|agent|community|marketplace|wallet|token|quest|local|beautiful|weird|simple|radical|alive)\b/gi;

    const escaped = idea
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");

    return escaped.replace(
      highlight,
      (m) => `<span class="${styles.shimmer}">${m}</span>`
    );
  };

  /* ------------------------------------------------------------
     Renders
  ------------------------------------------------------------ */
  if (step === "done") {
    return (
      <main className={styles.center}>
        <p className={styles.fadeText}>Well done. I’ll be in touch.</p>
      </main>
    );
  }

  if (step === "email") {
    return (
      <main className={styles.center}>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (/\S+@\S+\.\S+/.test(email)) setStep("idea");
          }}
        >
          <input
            autoFocus
            required
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="where should i reply ?"
            className={styles.emailInput}
          />
        </form>
      </main>
    );
  }

  const progress = Math.min(elapsed / duration, 1);

  return (
    <main className={`${styles.surface} ${fading ? styles.fadeOut : ""}`}>
      {/* smiley */}
      <div key={smileyPulse} className={`${styles.smiley} ${styles.smileyOn}`}>
        :)
      </div>

      {/* progress */}
      <div
        className={styles.progress}
        style={{ transform: `scaleX(${progress})` }}
      />

      {/* prompt above caret */}
      {idea.length === 0 && !fading && (
        <div className={styles.centerPrompt}>what are you trying to build</div>
      )}

      {/* rendered text */}
      <div
        className={styles.textArea}
        dangerouslySetInnerHTML={{ __html: shimmerHTML() }}
      />

      {/* input owner */}
      <textarea
        autoFocus
        className={styles.hiddenInput}
        value={idea}
        onChange={(e) => setIdea(e.target.value)}
        aria-label="What are you trying to build?"
      />

      {/* optional explicit submit */}
      <button className={styles.submitButton} onClick={submit}>
        Done →
      </button>
    </main>
  );
}
