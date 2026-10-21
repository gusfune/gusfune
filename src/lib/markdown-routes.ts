import type { Metadata } from "next"

/**
 * The table of pages that have a markdown variant, plus the Next config
 * builders that wire them up.
 *
 * This lives in src/lib/ rather than inside next.config.ts so it can be unit
 * tested. next.config.ts cannot be imported under vitest because it uses
 * __dirname in an ESM file, and tsconfig path aliases do not apply to it, so
 * it imports this module by relative path.
 */
export const MARKDOWN_PAGES = [
  { path: "/", slug: "index" },
  { path: "/about", slug: "about" },
  { path: "/speaking", slug: "speaking" },
  { path: "/uses", slug: "uses" },
  { path: "/journal", slug: "journal" },
] as const

/** The `.md` URL for a page path. "/" becomes "/index.md", not "/.md". */
export const mdPathFor = (path: string) =>
  path === "/" ? "/index.md" : `${path}.md`

/**
 * The `alternates` block for a page that is also served as markdown.
 *
 * Next replaces `alternates` wholesale instead of merging it, so a page that
 * declares only its markdown variant silently drops the feed link the root
 * layout set. Every page repeats the feed, and repeats it from here.
 *
 * It lives beside `mdPathFor` so a page cannot advertise a variant that is not
 * routed.
 */
export const alternatesFor = (path: string): Metadata["alternates"] => ({
  canonical: path,
  types: {
    "text/markdown": mdPathFor(path),
    "application/rss+xml": "/journal/rss",
  },
})

const wantsMarkdown = [
  { type: "header", key: "accept", value: "(.*)text/markdown(.*)" },
] as const

export const markdownRewrites = () => ({
  // beforeFiles, and this is load-bearing. These five are non-dynamic pages.
  // Array-form and afterFiles rewrites run *after* the filesystem check, so an
  // Accept-gated rewrite on them would lose to the page and never fire. The
  // failure is silent: /about would just keep serving HTML.
  beforeFiles: MARKDOWN_PAGES.map(({ path, slug }) => ({
    source: path,
    destination: `/md/${slug}`,
    has: [...wantsMarkdown],
  })),
  afterFiles: [
    ...MARKDOWN_PAGES.map(({ path, slug }) => ({
      source: mdPathFor(path),
      destination: `/md/${slug}`,
    })),
    // The .md rule goes before the Accept rule. `:slug` matches a dot, so the
    // Accept rule would otherwise capture "ai-soft-skills.md" whole and rewrite
    // to a slug that is not published, turning a request that asks for markdown
    // both ways at once into a 404.
    // A literal dot has to be escaped for path-to-regexp.
    { source: "/journal/:slug\\.md", destination: "/md/journal/:slug" },
    // /journal/:slug is a dynamic route, so afterFiles wins here. It also runs
    // after the filesystem, which is what keeps /journal/rss and /journal/og
    // serving their own handlers.
    {
      source: "/journal/:slug",
      destination: "/md/journal/:slug",
      has: [...wantsMarkdown],
    },
  ],
  fallback: [],
})

/**
 * Deliberately no headers() entry for Vary: Accept on the HTML side.
 *
 * It was tried and it does not work. Next sets its own Vary on a prerendered
 * page response (rsc, next-router-*, Accept-Encoding) and that replaces
 * anything headers() configures, so the entry only ever landed on the
 * rewritten markdown response, which sets Vary itself. Verified against
 * `pnpm build && pnpm start`, not just dev.
 *
 * The residual risk is a shared proxy between the client and the CDN that
 * caches the HTML under the bare URL and then serves it to an agent asking
 * for markdown. Vercel's own CDN is not affected: the rewrite gives the two
 * variants different internal paths and therefore different cache keys. The
 * only fix that would work is a proxy.ts running on every request, which is a
 * function invocation per page view to protect against a third-party cache
 * this site does not sit behind. Not worth it. The .md URLs are the reliable
 * door; Accept negotiation is the convenience one.
 */
