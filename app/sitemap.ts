import type { MetadataRoute } from "next";
import { siteInfo } from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteInfo.url,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
