"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import styles from "./vanishing.module.css";

const INBOX = "3aeccaf7a7e1469935deff3ec48f2743";

type Step = "splash" | "idea" | "email" | "done";

export default function Page() {
  const [step, setStep] = useState<Step>("splash");

  const [email, setEmail] = useState("");
  const [idea, setIdea] = useState("");

  const [elapsed, setElapsed] = useState(0);
  const [hasStartedTyping, setHasStartedTyping] = useState(false);
  const [splashPhase, setSplashPhase] = useState<"in" | "hold" | "out">("in");

  const [fading, setFading] = useState(false);
  const [smileyPulse, setSmileyPulse] = useState(0);

  const duration = 45_000;

  const startRef = useRef<number | null>(null);
  const tickRef = useRef<number | null>(null);
  const endRef = useRef<number | null>(null);

  const ideaScrollRef = useRef<HTMLDivElement | null>(null);

  const flashSmiley = useCallback(() => {
    setSmileyPulse((n) => n + 1);
  }, []);

  const clearTimer = useCallback(() => {
    if (tickRef.current) window.clearInterval(tickRef.current);
    if (endRef.current) window.clearTimeout(endRef.current);
    tickRef.current = null;
    endRef.current = null;
    startRef.current = null;
  }, []);

  const shimmerHTML = () => {
    const highlight =
      /\b(build|make|create|design|invent|launch|ship|start|grow|change|break|learn|play|explore|future|world|tool|product|system|app|site|platform|ai|agent|community|marketplace|wallet|token|quest|local|beautiful|weird|simple|radical|alive)\b/gi;

    const escaped = idea
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      // preserve newlines in HTML
      .replace(/\n/g, "<br />");

    return escaped.replace(
      highlight,
      (m) => `<span class="${styles.shimmer}">${m}</span>`
    );
  };

  // ─────────────────────────────────────────────────────────────
  // SPLASH: stays until any input (key, click, pointer, scroll).
  // ─────────────────────────────────────────────────────────────
  useEffect(() => {
    if (step !== "splash") return;

    setSplashPhase("in");
    const t = window.setTimeout(() => setSplashPhase("hold"), 900);

    const dismiss = () => {
      setSplashPhase((prev) => (prev === "out" ? prev : "out"));
      window.setTimeout(() => {
        setSplashPhase("in");
        setStep("idea");
      }, 1800);
    };

    const onKey = () => dismiss();
    const onWheel = () => dismiss();
    const onTouchMove = () => dismiss();
    const onPointerDown = () => dismiss();

    window.addEventListener("keydown", onKey, { passive: true });
    window.addEventListener("wheel", onWheel, { passive: true });
    window.addEventListener("touchmove", onTouchMove, { passive: true });
    window.addEventListener("pointerdown", onPointerDown, { passive: true });

    return () => {
      window.clearTimeout(t);
      window.removeEventListener("keydown", onKey as any);
      window.removeEventListener("wheel", onWheel as any);
      window.removeEventListener("touchmove", onTouchMove as any);
      window.removeEventListener("pointerdown", onPointerDown as any);
    };
  }, [step]);

  // ─────────────────────────────────────────────────────────────
  // Backspace disabled in idea mode (shows :))
  // ─────────────────────────────────────────────────────────────
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

  // ─────────────────────────────────────────────────────────────
  // Timer: starts only after first typing
  // ─────────────────────────────────────────────────────────────
  useEffect(() => {
    if (step !== "idea") {
      clearTimer();
      setElapsed(0);
      setHasStartedTyping(false);
      return;
    }

    if (!hasStartedTyping) return;

    startRef.current = Date.now();

    tickRef.current = window.setInterval(() => {
      setElapsed(Date.now() - (startRef.current || 0));
    }, 100);

    endRef.current = window.setTimeout(() => {
      setStep("email");
    }, duration);

    return () => clearTimer();
  }, [step, hasStartedTyping, clearTimer]);

  // ─────────────────────────────────────────────────────────────
  // Enter behavior
  // - In idea: Enter inserts newline (textarea) - BUT Cmd/Ctrl+Enter advances
  // - In email: Enter submits
  // ─────────────────────────────────────────────────────────────
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (step === "idea") {
        // let Enter create newlines; only advance on Cmd/Ctrl+Enter
        if (e.key === "Enter" && (e.metaKey || e.ctrlKey)) {
          e.preventDefault();
          setStep("email");
        }
        return;
      }

      if (step === "email") {
        if (e.key === "Enter" && !e.shiftKey) {
          e.preventDefault();
          void submitFinal();
        }
      }
    };

    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [step, email, idea]);

  // keep the “viewport” pinned to the bottom as you type
  useEffect(() => {
    if (step !== "idea") return;
    const el = ideaScrollRef.current;
    if (!el) return;
    el.scrollTop = el.scrollHeight;
  }, [idea, step]);

  const submitFinal = async () => {
    if (fading || step !== "email") return;

    const ideaTrim = idea.trim();
    const emailTrim = email.trim();

    if (!ideaTrim) {
      setStep("idea");
      return;
    }
    if (!/\S+@\S+\.\S+/.test(emailTrim)) return;

    setFading(true);

    const form = new FormData();
    form.append("email", emailTrim);
    form.append("idea", ideaTrim);
    form.append("_subject", `New idea from ${emailTrim} (tatedonohoe.au)`);
    form.append("_template", "box");
    form.append("_captcha", "false");

    try {
      await fetch(`https://formsubmit.co/${INBOX}`, {
        method: "POST",
        body: form,
      });
    } catch {
      // ignore
    }

    window.setTimeout(() => setStep("done"), 2200);
  };

  // DONE
  if (step === "done") {
    return (
      <main className={styles.center}>
        <p className={styles.fadeText}>Amazing</p>
      </main>
    );
  }

  // SPLASH
  if (step === "splash") {
    return (
      <main
        className={[
          styles.center,
          splashPhase === "in" ? styles.splashIn : "",
          splashPhase === "out" ? styles.splashOut : "",
        ].join(" ")}
        style={{ background: "#f8f9f5", color: "#0a0a0a" }}
      >
        <div style={{ textAlign: "center", padding: "0 20px" }}>
          <div
            style={{
              fontSize: 12,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              opacity: 0.65,
            }}
          >
            tatedonohoe.au
          </div>

          <div
            style={{
              marginTop: 14,
              fontSize: 34,
              lineHeight: 1.05,
              fontWeight: 600,
              letterSpacing: "-0.03em",
            }}
          >
            Bring the thing into existence.
          </div>

          <div
            style={{
              marginTop: 10,
              fontSize: 14,
              lineHeight: 1.5,
              opacity: 0.7,
              maxWidth: 640,
              marginLeft: "auto",
              marginRight: "auto",
            }}
            >
            A website. An app. A tool. A disruption.
            <br />
            It's yours, lets make it. 
          </div>

          <div
            style={{
              marginTop: 18,
              fontSize: 12,
              opacity: 0.55,
              letterSpacing: "0.08em",
            }}
          >
            tap // click // scroll
          </div>
        </div>
      </main>
    );
  }

  // EMAIL (AFTER idea)
  if (step === "email") {
    return (
      <main className={`${styles.center} ${fading ? styles.fadeOut : ""}`}>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            void submitFinal();
          }}
        >
          <div style={{ textAlign: "center", marginBottom: 14, opacity: 0.7 }}>
          
          </div>

          <input
            autoFocus
            required
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your email"
            className={styles.emailInput}
          />

          <div
            style={{
              marginTop: 14,
              display: "flex",
              gap: 10,
              justifyContent: "center",
            }}
          >
            <button
              type="button"
              className={styles.submitButtonInline}
              onClick={() => setStep("idea")}
              style={{ opacity: 0.85 }}
            >
              Back
            </button>

            <button
              type="submit"
              className={styles.submitButtonInline}
              disabled={!/\S+@\S+\.\S+/.test(email)}
            >
              Send →
            </button>
          </div>
        </form>
      </main>
    );
  }

  // IDEA (multiline that scrolls upward)
  const progress = hasStartedTyping ? Math.min(elapsed / duration, 1) : 0;

  return (
    <main className={`${styles.surface} ${fading ? styles.fadeOut : ""}`}>
      {/* smiley */}
      <div key={smileyPulse} className={`${styles.smiley} ${styles.smileyOn}`}>
      Keep going
      </div>

      {/* progress (hidden until typing starts) */}
      <div
        className={styles.progress}
        style={{
          transform: `scaleX(${progress})`,
          opacity: hasStartedTyping ? 1 : 0,
        }}
      />

      {/* textarea viewport */}
      <div className={styles.ideaFrame} ref={ideaScrollRef}>
        <div className={styles.ideaStack}>
          {/* shimmer overlay */}
          <div
            className={styles.ideaRenderMulti}
            aria-hidden
            dangerouslySetInnerHTML={{
              __html: shimmerHTML() || '<span style="opacity:.35">what are we building?</span>',
            }}
          />

          {/* real textarea */}
          <textarea
            autoFocus
            className={styles.ideaTextarea}
            value={idea}
            onChange={(e) => {
              const next = e.target.value;

              if (!hasStartedTyping && next.trim().length > 0) {
                setHasStartedTyping(true);
              }

              setIdea(next);
            }}
            placeholder="what are we building?"
            aria-label="what are we building?"
            rows={1}
          />
        </div>
      </div>

      <button
        type="button"
        className={styles.submitButton}
        onClick={() => setStep("email")}
        disabled={!idea.trim()}
        title="Next"
      >
        Next →
      </button>
    </main>
  );
}
