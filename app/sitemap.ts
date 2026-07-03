import type { MetadataRoute } from "next";
import { blogPosts, galleryCategories, hotel, pageContent, policyPages } from "@/lib/hotel-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const routes = [
    "",
    "gallery",
    "blog",
    ...Object.keys(pageContent),
    "privacy-policy",
    "terms",
    ...blogPosts.map((post) => `blog/${post.slug}`),
    ...galleryCategories.map((category) => `gallery/${category.slug}`)
  ];

  return routes.map((route) => ({
    url: `${hotel.baseUrl}/${route}`,
    lastModified: now,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route in policyPages ? 0.4 : 0.75
  }));
}
