import { baseUrl } from "./site"

/**
 * One document, whatever its source.
 *
 * Journal posts come from MDX files, pages from markdown sidecars or from the
 * data modules in src/content/. The markdown routes, llms.txt and the MCP
 * tools all read this one shape so they cannot disagree about a page.
 */
export interface MarkdownPage {
  kind: "page" | "journal"
  /** Canonical HTML path, no trailing slash: "/about", "/journal/some-post". */
  path: string
  /** Markdown path: "/about.md", "/index.md", "/journal/some-post.md". */
  mdPath: string
  title: string
  description: string
  publishedAt?: string
  updatedAt?: string
  /** Body only. No frontmatter, no H1, no JSX. */
  body: string
}

/**
 * Render one frontmatter value.
 *
 * parseFrontmatter in src/app/journal/utils.ts strips a surrounding quote pair
 * and does no unescaping, so a value containing a double quote cannot be
 * quoted without corrupting the round trip. Those are emitted bare, which
 * parses back verbatim. Whitespace is collapsed because the parser is
 * line-based and a newline inside a value would end the field.
 */
const renderValue = (value: string) => {
  const flat = value.replace(/\s+/g, " ").trim()
  return flat.includes('"') ? flat : `"${flat}"`
}

export const renderMarkdownPage = (page: MarkdownPage) => {
  const fields: [string, string | undefined][] = [
    ["title", page.title],
    ["description", page.description],
    ["source", `${baseUrl}${page.path}`],
    ["publishedAt", page.publishedAt],
    ["updatedAt", page.updatedAt],
  ]

  const frontmatter = fields
    .filter(([, value]) => Boolean(value))
    .map(([key, value]) => `${key}: ${renderValue(value as string)}`)
    .join("\n")

  return `---\n${frontmatter}\n---\n\n# ${page.title}\n\n${page.body}\n`
}

export const markdownResponse = (page: MarkdownPage) =>
  new Response(renderMarkdownPage(page), {
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      // For caches downstream of the CDN, which key on the requested URL.
      "Vary": "Accept",
      // The HTML page is the canonical one. This is what stops the markdown
      // variant being treated as duplicate content.
      "Link": `<${baseUrl}${page.path}>; rel="canonical"`,
      "Cache-Control":
        "public, max-age=0, s-maxage=86400, stale-while-revalidate=604800",
    },
  })
