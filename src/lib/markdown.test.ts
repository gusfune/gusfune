import { describe, it, expect } from "vitest"
import { markdownResponse, renderMarkdownPage } from "./markdown"
import type { MarkdownPage } from "./markdown"
import { parseFrontmatter } from "@/app/journal/utils"
import { baseUrl } from "./site"

const page: MarkdownPage = {
  kind: "journal",
  path: "/journal/example",
  mdPath: "/journal/example.md",
  title: "An example post",
  description: "A summary of the example post.",
  publishedAt: "2026-01-02",
  body: "First paragraph.\n\nSecond paragraph.",
}

describe("renderMarkdownPage", () => {
  it("opens with a frontmatter block and then the title as an H1", () => {
    const lines = renderMarkdownPage(page).split("\n")

    expect(lines[0]).toBe("---")
    expect(lines[1]).toBe('title: "An example post"')
    expect(lines).toContain("# An example post")
  })

  it("points source at the HTML page, not the markdown one", () => {
    expect(renderMarkdownPage(page)).toContain(
      `source: "${baseUrl}/journal/example"`
    )
  })

  it("round-trips through the parser the rest of the repo uses", () => {
    const parsed = parseFrontmatter(renderMarkdownPage(page))

    expect(parsed.metadata.title).toBe("An example post")
    expect(parsed.metadata.summary).toBeUndefined()
    expect(parsed.content).toContain("Second paragraph.")
  })

  // The repo's parser strips a surrounding quote pair and unescapes nothing,
  // so quoting a value that contains a quote would corrupt the round trip.
  it("leaves a value containing a double quote unquoted so it parses back", () => {
    const quoted = { ...page, title: 'Why we say "no"' }
    const rendered = renderMarkdownPage(quoted)

    expect(rendered).toContain('title: Why we say "no"')
    expect(parseFrontmatter(rendered).metadata.title).toBe('Why we say "no"')
  })

  it("omits fields the page does not have", () => {
    const rendered = renderMarkdownPage({ ...page, publishedAt: undefined })
    expect(rendered).not.toContain("publishedAt")
    expect(rendered).not.toContain("updatedAt")
  })
})

describe("markdownResponse", () => {
  it("sets the content type, the canonical link and Vary", () => {
    const { headers } = markdownResponse(page)

    expect(headers.get("content-type")).toBe("text/markdown; charset=utf-8")
    expect(headers.get("vary")).toBe("Accept")
    expect(headers.get("link")).toBe(
      `<${baseUrl}/journal/example>; rel="canonical"`
    )
  })
})
