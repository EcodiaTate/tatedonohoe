"use client";
import React from "react";
import { openSpecCard } from "@/components/spec/SpecCardPortal";

export function DemoScrollingCards() {
  return (
    <section className="mx-auto max-w-5xl px-6">
      <h2 className="text-xl font-medium mb-4">ScrollingCards</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {Array.from({ length: 9 }).map((_, i) => (
          <article
            key={i}
            onClick={(e) =>
              openSpecCard({
                featureKey: "scrolling-cards",
                title: "ScrollingCards",
                codeUrl: "https://github.com/your/repo/path/ScrollingCards.tsx",
                tags: ["layout", "scroll", "parallax-lite"],
                anchor: { x: e.clientX, y: e.clientY },
              })
            }
            className="aspect-[4/3] rounded-xl border bg-white/70 backdrop-blur p-4 cursor-pointer hover:shadow-md transition"
          >
            <div className="text-sm text-black/70">Card #{i + 1}</div>
          </article>
        ))}
      </div>
    </section>
  );
}
