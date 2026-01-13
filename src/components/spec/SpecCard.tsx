"use client";
import React from "react";
import type { LikeVariant } from "../likes/LikesContext";
import { useLikes } from "../likes/LikesContext";

type Props = {
  open: boolean;
  onClose: () => void;
  anchor?: { x: number; y: number };
  featureKey: string;
  title: string;
  codeUrl?: string;
  tags?: string[];
};

const VARIANTS: { key: LikeVariant; label: string }[] = [
  { key: "like", label: "I like it" },
  { key: "love", label: "Love this" },
  { key: "use_it", label: "Put this in my build" },
  { key: "almost", label: "Almost (needs tweak)" },
  { key: "not_for_me", label: "Not for me" },
];

export function SpecCard({ open, onClose, anchor, featureKey, title, codeUrl, tags }: Props) {
  const { items, setVariant } = useLikes();
  const rec = items[featureKey];
  const checked = (k: LikeVariant) => rec?.variants.has(k) ?? false;

  if (!open) return null;

  const ax = anchor?.x ?? 100;
  const ay = anchor?.y ?? 100;
  const w = typeof window !== "undefined" ? window.innerWidth : 1200;
  const h = typeof window !== "undefined" ? window.innerHeight : 800;

  return (
    <div
      className="fixed z-50 w-[320px] rounded-xl border bg-white/80 backdrop-blur-md shadow-xl"
      style={{ top: Math.min(ay + 12, h - 360), left: Math.min(ax - 160, w - 340) }}
      role="dialog"
      aria-label={`${title} spec card`}
    >
      <div className="p-4">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-base font-medium">{title}</h3>
            {tags?.length ? (
              <div className="mt-1 flex flex-wrap gap-1">
                {tags.map((t) => (
                  <span key={t} className="text-[11px] px-2 py-0.5 rounded-full bg-black/5">{t}</span>
                ))}
              </div>
            ) : null}
          </div>
          <button onClick={onClose} className="shrink-0 rounded-md px-2 py-1 text-sm hover:bg-black/5">✕</button>
        </div>

        {codeUrl && (
          <a href={codeUrl} target="_blank" rel="noreferrer" className="mt-3 inline-block text-sm underline">
            View code
          </a>
        )}

        <div className="mt-3 space-y-2">
          {VARIANTS.map((v) => (
            <label key={v.key} className="flex items-center gap-2 text-sm">
              <input
                type="checkbox"
                checked={checked(v.key)}
                onChange={(e) => {
                  const meta: { codeUrl?: string; tags?: string[] } = {};
                  if (codeUrl) meta.codeUrl = codeUrl;
                  if (tags) meta.tags = tags;
                  setVariant(featureKey, title, v.key, e.target.checked, meta);
                }}
              />
              <span>{v.label}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
}
