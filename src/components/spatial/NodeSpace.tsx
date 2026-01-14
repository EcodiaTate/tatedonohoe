"use client";
import { motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

export function NodeSpace({
  onIntentChange,
  isLocked,
}: {
  onIntentChange: (val: number) => void;
  isLocked: boolean;
}) {
  const [charge, setCharge] = useState(0);
  const isHovering = useRef(false);

  // ✅ interval ONLY updates local state
  useEffect(() => {
    if (isLocked) return;

    const timer = setInterval(() => {
      setCharge((prev) => {
        let next = isHovering.current ? prev + 1.5 : prev - 0.5;
        next = Math.max(0, Math.min(100, next));
        return next;
      });
    }, 30);

    return () => clearInterval(timer);
  }, [isLocked]);

  // ✅ notify parent AFTER render commit (safe)
  useEffect(() => {
    if (isLocked) return;
    onIntentChange(charge);
  }, [charge, isLocked, onIntentChange]);

  return (
    <div className="relative h-full w-full cursor-crosshair">
      <ArtifactNode
        x="20%"
        y="30%"
        label="System_Core"
        content="Standard UI is a crutch. We build for instinct."
      />
      <ArtifactNode
        x="70%"
        y="40%"
        label="Friction_Logic"
        content="If it's too easy to use, it's easy to forget."
      />

      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center"
        onMouseEnter={() => {
          isHovering.current = true;
        }}
        onMouseLeave={() => {
          isHovering.current = false;
        }}
      >
        <div
          className={`
            relative h-32 w-32 rounded-full border transition-all duration-700 flex items-center justify-center
            ${isHovering.current ? "border-orange-500 shadow-[0_0_30px_rgba(249,115,22,0.2)]" : "border-white/10"}
          `}
        >
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ repeat: Infinity, duration: 4 }}
            className="h-2 w-2 bg-orange-500 rounded-full"
          />

          <svg className="absolute inset-0 h-full w-full -rotate-90">
            <circle
              cx="64"
              cy="64"
              r="60"
              stroke="currentColor"
              strokeWidth="1"
              fill="transparent"
              className="text-orange-500 opacity-20"
              strokeDasharray="377"
              strokeDashoffset={377 - (377 * charge) / 100}
              style={{ transition: "stroke-dashoffset 0.1s linear" }}
            />
          </svg>
        </div>

        <div className="mt-6 text-[10px] font-mono tracking-[0.3em] uppercase text-zinc-500">
          {charge > 0
            ? charge < 100
              ? "Analyzing_Intent..."
              : "Access_Granted"
            : "Stabilize_Focus_Here"}
        </div>
      </div>
    </div>
  );
}

function ArtifactNode({ x, y, label, content }: any) {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      style={{ left: x, top: y }}
      className="absolute group z-10"
      whileHover={{ scale: 1.05 }}
      onClick={() => setOpen(!open)}
    >
      <div className="h-3 w-3 border border-white/30 group-hover:border-[var(--grav-accent)] transition-colors cursor-pointer rotate-45" />
      <div className="mt-4 font-mono text-[8px] uppercase tracking-widest opacity-30 group-hover:opacity-100 transition-opacity">
        {label}
      </div>
      {open && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="absolute top-8 left-0 w-64 text-[11px] leading-relaxed text-zinc-400 bg-zinc-950/90 p-4 border border-white/10 backdrop-blur-md z-50 shadow-2xl font-mono"
        >
          <div className="text-[var(--grav-accent)] mb-2 tracking-widest">
            [ARTIFACT_DATA]
          </div>
          {content}
        </motion.div>
      )}
    </motion.div>
  );
}
