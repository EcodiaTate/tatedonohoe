import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://tatedonohoe.au"; // change if domain differs
  const now = new Date();

  return [
    // Home
    {
      url: `${base}/`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },

    // Start page
    {
      url: `${base}/start`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },

    // Work index section
    {
      url: `${base}/i-worked-on-this/ecodia`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },

    {
      url: `${base}/i-worked-on-this/endless_summer`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];
}
