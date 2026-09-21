import { baseUrl, siteName } from "./site"
import { profile } from "@/content/profile"
import { getAllDocs } from "./page-markdown"
import { renderMarkdownPage } from "./markdown"

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
    toLink(
      "Full text",
      "/llms-full.txt",
      "Every page above, concatenated, for a single fetch"
    ),
    toLink("RSS feed", "/journal/rss", "New journal posts"),
    "",
  ].join("\n")
}

/**
 * Every document, concatenated. One fetch instead of one per page.
 *
 * Each rendered page already ends in a newline, so documents end up separated
 * by a blank line and then the rule. That blank line is what tells the
 * separator apart from the closing "---" of a frontmatter block.
 */
export const buildLlmsFullTxt = () =>
  getAllDocs().map(renderMarkdownPage).join("\n---\n\n")

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
