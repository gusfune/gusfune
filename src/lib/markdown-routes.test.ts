import { describe, it, expect } from "vitest"
import { MARKDOWN_PAGES, markdownRewrites, mdPathFor } from "./markdown-routes"

interface RewriteRule {
  source: string
  destination: string
  has?: readonly { key: string }[]
}

const hasAcceptCondition = (rule: RewriteRule) =>
  rule.has?.some((condition) => condition.key === "accept") ?? false

describe("markdownRewrites", () => {
  it("gives every page an Accept-gated rewrite in beforeFiles", () => {
    const { beforeFiles } = markdownRewrites()

    expect(beforeFiles).toHaveLength(MARKDOWN_PAGES.length)
    MARKDOWN_PAGES.forEach(({ path, slug }) => {
      const rule = beforeFiles.find((entry) => entry.source === path)
      expect(rule?.destination).toBe(`/md/${slug}`)
      expect(hasAcceptCondition(rule!)).toBe(true)
    })
  })

  // These five are non-dynamic pages. In afterFiles the filesystem wins and
  // the rewrite silently never fires, which is the way this feature is most
  // likely to ship doing nothing at all.
  it("keeps Accept-gated page rewrites out of afterFiles", () => {
    const pagePaths: readonly string[] = MARKDOWN_PAGES.map(({ path }) => path)
    const offenders = markdownRewrites()
      .afterFiles.filter(hasAcceptCondition)
      .filter((rule) => pagePaths.includes(rule.source))

    expect(offenders).toEqual([])
  })

  it("gives every page a .md rewrite in afterFiles", () => {
    const { afterFiles } = markdownRewrites()

    MARKDOWN_PAGES.forEach(({ path, slug }) => {
      const rule = afterFiles.find((entry) => entry.source === mdPathFor(path))
      expect(rule?.destination).toBe(`/md/${slug}`)
      expect(hasAcceptCondition(rule!)).toBe(false)
    })
  })

  it("serves the home page from /index.md, never /.md", () => {
    expect(mdPathFor("/")).toBe("/index.md")
    expect(mdPathFor("/about")).toBe("/about.md")
  })

  it("routes journal posts by both doors", () => {
    const sources = markdownRewrites().afterFiles.map((rule) => rule.source)

    expect(sources).toContain("/journal/:slug")
    // The literal dot is escaped for path-to-regexp.
    expect(sources).toContain("/journal/:slug\\.md")
  })

  it("leaves the feed and the og image alone", () => {
    const sources = [
      ...markdownRewrites().beforeFiles,
      ...markdownRewrites().afterFiles,
    ].map((rule) => rule.source)

    expect(sources).not.toContain("/journal/rss")
    expect(sources).not.toContain("/journal/og")
  })
})
