import type { MetadataRoute } from "next";
import { galleryFolderRoutes, sitemapRoutes, siteUrl } from "@/data/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const routes = [...sitemapRoutes, ...galleryFolderRoutes];

  return routes.map((route) => ({
    url: new URL(route.path, siteUrl).toString(),
    lastModified,
    changeFrequency: route.path === "/" ? "weekly" : "monthly",
    priority: route.path === "/" ? 1 : route.path.startsWith("/galeria") ? 0.6 : 0.8,
  }));
}
