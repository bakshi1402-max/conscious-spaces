import type { MetadataRoute } from "next";
import { projects } from "@/data/content";

const base = "https://consciousspaces.example.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/works", "/gallery", "/about", "/contact"].map(
    (route) => ({
      url: `${base}${route}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: route === "" ? 1 : 0.8,
    })
  );

  const projectRoutes = projects.map((p) => ({
    url: `${base}/works/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...projectRoutes];
}
