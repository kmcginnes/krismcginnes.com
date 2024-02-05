import { type MetadataRoute } from "next"
import { env } from "~/env"

export default function robots(): MetadataRoute.Robots {
  const baseUrl = env.SITE_URL ?? "http://localhost:3000"
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/private/",
    },
    sitemap: baseUrl + "/sitemap.xml",
  }
}
