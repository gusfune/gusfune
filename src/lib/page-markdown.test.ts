import { describe, it, expect } from "vitest"
import {
  getAllDocs,
  getDocByPath,
  pathFromSlug,
  slugFromPath,
} from "./page-markdown"
import { MARKDOWN_PAGES } from "./markdown-routes"

describe("getAllDocs", () => {
  it("returns every page plus every journal post", () => {
    const docs = getAllDocs()
    const pages = docs.filter((doc) => doc.kind === "page")

    expect(pages).toHaveLength(MARKDOWN_PAGES.length)
    expect(docs.filter((doc) => doc.kind === "journal").length).toBeGreaterThan(
      0
    )
  })

  // The MCP search tool reads every document on every request, and the loader
  // underneath does a readdirSync plus a readFileSync per call.
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
  it("injects the certification and speaking lists from the data modules", () => {
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
