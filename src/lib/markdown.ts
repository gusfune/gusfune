import fs from "node:fs"
import path from "node:path"
import { getBlogPosts, parseFrontmatter } from "@/app/journal/utils"
import { publications } from "@/app/journal/content"
import { certifications, profile } from "@/app/profile"
import { featuredTalks, lostFiles, talks } from "@/app/speaking/content"
import { usesSections } from "@/app/uses/content"
import { MARKDOWN_PAGES, mdPathFor } from "./markdown-routes"
import { baseUrl, siteName } from "./site"
import type { Talk } from "@/app/speaking/content"
import type { UsesItem } from "@/app/uses/content"

/**
 * One document, whatever its source.
 *
 * Journal posts come from MDX files, pages from the content.md or content.ts
 * that sits in the route folder. The markdown routes and llms.txt read this
 * one shape so they cannot disagree about a page.
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

const bold = (text: string, url?: string) =>
  url ? `[**${text}**](${url})` : `**${text}**`

const talkToMarkdown = (talk: Talk) => {
  const sublist =
    talk.links?.map((link) => `\n  - [${link.label}](${link.url})`).join("") ??
    ""
  return `- ${bold(talk.title, talk.url)} - ${talk.description}${sublist}`
}

const usesItemToMarkdown = (item: UsesItem) =>
  `- ${bold(item.name, item.url)} – ${item.text}`

/**
 * Read the `content.md` that sits next to a route's `page.tsx`.
 *
 * `dir` is the route directory under src/app, so "" is the home page. The
 * markdown and the JSX are two renderings of the same prose and they are
 * mirrored by hand, which is why they live in the same folder.
 */
const readPageContent = (dir: string) =>
  parseFrontmatter(
    fs.readFileSync(
      path.join(process.cwd(), "src", "app", dir, "content.md"),
      "utf-8"
    )
  )

/**
 * Build the home page markdown.
 *
 * Two string substitutions, not a templating engine. The prose is mirrored by
 * hand in content.md; the two lists that have actually drifted in the past
 * are injected from the route content modules so they cannot drift again.
 */
const buildHome = (): Pick<
  MarkdownPage,
  "title" | "description" | "updatedAt" | "body"
> => {
  const { metadata, content } = readPageContent("")
  const body = content
    .replace(
      "<!-- certifications -->",
      certifications.map((item) => `- [${item.title}](${item.link})`).join("\n")
    )
    .replace("<!-- speaking -->", featuredTalks.map(talkToMarkdown).join("\n"))

  return {
    title: metadata.title,
    description: metadata.summary,
    updatedAt: metadata.updatedAt,
    body,
  }
}

const buildAbout = () => {
  const { metadata, content } = readPageContent("about")
  return {
    title: metadata.title,
    description: metadata.summary,
    updatedAt: metadata.updatedAt,
    body: content,
  }
}

const buildSpeaking = () => ({
  title: "Speaking",
  description:
    "Conferences, panels and podcasts Gus Fune has spoken at, newest first.",
  body: [
    "Here are a few of the events I have spoken at over the years.",
    "",
    talks.map(talkToMarkdown).join("\n"),
    "",
    "## The lost files",
    "",
    "Podcasts and events that no longer have links.",
    "",
    lostFiles.map(talkToMarkdown).join("\n"),
  ].join("\n"),
})

const buildUses = () => ({
  title: "Uses",
  description:
    "The apps, dev tools, machines and hardware Gus Fune works with day to day.",
  body: usesSections
    .map(
      (section) =>
        `## ${section.heading}\n\n${section.items.map(usesItemToMarkdown).join("\n")}`
    )
    .join("\n\n"),
})

const buildJournal = (posts: ReturnType<typeof getBlogPosts>) => ({
  title: "Publications",
  description:
    "Articles, quotes and case studies about Gus Fune's work, plus posts written here.",
  body: [
    "Things I have written, collaborated on, or that have been written about me.",
    "",
    publications
      .map(
        (item) =>
          `- ${item.kind}: [**${item.title}**](${item.url}) - ${item.source}`
      )
      .join("\n"),
    "",
    "## Journal",
    "",
    posts
      .map((post) => `- [${post.metadata.title}](/journal/${post.slug})`)
      .join("\n"),
  ].join("\n"),
})

const PAGE_BUILDERS: Record<
  (typeof MARKDOWN_PAGES)[number]["slug"],
  (
    posts: ReturnType<typeof getBlogPosts>
  ) => Omit<MarkdownPage, "kind" | "path" | "mdPath">
> = {
  index: buildHome,
  about: buildAbout,
  speaking: buildSpeaking,
  uses: buildUses,
  journal: buildJournal,
}

/**
 * Every document on the site, pages first, then posts newest first.
 *
 * Memoized at module scope. Every markdown route and /llms.txt calls this
 * during the prerender, and getBlogPosts() does a readdirSync plus a
 * readFileSync per call. Building once turns a dozen filesystem sweeps into
 * one.
 */
let docsCache: MarkdownPage[] | undefined
let docsByPath: Map<string, MarkdownPage> | undefined

export const getAllDocs = (): MarkdownPage[] => {
  if (docsCache) {
    return docsCache
  }

  const posts = [...getBlogPosts()].sort(
    (a, b) =>
      new Date(b.metadata.publishedAt).getTime() -
      new Date(a.metadata.publishedAt).getTime()
  )

  const pages: MarkdownPage[] = MARKDOWN_PAGES.map(
    ({ path: pagePath, slug }) => ({
      kind: "page",
      path: pagePath,
      mdPath: mdPathFor(pagePath),
      ...PAGE_BUILDERS[slug](posts),
    })
  )

  const journal: MarkdownPage[] = posts.map((post) => ({
    kind: "journal",
    path: `/journal/${post.slug}`,
    mdPath: `/journal/${post.slug}.md`,
    title: post.metadata.title,
    description: post.metadata.summary,
    publishedAt: post.metadata.publishedAt,
    body: post.content,
  }))

  docsCache = [...pages, ...journal]
  docsByPath = new Map(docsCache.map((doc) => [doc.path, doc]))
  return docsCache
}

export const getDocByPath = (lookup: string): MarkdownPage | undefined => {
  getAllDocs()
  return docsByPath?.get(lookup)
}

/** Turn a /md/[...slug] segment list back into a canonical page path. */
export const pathFromSlug = (slug: string[]) =>
  slug.length === 1 && slug[0] === "index" ? "/" : `/${slug.join("/")}`

/** Turn a canonical page path into its /md/[...slug] segment list. */
export const slugFromPath = (lookup: string) =>
  lookup === "/" ? ["index"] : lookup.slice(1).split("/")

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

/**
 * Build the /llms.txt index, in the llmstxt.org shape: an H1, a blockquote
 * summary, then H2 sections of annotated links.
 *
 * Honest note for whoever reads this later: llms.txt has no measured effect on
 * whether a model cites the site, and Google has said no AI system consumes
 * it. It is here because it is a cheap, legible index, not because it ranks.
 */
export const buildLlmsTxt = () => {
  const docs = getAllDocs()
  const pages = docs.filter((doc) => doc.kind === "page")
  const posts = docs.filter((doc) => doc.kind === "journal")

  const toLink = (title: string, url: string, description: string) =>
    `- [${title}](${baseUrl}${url}): ${description}`

  return [
    `# ${siteName}`,
    "",
    `> ${profile.headline} ${profile.name} is ${profile.roles[0].title} at ${profile.roles[0].organisation} and an ${profile.roles[1].title} at the ${profile.roles[1].organisation}, based in ${profile.location}.`,
    "",
    "Every page on this site is also served as markdown. Append `.md` to any URL, or send `Accept: text/markdown`.",
    "",
    "## Pages",
    "",
    ...pages.map((page) => toLink(page.title, page.mdPath, page.description)),
    "",
    "## Journal",
    "",
    ...posts.map((post) => toLink(post.title, post.mdPath, post.description)),
    "",
    "## Optional",
    "",
    toLink("RSS feed", "/journal/rss", "New journal posts"),
    "",
  ].join("\n")
}

export const textResponse = (body: string) =>
  new Response(body, {
    headers: {
      // The llmstxt spec says text/plain. Browsers render it rather than
      // downloading it, which is the point.
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control":
        "public, max-age=0, s-maxage=86400, stale-while-revalidate=604800",
    },
  })
