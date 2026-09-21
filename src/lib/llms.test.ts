import { describe, it, expect } from "vitest"
import { buildLlmsFullTxt, buildLlmsTxt, textResponse } from "./llms"
import { getAllDocs } from "./page-markdown"
import { baseUrl, siteName } from "./site"

describe("buildLlmsTxt", () => {
  it("opens with the site name as an H1 and a blockquote summary", () => {
    const lines = buildLlmsTxt().split("\n")

    expect(lines[0]).toBe(`# ${siteName}`)
    expect(lines[2].startsWith("> ")).toBe(true)
  })

  it("links every document by its absolute markdown URL", () => {
    const output = buildLlmsTxt()

    getAllDocs().forEach((doc) => {
      expect(output).toContain(`(${baseUrl}${doc.mdPath})`)
    })
  })

  it("tells the reader how to ask for markdown", () => {
    expect(buildLlmsTxt()).toContain("Accept: text/markdown")
  })

  it("never emits a relative link", () => {
    const links = buildLlmsTxt().match(/\]\(([^)]+)\)/g) ?? []

    expect(links.length).toBeGreaterThan(0)
    links.forEach((link) => expect(link).toContain("https://"))
  })
})

describe("buildLlmsFullTxt", () => {
  it("contains every document, separated by a horizontal rule", () => {
    const output = buildLlmsFullTxt()
    const docs = getAllDocs()

    docs.forEach((doc) => expect(output).toContain(`# ${doc.title}`))
    // The blank line before the rule is what distinguishes the separator from
    // the closing "---" of a frontmatter block.
    expect(output.split("\n\n---\n\n")).toHaveLength(docs.length)
  })
})

describe("textResponse", () => {
  it("serves plain text, which is what the llmstxt spec asks for", () => {
    expect(textResponse("hi").headers.get("content-type")).toBe(
      "text/plain; charset=utf-8"
    )
  })
})
