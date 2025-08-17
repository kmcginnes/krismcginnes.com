import type { MetadataRoute } from "next"
import { env } from "~/env"

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: env.SITE_URL ?? "http://localhost:3000",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ]
}
