// src/friends/page.tsx

export const revalidate = 0;

import type { Metadata } from "next";
import ClientPage from "./ClientPage";

export const metadata: Metadata = {
  title: "Friends · Ecodia",
  description:
    "Connect with friends on Ecodia, compare ECO progress, and share eco-action sidequests.",
  alternates: {
    canonical: "/friends",
  },
  openGraph: {
    title: "Friends · Ecodia",
    description:
      "See your friends’ ECO progress and eco-action on Ecodia.",
    url: "/friends",
    siteName: "Ecodia",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Friends · Ecodia",
    description:
      "Connect and share eco-action with friends on Ecodia.",
  },
};

export default function Page() {
  return <ClientPage />;
}
