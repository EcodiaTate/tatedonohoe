"use client";

import React from "react";
import { LikesProvider } from "@/components/likes/LikesContext";
import { SummaryForm } from "@/components/likes/SummaryForm";
import { DemoHoverTopBar } from "@/components/demos/DemoHoverTopBar";
import { DemoScrollingCards } from "@/components/demos/DemoScrollingCards";
import { DemoOverloadedEcomm } from "@/components/demos/DemoOverloadedEcomm";
import { SpecCardPortal } from "@/components/spec/SpecCardPortal";

export default function Page() {
  return (
    <LikesProvider>
      <main className="min-h-screen bg-[var(--page-bg,#f8f8f5)] text-[var(--ink,#0b0c0d)]">
        <section className="max-w-3xl mx-auto px-6 py-16">
          <h1 className="text-3xl md:text-5xl tracking-tight">The Interface Collection</h1>
          <p className="mt-4 text-base md:text-lg text-black/70">
            A living library of components. Click, hover, drag — a spec card will appear.
            Tick “I like it.” At the end, send me your selection as an email (no accounts, no backend).
          </p>
        </section>

        <section className="space-y-24 pb-48">
          <DemoHoverTopBar />
          <DemoScrollingCards />
          <DemoOverloadedEcomm />
        </section>

        <SpecCardPortal />
        <SummaryForm />
      </main>
    </LikesProvider>
  );
}
