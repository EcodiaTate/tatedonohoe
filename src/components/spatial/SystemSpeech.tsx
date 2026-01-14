// src/components/spatial/SystemSpeech.tsx
"use client";
import { motion } from "framer-motion";

const THOUGHTS = [
  "Why are you still looking?",
  "Does your idea actually have a soul?",
  "You're searching for something I haven't shown you yet.",
  "The UI is a lie. The intent is real."
];

export function SystemSpeech({ intent }: { intent: number }) {
  const index = Math.min(Math.floor(intent / 25), THOUGHTS.length - 1);
  
  if (intent < 20) return null;

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed bottom-[15%] left-1/2 -translate-x-1/2 pointer-events-none text-orange-500/50 font-serif italic text-2xl"
    >
      {THOUGHTS[index]}
    </motion.div>
  );
}