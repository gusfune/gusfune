import fs from "node:fs"
import path from "node:path"
import { getBlogPosts, parseFrontmatter } from "@/app/journal/utils"
import { certifications } from "@/content/certifications"
import { featuredTalks, lostFiles, talks } from "@/content/speaking"
import { publications } from "@/content/publications"
import { usesSections } from "@/content/uses"
import { MARKDOWN_PAGES, mdPathFor } from "./markdown-routes"
import type { MarkdownPage } from "./markdown"
import type { Talk } from "@/content/speaking"
import type { UsesItem } from "@/content/uses"

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

const readSidecar = (file: string) =>
  parseFrontmatter(
    fs.readFileSync(
      path.join(process.cwd(), "src", "content", "pages", file),
      "utf-8"
    )
  )

/**
 * Build the home page markdown.
 *
 * Two string substitutions, not a templating engine. The prose is mirrored by
 * hand in the sidecar; the two lists that have actually drifted in the past
 * are injected from the data modules so they cannot drift again.
 */
const buildHome = (): Pick<
  MarkdownPage,
  "title" | "description" | "updatedAt" | "body"
> => {
  const { metadata, content } = readSidecar("home.md")
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
  const { metadata, content } = readSidecar("about.md")
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
 * Memoized at module scope. The MCP search tool reads every document on every
 * request and getBlogPosts() does a readdirSync plus a readFileSync per call.
 * Files are immutable inside a deployed bundle, so this is free and turns
 * search from O(docs x fs) per request into a single startup cost.
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
