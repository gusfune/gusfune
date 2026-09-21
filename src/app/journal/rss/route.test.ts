import { describe, it, expect, vi } from "vitest"
import { GET } from "./route"

vi.mock("../utils", () => ({
  getBlogPosts: () => [
    {
      metadata: {
        title: "Older & Wiser",
        publishedAt: "2025-06-01",
        summary: "Contains <angle> brackets & an ampersand",
      },
      slug: "older-and-wiser",
      content: "body",
    },
    {
      metadata: {
        title: "Newest Post",
        publishedAt: "2025-07-15",
        summary: "Plain summary",
      },
      slug: "newest-post",
      content: "body",
    },
  ],
}))

const feed = async () => await GET().text()

describe("journal rss feed", () => {
  it("links posts to /journal, not the non-existent /blog", async () => {
    const xml = await feed()
    expect(xml).not.toContain("/blog/")
    expect(xml).toContain("https://gusfune.com/journal/newest-post")
  })

  it("escapes ampersands and angle brackets in titles and summaries", async () => {
    const xml = await feed()
    expect(xml).toContain("Older &amp; Wiser")
    expect(xml).toContain("&lt;angle&gt; brackets &amp; an ampersand")
  })

  it("serves the RSS content type", () => {
    expect(GET().headers.get("Content-Type")).toBe(
      "application/rss+xml; charset=utf-8"
    )
  })

  it("orders items newest first", async () => {
    const xml = await feed()
    expect(xml.indexOf("Newest Post")).toBeLessThan(xml.indexOf("Older &amp;"))
  })

  it("gives every item a permalink guid", async () => {
    const xml = await feed()
    expect(xml).toContain(
      '<guid isPermaLink="true">https://gusfune.com/journal/newest-post</guid>'
    )
  })
})
