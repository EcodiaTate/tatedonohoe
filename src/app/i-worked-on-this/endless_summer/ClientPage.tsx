"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, ShieldAlert, CheckCircle2, Zap, Smartphone } from "lucide-react";

export default function ESPCaseStudy() {
  return (
    <main className="min-h-screen bg-[#FDFCFB] text-[#1a1a1a] font-sans selection:bg-[#E5D5C5] overflow-x-hidden">
      {/* 1. STICKY NAV */}
      <nav className="fixed top-0 w-full z-50 bg-[#FDFCFB]/80 backdrop-blur-md border-b border-zinc-100 px-6 py-4 flex justify-between items-center">
        <Link
          href="/"
          className="group flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-black"
        >
          <ArrowLeft className="h-3 w-3 group-hover:-translate-x-1 transition-transform" />
          Back
        </Link>
        <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-[0.2em]">
          Case Study // Endless Summer Properties
        </span>
      </nav>

      {/* 2. HERO SECTION */}
      <section className="pt-32 md:pt-48 px-6 md:px-20 pb-20 max-w-7xl mx-auto">
        <span className="text-xs font-bold uppercase tracking-[0.3em] text-zinc-400 mb-6 block font-mono">
          Project 02 // Website Rebuild
        </span>

        <h1 className="text-6xl md:text-[8vw] font-serif leading-[0.9] tracking-tighter mb-10 text-black">
          A website <br />
          <span className="italic text-zinc-400">people can actually use.</span>
        </h1>

        <p className="text-xl md:text-3xl font-light leading-relaxed text-zinc-600 max-w-3xl">
          Endless Summer Properties had a site that worked for years - until it didn’t. The goal
          wasn’t to “modernise for modern’s sake”. It was to make the experience{" "}
          <span className="text-black font-medium underline decoration-zinc-300 underline-offset-8 font-serif italic">
            fast, clear, and trustworthy
          </span>{" "}
          for buyers browsing on phones, tablets, and laptops.
        </p>
      </section>

      {/* 3. THE "BEFORE" AUDIT */}
      <section className="bg-zinc-100 border-y border-zinc-200">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2">
          {/* Visual Evidence */}
          <div className="p-8 md:p-20 flex flex-col justify-center">
            <div className="flex items-center gap-3 mb-6 text-red-600">
              <ShieldAlert className="h-5 w-5" />
              <span className="text-xs font-bold uppercase tracking-widest font-mono">
                Site Review: Before
              </span>
            </div>

            <div className="relative group overflow-hidden border-4 border-white shadow-2xl">
              <Image
                src="/img/esp-legacy-ss.jpg"
                alt="Original ESP website (legacy)"
                width={800}
                height={600}
                className="grayscale group-hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-red-500/10 mix-blend-multiply" />
              <div className="absolute top-4 right-4 bg-red-600 text-white text-[10px] font-bold px-2 py-1 uppercase font-mono">
                Old Site
              </div>
            </div>
          </div>

          {/* Plain-English Problems */}
          <div className="p-8 md:p-20 bg-zinc-50 border-l border-zinc-200">
            <h3 className="text-sm font-bold uppercase tracking-widest mb-10 text-zinc-400">
              What wasn’t working
            </h3>
            <ul className="space-y-8">
              <li className="flex gap-4">
                <span className="text-red-500 font-mono font-bold">01</span>
                <p className="text-sm text-zinc-600 leading-relaxed">
                  <strong className="text-black block mb-1 uppercase tracking-tight">
                    Hard to navigate
                  </strong>
                  People couldn’t reliably find what they needed. Pages felt “lost”, links broke,
                  and the experience didn’t build confidence.
                </p>
              </li>
              <li className="flex gap-4">
                <span className="text-red-500 font-mono font-bold">02</span>
                <p className="text-sm text-zinc-600 leading-relaxed">
                  <strong className="text-black block mb-1 uppercase tracking-tight">
                    Not mobile-friendly
                  </strong>
                  Most serious buyers browse on their phone first. The old layout wasn’t made for
                  small screens, so it became frustrating fast.
                </p>
              </li>
              <li className="flex gap-4">
                <span className="text-red-500 font-mono font-bold">03</span>
                <p className="text-sm text-zinc-600 leading-relaxed">
                  <strong className="text-black block mb-1 uppercase tracking-tight">
                    Slow to search & update
                  </strong>
                  Listings were harder to manage behind the scenes, and search could lag - which
                  hurts enquiries when people are comparing options quickly.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 4. THE "AFTER" */}
      <section className="px-6 md:px-20 py-32 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="flex items-center gap-3 mb-6 text-emerald-600">
              <CheckCircle2 className="h-5 w-5" />
              <span className="text-xs font-bold uppercase tracking-widest font-mono">
                Rebuild: Delivered
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-serif mb-8 text-black uppercase tracking-tighter">
              Faster. Clearer.
              <br />
              Built for real buyers.
            </h2>

            <div className="space-y-6">
              <p className="text-zinc-600 leading-relaxed">
                The rebuild focused on what matters to customers: speed, clarity, and a feel that
                matches the quality of the listings. The new experience is simple to browse, easy
                to read, and designed to turn interest into enquiries.
              </p>

              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-zinc-50 border border-zinc-100">
                  <Zap className="h-4 w-4 mb-3 text-emerald-600" />
                  <span className="text-[10px] font-bold uppercase block mb-1">
                    Fast first impression
                  </span>
                  <p className="text-xs text-zinc-500 font-mono font-bold tracking-tighter">
                    Snappy load times
                  </p>
                </div>
                <div className="p-4 bg-zinc-50 border border-zinc-100">
                  <Smartphone className="h-4 w-4 mb-3 text-emerald-600" />
                  <span className="text-[10px] font-bold uppercase block mb-1">
                    Mobile-first
                  </span>
                  <p className="text-xs text-zinc-500 font-mono font-bold tracking-tighter">
                    Works on any screen
                  </p>
                </div>
              </div>

              <p className="text-xs text-zinc-500 leading-relaxed">
                Under the hood, it’s also easier to maintain - so updates and improvements don’t
                require “special rituals” or fear of breaking the whole site.
              </p>
            </div>
          </div>

          {/* Modern Preview */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px 0px -10% 0px" }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="relative aspect-[4/3] bg-zinc-100 shadow-2xl overflow-hidden group"
            >
              <Image
                src="https://images.unsplash.com/photo-1596306499317-8490232098fa?auto=format&fit=crop&w=1200"
                alt="Modern website preview"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500" />
              <div className="absolute bottom-10 left-10 text-white">
                <p className="text-[10px] font-bold uppercase tracking-widest mb-2 opacity-80">
                  New Interface Preview
                </p>
                <h4 className="text-2xl font-serif italic uppercase leading-tight">
                  Coastline Resorts
                </h4>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 5. CTA */}
      <footer className="bg-black text-white px-6 py-40 text-center">
        <div className="max-w-3xl mx-auto space-y-12">
          <h3 className="text-4xl md:text-7xl font-serif italic tracking-tighter leading-none">
            Make your website <br /> feel easy.
          </h3>
          <p className="text-sm md:text-base text-white/70 max-w-2xl mx-auto leading-relaxed">
            If your site is slow, confusing on mobile, or hard to update - you don’t need a flashy
            redesign. You need a rebuild that makes customers trust you and take action.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="https://espsales.com.au"
              target="_blank"
              rel="noreferrer"
              className="px-12 py-5 bg-white text-black! text-xs font-bold uppercase tracking-widest hover:bg-zinc-200 transition-all"
            >
              Visit Live Site
            </a>
            <Link
              href="mailto:tate@ecodia.au"
              className="px-12 py-5 border border-white/30 text-xs font-bold uppercase tracking-widest hover:bg-white/10 transition-all"
            >
              Discuss a Build
            </Link>
          </div>
        </div>

        <div className="mt-32 pt-10 border-t border-white/5 flex justify-between items-center text-[10px] font-mono text-zinc-500 uppercase tracking-widest">
          <span>Sunshine Coast, QLD</span>
          <span>©2026 Tate Donohoe</span>
        </div>
      </footer>
    </main>
  );
}
