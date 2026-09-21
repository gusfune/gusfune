import { describe, it, expect } from "vitest"
import {
  buildLlmsTxt,
  getAllDocs,
  getDocByPath,
  markdownResponse,
  pathFromSlug,
  renderMarkdownPage,
  slugFromPath,
  textResponse,
} from "./markdown"
import type { MarkdownPage } from "./markdown"
import { MARKDOWN_PAGES } from "./markdown-routes"
import { baseUrl, siteName } from "./site"
import { parseFrontmatter } from "@/app/journal/utils"

const page: MarkdownPage = {
  kind: "journal",
  path: "/journal/example",
  mdPath: "/journal/example.md",
  title: "An example post",
  description: "A summary of the example post.",
  publishedAt: "2026-01-02",
  body: "First paragraph.\n\nSecond paragraph.",
}

describe("getAllDocs", () => {
  it("returns every page plus every journal post", () => {
    const docs = getAllDocs()
    const pages = docs.filter((doc) => doc.kind === "page")

    expect(pages).toHaveLength(MARKDOWN_PAGES.length)
    expect(docs.filter((doc) => doc.kind === "journal").length).toBeGreaterThan(
      0
    )
  })

  // Every markdown route and /llms.txt call this during the prerender, and
  // the loader underneath does a readdirSync plus a readFileSync per call.
  it("builds once and hands back the same array", () => {
    expect(getAllDocs()).toBe(getAllDocs())
  })

  it("gives every document a title, a description and a body", () => {
    getAllDocs().forEach((doc) => {
      expect(doc.title.length).toBeGreaterThan(0)
      expect(doc.description.length).toBeGreaterThan(0)
      expect(doc.body.length).toBeGreaterThan(0)
    })
  })

  it("lists journal posts newest first", () => {
    const dates = getAllDocs()
      .filter((doc) => doc.kind === "journal")
      .map((doc) => new Date(doc.publishedAt ?? 0).getTime())

    expect(dates).toEqual([...dates].sort((a, b) => b - a))
  })

  it("leaves no JSX or HTML comment markers in any body", () => {
    getAllDocs().forEach((doc) => {
      expect(doc.body).not.toContain("<!--")
      expect(doc.body).not.toContain("className")
    })
  })
})

describe("home page markdown", () => {
  it("injects the certification and speaking lists from the route content", () => {
    const home = getDocByPath("/")

    expect(home?.body).toContain("MACH Certification Expert")
    expect(home?.body).toContain("MACH X (London")
  })
})

describe("getDocByPath", () => {
  it("resolves the home page from the bare slash", () => {
    expect(getDocByPath("/")?.mdPath).toBe("/index.md")
  })

  it("returns undefined for a path that is not published", () => {
    expect(getDocByPath("/blog")).toBeUndefined()
    expect(getDocByPath("../../etc/passwd")).toBeUndefined()
  })
})

describe("slug translation", () => {
  it("round-trips every published path", () => {
    getAllDocs().forEach((doc) => {
      expect(pathFromSlug(slugFromPath(doc.path))).toBe(doc.path)
    })
  })

  it("maps the home page to the explicit index segment", () => {
    expect(slugFromPath("/")).toEqual(["index"])
    expect(pathFromSlug(["index"])).toBe("/")
  })
})

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

describe("textResponse", () => {
  it("serves plain text, which is what the llmstxt spec asks for", () => {
    expect(textResponse("hi").headers.get("content-type")).toBe(
      "text/plain; charset=utf-8"
    )
  })
})

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
