"use client";
import React, { useMemo, useState } from "react";
import { useLikes } from "./LikesContext";

const EMAIL = "work@tatedonohoe.au";

export function SummaryForm() {
  const { items, clear } = useLikes();
  const [msg, setMsg] = useState("");

  const likedList = useMemo(
    () => Object.values(items).filter(r => r.variants.size > 0).sort((a,b)=>a.title.localeCompare(b.title)),
    [items]
  );

  const subject = encodeURIComponent(`Interface selection (${likedList.length} picks)`);

  const body = useMemo(() => {
    const parts: string[] = [];
    parts.push("Hi Tate,","");
    parts.push("Here are the components I liked:","");
    likedList.forEach(r => {
      const vs = Array.from(r.variants).join(", ");
      parts.push(`• ${r.title}  [${vs}]`);
      if (r.codeUrl) parts.push(`  code: ${r.codeUrl}`);
      if (r.tags?.length) parts.push(`  tags: ${r.tags.join(", ")}`);
    });
    parts.push("");
    if (msg.trim()) { parts.push("Notes:", msg.trim(), ""); }
    parts.push("--","Sent from tatedonohoe.au / The Interface Collection");
    return encodeURIComponent(parts.join("\n"));
  }, [likedList, msg]);

  const mailto = `mailto:${EMAIL}?subject=${subject}&body=${body}`;

  if (likedList.length === 0) {
    return (
      <div className="fixed bottom-0 left-0 right-0 border-t bg-white/80 backdrop-blur-md">
        <div className="max-w-5xl mx-auto px-6 py-3 text-sm text-black/60">
          Click any demo to open its spec card and tick what you like — your picks will appear here.
        </div>
      </div>
    );
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 border-t bg-white/90 backdrop-blur-md">
      <div className="max-w-5xl mx-auto px-6 py-4 flex flex-col md:flex-row md:items-center gap-3">
        <div className="text-sm">
          <strong>{likedList.length}</strong> selected · {likedList.map(r => r.title).join(", ")}
        </div>
        <textarea
          className="flex-1 min-h-[44px] max-h-32 p-2 text-sm rounded-md border bg-white"
          placeholder="Add a note (goals, vibe, budget, timeline)…"
          value={msg}
          onChange={(e) => setMsg(e.target.value)}
        />
        <div className="flex items-center gap-2">
          <a href={mailto} className="inline-flex items-center rounded-md border px-3 py-2 text-sm bg-black text-white">
            Send Email
          </a>
          <button onClick={clear} className="inline-flex items-center rounded-md border px-3 py-2 text-sm" title="Clear all selections">
            Clear
          </button>
        </div>
      </div>
    </div>
  );
}
