"use client";
import React from "react";
import { openSpecCard } from "@/components/spec/SpecCardPortal";

export function DemoHoverTopBar() {
  return (
    <section className="mx-auto max-w-5xl px-6">
      <div
        onMouseEnter={(e) =>
          openSpecCard({
            featureKey: "hover-top-bar",
            title: "HoverTopBar",
            codeUrl: "https://github.com/your/repo/path/HoverTopBar.tsx",
            tags: ["interaction", "layout", "hover-reveal"],
            anchor: { x: e.clientX, y: e.clientY },
          })
        }
        className="sticky top-0 z-10 border rounded-xl bg-white/70 backdrop-blur p-4 flex items-center justify-between"
      >
        <span className="font-medium">HoverTopBar</span>
        <nav className="flex gap-4 text-sm">
          <a href="#" className="hover:underline">Home</a>
          <a href="#" className="hover:underline">Work</a>
          <a href="#" className="hover:underline">Contact</a>
        </nav>
      </div>
      <p className="mt-4 text-black/70">
        Move your cursor over the bar to summon the Spec Card. This shows how the interaction is documented.
      </p>
      <div className="h-[60vh]" />
    </section>
  );
}
