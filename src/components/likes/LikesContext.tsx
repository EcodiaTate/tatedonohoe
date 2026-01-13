"use client";
import React, { createContext, useContext, useMemo, useState } from "react";

export type LikeVariant = "like" | "love" | "use_it" | "almost" | "not_for_me";
export type ComponentKey = string;

export type LikeRecord = {
  key: ComponentKey;
  title: string;
  variants: Set<LikeVariant>;
  codeUrl?: string;
  tags?: string[];
};

type LikesState = {
  items: Record<ComponentKey, LikeRecord>;
  setVariant: (
    key: ComponentKey,
    title: string,
    variant: LikeVariant,
    on: boolean,
    meta?: { codeUrl?: string; tags?: string[] }
  ) => void;
  clear: () => void;
};

const Ctx = createContext<LikesState | null>(null);

export function LikesProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<Record<ComponentKey, LikeRecord>>({});

  const setVariant: LikesState["setVariant"] = (key, title, variant, on, meta) => {
    setItems((prev) => {
      // Construct LikeRecord explicitly to satisfy exactOptionalPropertyTypes
      let existing: LikeRecord;
      const maybe = prev[key];

      if (maybe) {
        existing = maybe;
      } else {
        existing = {
          key,
          title,
          variants: new Set<LikeVariant>(),
          tags: meta?.tags ?? [],
        };
        if (meta?.codeUrl !== undefined) existing.codeUrl = meta.codeUrl;
      }

      const nextVariants = new Set(existing.variants);
      if (on) nextVariants.add(variant);
      else nextVariants.delete(variant);

      const next: LikeRecord = { ...existing, variants: nextVariants };
      if (meta?.tags) next.tags = meta.tags;
      if (meta?.codeUrl !== undefined) next.codeUrl = meta.codeUrl;

      return { ...prev, [key]: next };
    });
  };

  const clear = () => setItems({});

  const value = useMemo(() => ({ items, setVariant, clear }), [items]);
  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function useLikes() {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useLikes must be used within LikesProvider");
  return ctx;
}
