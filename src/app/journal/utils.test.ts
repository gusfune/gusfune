import { describe, it, expect, vi, beforeEach, afterEach } from "vitest"
import { parseFrontmatter, formatDate } from "./utils"

describe("parseFrontmatter", () => {
  it("parses basic frontmatter", () => {
    const content = `---
title: Hello World
publishedAt: 2025-01-15
summary: A test post
---

This is the body.`

    const result = parseFrontmatter(content)
    expect(result.metadata.title).toBe("Hello World")
    expect(result.metadata.publishedAt).toBe("2025-01-15")
    expect(result.metadata.summary).toBe("A test post")
    expect(result.content).toBe("This is the body.")
  })

  it("handles values with colons", () => {
    const content = `---
title: Time: 10:30 AM
publishedAt: 2025-01-15
summary: A summary
---

Body`

    const result = parseFrontmatter(content)
    expect(result.metadata.title).toBe("Time: 10:30 AM")
  })

  it("strips quotes from values", () => {
    const content = `---
title: "Quoted Title"
publishedAt: '2025-01-15'
summary: A summary
---

Body`

    const result = parseFrontmatter(content)
    expect(result.metadata.title).toBe("Quoted Title")
    expect(result.metadata.publishedAt).toBe("2025-01-15")
  })

  it("handles optional image field", () => {
    const content = `---
title: With Image
publishedAt: 2025-01-15
summary: A summary
image: /photo.jpg
---

Body`

    const result = parseFrontmatter(content)
    expect(result.metadata.image).toBe("/photo.jpg")
  })
})

describe("formatDate", () => {
  beforeEach(() => {
    vi.useFakeTimers()
    vi.setSystemTime(new Date("2026-04-04T12:00:00"))
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it("returns full date without relative", () => {
    const result = formatDate("2026-03-15")
    expect(result).toBe("March 15, 2026")
  })

  it("returns full date with relative (years ago)", () => {
    const result = formatDate("2024-01-01", true)
    expect(result).toContain("January 1, 2024")
    expect(result).toContain("2y ago")
  })

  it("returns full date with relative (months ago)", () => {
    const result = formatDate("2026-02-01", true)
    expect(result).toContain("February 1, 2026")
    expect(result).toContain("2mo ago")
  })

  it("returns full date with relative (days ago)", () => {
    const result = formatDate("2026-04-01", true)
    expect(result).toContain("April 1, 2026")
    expect(result).toContain("3d ago")
  })

  it("returns Today for current date", () => {
    const result = formatDate("2026-04-04", true)
    expect(result).toContain("Today")
  })

  it("handles ISO date strings with time", () => {
    const result = formatDate("2026-03-15T10:30:00")
    expect(result).toBe("March 15, 2026")
  })
})
