"use client";
import React, { useCallback, useState } from "react";
import { SpecCard } from "./SpecCard";

type Payload = {
  featureKey: string;
  title: string;
  codeUrl?: string;
  tags?: string[];
  anchor?: { x: number; y: number };
};

let openSpecCardInternal: (p: Payload) => void = () => {};

export function openSpecCard(p: Payload) {
  openSpecCardInternal(p);
}

export function SpecCardPortal() {
  const [open, setOpen] = useState(false);
  const [payload, setPayload] = useState<Payload | null>(null);

  const handleOpen = useCallback((p: Payload) => {
    setPayload(p);
    setOpen(true);
  }, []);

  openSpecCardInternal = handleOpen;

  const specProps = {
    open,
    onClose: () => setOpen(false),
    featureKey: payload?.featureKey ?? "",
    title: payload?.title ?? "",
    ...(payload?.codeUrl ? { codeUrl: payload.codeUrl } : {}),
    ...(payload?.tags ? { tags: payload.tags } : {}),
    ...(payload?.anchor ? { anchor: payload.anchor } : {}),
  } as const;

  return <SpecCard {...specProps} />;
}
