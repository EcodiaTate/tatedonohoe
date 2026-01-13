"use client";
import React, { useEffect, useState } from "react";
import { openSpecCard } from "@/components/spec/SpecCardPortal";

export function DemoOverloadedEcomm() {
  const [pulse, setPulse] = useState(false);
  useEffect(() => {
    const id = setInterval(() => setPulse((p) => !p), 650);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="mx-auto max-w-5xl px-6">
      <div
        className="rounded-xl border p-4 bg-white/70 backdrop-blur cursor-pointer"
        onClick={(e) =>
          openSpecCard({
            featureKey: "overloaded-ecomm",
            title: "OverloadedEcomm (Ironic)",
            codeUrl: "https://github.com/your/repo/path/OverloadedEcomm.tsx",
            tags: ["satire", "commerce", "banner-storm"],
            anchor: { x: e.clientX, y: e.clientY },
          })
        }
      >
        <div className="text-center text-xs uppercase tracking-wide">
          {pulse ? "🔥  FINAL HOURS  🔥" : "💥  90% OFF EVERYTHING  💥"}
        </div>
        <div className="mt-3 grid grid-cols-2 md:grid-cols-4 gap-3">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className={`rounded-lg border p-3 ${pulse ? "bg-yellow-100" : "bg-pink-100"}`}>
              <div className="h-24 rounded-md bg-white/70 border" />
              <div className="mt-2 text-sm font-medium">Deal #{i + 1}</div>
              <div className="text-xs line-through opacity-60">$199</div>
              <div className="text-sm font-semibold">$9.99</div>
              <button className="mt-2 text-xs underline">Add to cart</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
