"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function SystemHUD({ intent }: { intent: number }) {
  const [time, setTime] = useState("");
  const [latency, setLatency] = useState("12ms");

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      setTime(now.getHours() + ":" + now.getMinutes().toString().padStart(2, "0") + ":" + now.getSeconds().toString().padStart(2, "0"));
      setLatency(Math.floor(Math.random() * (24 - 11) + 11) + "ms");
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-50 p-6 font-mono text-[9px] uppercase tracking-[0.2em] text-zinc-500">
      {/* Top Left: System Status */}
      <div className="absolute left-8 top-8 flex flex-col gap-1">
        <div className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-orange-500" />
          <span className="text-zinc-200">System_Live</span>
        </div>
        <div>Local_Time: {time}</div>
        <div>Network_Latency: {latency}</div>
      </div>

      {/* Top Right: User Intent Telemetry */}
      <div className="absolute right-8 top-8 text-right">
        <div className="text-zinc-400">Behavior_Profile</div>
        <div className="mt-1 flex items-center justify-end gap-2">
          <div className="h-1 w-32 overflow-hidden bg-white/5">
            <motion.div 
              className="h-full bg-[var(--grav-accent)]" 
              initial={{ width: 0 }}
              animate={{ width: `${intent}%` }}
              transition={{ type: "spring", stiffness: 50 }}
            />
          </div>
          <span className="w-8 text-zinc-200">{intent}%</span>
        </div>
        <div className="mt-1 opacity-50">
          {intent > 70 ? "High_Intent_Detected" : "Scanning_Environment"}
        </div>
      </div>

      {/* Bottom Left: Static Specs (The "Proof") */}
      <div className="absolute bottom-8 left-8 flex flex-col gap-1">
        <div className="text-zinc-200 opacity-80">Capabilities_Map:</div>
        <div className="opacity-40">01 // Recursive_Logic</div>
        <div className="opacity-40">02 // Intent_Architectures</div>
        <div className="opacity-40">03 // Cognitive_Friction_Engines</div>
      </div>

      {/* Bottom Right: Version & Origin */}
      <div className="absolute bottom-8 right-8 text-right">
        <div className="text-zinc-200">T.Donohoe_Core_v.2.6</div>
        <div className="opacity-40">AU_LOCAL_SERVER_01</div>
      </div>

      {/* Corner Brackets (The 'Viewport' effect) */}
      <div className="absolute left-4 top-4 h-4 w-4 border-l border-t border-white/10" />
      <div className="absolute right-4 top-4 h-4 w-4 border-r border-t border-white/10" />
      <div className="absolute bottom-4 left-4 h-4 w-4 border-b border-l border-white/10" />
      <div className="absolute bottom-4 right-4 h-4 w-4 border-b border-r border-white/10" />
    </div>
  );
}