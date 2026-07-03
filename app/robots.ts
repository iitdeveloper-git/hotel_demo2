import type { MetadataRoute } from "next";
import { hotel } from "@/lib/hotel-data";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/"
    },
    sitemap: `${hotel.baseUrl}/sitemap.xml`,
    host: hotel.baseUrl
  };
}
