import { baseUrl, siteDescription, siteName } from "@/lib/site"
import { getBlogPosts } from "../utils"

// Every post is known at build time, so the feed never needs a live render.
export const dynamic = "force-static"

/**
 * Escape text for inclusion in an XML text node.
 *
 * `&` must be replaced first, otherwise it re-escapes the ampersands that the
 * later replacements introduce. One unescaped `&` in a title invalidates the
 * whole document for a strict feed reader.
 */
const escapeXml = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;")

export const GET = () => {
  const posts = [...getBlogPosts()].sort(
    (a, b) =>
      new Date(b.metadata.publishedAt).getTime() -
      new Date(a.metadata.publishedAt).getTime()
  )

  const itemsXml = posts
    .map((post) => {
      const url = `${baseUrl}/journal/${post.slug}`
      return `    <item>
      <title>${escapeXml(post.metadata.title)}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <description>${escapeXml(post.metadata.summary || "")}</description>
      <pubDate>${new Date(post.metadata.publishedAt).toUTCString()}</pubDate>
    </item>`
    })
    .join("\n")

  const lastBuildDate = posts[0]
    ? new Date(posts[0].metadata.publishedAt).toUTCString()
    : new Date(0).toUTCString()

  const rssFeed = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escapeXml(siteName)}</title>
    <link>${baseUrl}</link>
    <description>${escapeXml(siteDescription)}</description>
    <language>en</language>
    <lastBuildDate>${lastBuildDate}</lastBuildDate>
    <atom:link href="${baseUrl}/journal/rss" rel="self" type="application/rss+xml" />
${itemsXml}
  </channel>
</rss>`

  return new Response(rssFeed, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
    },
  })
}
