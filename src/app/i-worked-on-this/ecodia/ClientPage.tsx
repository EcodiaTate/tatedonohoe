"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Shield, Zap, Globe, Coins } from "lucide-react";

/* ─────────────────────────────────────────────────────────
   BRUTAL STYLES
   ───────────────────────────────────────────────────────── */
const BRUTAL_BORDER = "border-[3px] border-[#2d2b28]";
const BRUTAL_SHADOW_MD = "shadow-[8px_8px_0px_0px_#2d2b28]";
const BRUTAL_SHADOW_SM = "shadow-[4px_4px_0px_0px_#2d2b28]";
const BRUTAL_PRESS = "active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all";

export default function EcodiaCaseStudy() {
  return (
    <main className="min-h-screen bg-[#f8f9f5] text-[#2d2b28] p-4 md:p-12 font-sans selection:bg-[#7fd069] selection:text-white">
      
      {/* Back Navigation */}
      <Link href="/" className={cn("inline-flex items-center gap-2 px-4 py-2 bg-white mb-12 font-black uppercase text-xs tracking-widest", BRUTAL_BORDER, BRUTAL_SHADOW_SM, BRUTAL_PRESS)}>
        <ArrowLeft className="h-4 w-4" /> Back to Specs
      </Link>

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* LEFT COL: NARRATIVE & SPECS */}
        <section className="lg:col-span-7 space-y-12">
          <div>
            <span className="bg-[#f4d35e] px-2 py-1 font-black uppercase text-sm border-2 border-[#2d2b28] inline-block mb-4">
              Project 01 // Ecosystem
            </span>
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter uppercase leading-[0.85] mb-6 text-black">
              ECODIA
            </h1>
            <p className="text-xl md:text-2xl font-bold leading-tight text-[#2d2b28]/80 max-w-2xl italic">
              A circular economy platform where environmental action becomes a liquid currency. I engineered the full-stack architecture to turn "sidequests" into tangible community rewards.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { label: "Frontend", val: "React Native & Typescript" },
              { label: "Backend", val: "FastAPI, Google Cloud" },
              { label: "Database", val: "Neo4j / Postgres" },
              { label: "Real-time", val: "WebSockets + Push notifs" },
            ].map((s) => (
              <div key={s.label} className={cn("p-4 bg-white", BRUTAL_BORDER)}>
                <p className="text-[10px] font-black uppercase opacity-40 mb-1 tracking-widest">{s.label}</p>
                <p className="text-sm font-black uppercase tracking-tight">{s.val}</p>
              </div>
            ))}
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-black uppercase italic">The Problem</h3>
            <p className="text-lg leading-relaxed font-medium">
              Good actions for the planet are often invisible and unrewarded. Ecodia solves this by tokenizing "Sidequests" - verifiable impact tasks - that users complete to earn <strong className="bg-[#7fd069]/20 px-1">ECO</strong>. These tokens are then redeemable at partner businesses, creating a closed-loop economy that benefits the planet, the people, and local commerce.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FeatureCard 
              icon={<Zap className="h-6 w-6" />}
              title="Sidequests"
              desc="Custom logic for verifiable task completion and impact attribution."
              color="bg-[#f4d35e]"
            />
            <FeatureCard 
              icon={<Coins className="h-6 w-6" />}
              title="Tokenomics"
              desc="A dual-token system ensuring stable value for partners and rewards for users."
              color="bg-[#7fd069]"
            />
          </div>
        </section>

        {/* RIGHT COL: THE "LIVE" CARD PREVIEW */}
        <section className="lg:col-span-5 lg:sticky lg:top-12">
          <div className="space-y-6">
            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-center opacity-40">
              Interface Preview / Mobile View
            </p>
            
            {/* The Ecodia Card - Adjusted to 9:16 aspect ratio */}
            <motion.div 
              initial={{ rotate: 1, y: 20 }}
              animate={{ rotate: 0, y: 0 }}
              className={cn("overflow-hidden bg-[#f8f9f5] w-full max-w-[340px] mx-auto", BRUTAL_BORDER, BRUTAL_SHADOW_MD)}
            >
              <div className="flex items-center justify-between border-b-[3px] border-[#2d2b28] bg-white p-4">
                <div className="flex items-center gap-3">
                  <div className={cn("relative h-10 w-10 overflow-hidden bg-[#f4d35e]", BRUTAL_BORDER)}>
                   
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[12px] font-black uppercase tracking-tight text-[#2d2b28]">Helen</span>
                    <span className="text-[9px] font-bold uppercase text-[#396041]/70 tracking-tighter">My mum!</span>
                  </div>
                </div>
                <div className={cn("px-2 py-1 bg-[#7fd069] text-[10px] font-black uppercase text-white tracking-widest", BRUTAL_BORDER)}>
                  SIDEQUEST
                </div>
              </div>

              {/* IMAGE PANE: 9:16 ASPECT RATIO */}
              <div className="aspect-[9/16] relative bg-[#2d2b28]">
                <Image
                  src="/img/mum.jpg"
                  alt="Sidequest Impact"
                  fill
                  className="object-cover opacity-90"
                  priority
                />
                
                {/* Reward Badge Overlay */}
                <div className={cn("absolute bottom-6 left-4 bg-[#f4d35e] p-3 flex items-center gap-2", BRUTAL_BORDER, BRUTAL_SHADOW_SM)}>
                   <span className="text-xl">🌿</span>
                   <span className="font-black text-xs">150 ECO</span>
                </div>
              </div>

              <div className="p-5 space-y-4 bg-white border-t-[3px] border-[#2d2b28]">
                <p className="text-[13px] font-bold leading-tight text-[#2d2b28]">
                  <span className="mr-2 inline-block bg-[#7fd069] px-1 font-black uppercase text-[11px] border border-[#2d2b28] text-white tracking-tighter">
                    HELEN
                  </span>
                  Completed: 10-Piece Trash Pickup. 
                </p>
                <button className={cn("w-full py-4 bg-[#f4d35e] font-black uppercase text-[11px] tracking-[0.15em] text-[#2d2b28]", BRUTAL_BORDER, BRUTAL_SHADOW_SM, BRUTAL_PRESS)}>
                  Start Sidequest →
                </button>
              </div>
            </motion.div>

            <div className="flex flex-col gap-3 max-w-[340px] mx-auto">
              <a href="https://ecodia.au" target="_blank" className={cn("flex items-center justify-center gap-2 py-4 bg-white font-black uppercase text-sm", BRUTAL_BORDER, BRUTAL_SHADOW_SM, BRUTAL_PRESS)}>
                <Globe className="h-4 w-4" /> Visit Ecodia.au
              </a>
              <a href="https://ecodia.earth" target="_blank" className={cn("flex items-center justify-center gap-2 py-4 bg-[#2d2b28] !text-white font-black uppercase text-sm", BRUTAL_BORDER, BRUTAL_SHADOW_SM, BRUTAL_PRESS)}>
                <Shield className="h-4 w-4 text-white"/> Ecodia (.earth)
              </a>
            </div>
          </div>
        </section>

      </div>
    </main>
  );
}

function FeatureCard({ icon, title, desc, color }: { icon: any, title: string, desc: string, color: string }) {
  return (
    <div className={cn("p-6 bg-white", BRUTAL_BORDER, BRUTAL_SHADOW_SM)}>
      <div className={cn("h-12 w-12 flex items-center justify-center mb-6", color, BRUTAL_BORDER)}>
        {icon}
      </div>
      <h4 className="text-xl font-black uppercase mb-2 tracking-tighter">{title}</h4>
      <p className="text-sm font-medium text-zinc-500 leading-snug">{desc}</p>
    </div>
  );
}

function cn(...inputs: any[]) {
  return inputs.filter(Boolean).join(" ");
}