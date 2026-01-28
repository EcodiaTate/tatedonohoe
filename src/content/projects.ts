// src/content/projects.ts
export interface ProjectData {
  /** Stable id for UI state (doesn't have to match slug) */
  id: string;
  /** Big display name shown in the list */
  title: string;
  /** Used to build the case-study route: /i-worked-on-this/[slug] */
  slug: string;

  tag: string;
  description: string;
  metrics: readonly string[];
  tech: readonly string[];
  status: string;
}

export const PROJECTS: readonly ProjectData[] = [
  {
    id: "ecodia",
    title: "ECODIA",
    slug: "ecodia",
    tag: "Founder / Engineer",
    description:
      "A reward ecosystem that makes real-world action measurable, tradable, and worth doing.",
    metrics: ["Token & voucher ledger", "Impact attribution", "Real-time reward logic"],
    tech: ["React Native", "FastAPI", "Neo4j", "Postgres"],
    status: "Active",
  },
  {
    id: "ai-business-outreach",
    title: "AI Business Outreach",
    slug: "ai-business-outreach",
    tag: "AI Automation / Full-Stack",
    description:
      "AI outbound outreach + follow-ups with a graph CRM that tracks every thread, reply, and outcome.",
    metrics: [
      "AI-qualified pipeline with live status",
      "Unified email timelines (inbound + automated replies)",
      "Outreach runs with draft + send control",
      "Smart follow-ups and nudges",
      "Analytics: attempts, win rate, conversions",
    ],
    tech: ["FastAPI", "Neo4j", "Pydantic", "AI workflows", "Email automation", "Admin dashboard"],
    status: "Live",
  }
  
  
  // Add more projects here anytime:
  // {
  //   id: "endless-summer",
  //   title: "ENDLESS SUMMER",
  //   slug: "endless-summer",
  //   tag: "...",
  //   description: "...",
  //   metrics: [...],
  //   tech: [...],
  //   status: "...",
  // },
] as const;
