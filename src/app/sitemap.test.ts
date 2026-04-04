import { describe, it, expect, vi } from "vitest"
import sitemap, { baseUrl } from "./sitemap"

vi.mock("./journal/utils", () => ({
  getBlogPosts: () => [
    {
      metadata: {
        title: "Test Post",
        publishedAt: "2025-06-01",
        summary: "A test",
      },
      slug: "test-post",
      content: "body",
    },
    {
      metadata: {
        title: "Another Post",
        publishedAt: "2025-07-15",
        summary: "Another test",
      },
      slug: "another-post",
      content: "body",
    },
  ],
}))

describe("baseUrl", () => {
  it("is the production domain", () => {
    expect(baseUrl).toBe("https://gusfune.com")
  })
})

describe("sitemap", () => {
  it("includes all static routes", () => {
    const result = sitemap()
    const urls = result.map((entry) => entry.url)
    expect(urls).toContain(`${baseUrl}`)
    expect(urls).toContain(`${baseUrl}/about`)
    expect(urls).toContain(`${baseUrl}/journal`)
    expect(urls).toContain(`${baseUrl}/speaking`)
    expect(urls).toContain(`${baseUrl}/uses`)
  })

  it("includes blog post routes", () => {
    const result = sitemap()
    const urls = result.map((entry) => entry.url)
    expect(urls).toContain(`${baseUrl}/journal/test-post`)
    expect(urls).toContain(`${baseUrl}/journal/another-post`)
  })

  it("sets lastModified from blog post publishedAt", () => {
    const result = sitemap()
    const blogEntry = result.find((e) => e.url.includes("test-post"))
    expect(blogEntry?.lastModified).toBe("2025-06-01")
  })

  it("sets weekly changeFrequency on static routes", () => {
    const result = sitemap()
    const staticEntry = result.find((e) => e.url === `${baseUrl}/about`)
    expect(staticEntry?.changeFrequency).toBe("weekly")
  })
})
