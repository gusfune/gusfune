import { MetadataRoute } from "next"
import { getBlogPosts } from "./journal/utils"

export const baseUrl = "https://gusfune.com"

export default function sitemap(): MetadataRoute.Sitemap {
  const blogs = getBlogPosts().map((post) => ({
    url: `${baseUrl}/journal/${post.slug}`,
    lastModified: post.metadata.publishedAt,
  }))

  // Define your routes here
  const routes = ["", "/about", "/journal", "/speaking", "/contact"]

  const sitemap: MetadataRoute.Sitemap = routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(2025, 0, 2),
    changeFrequency: "weekly",
  }))

  return [...sitemap, ...blogs]
}
