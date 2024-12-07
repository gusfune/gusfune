import { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://gusfune.com"

  // Define your routes here
  const routes = ["", "/about", "/publications", "/speaking", "/contact"]

  const sitemap: MetadataRoute.Sitemap = routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(2024, 12, 7),
    changeFrequency: "weekly",
  }))

  return sitemap
}
