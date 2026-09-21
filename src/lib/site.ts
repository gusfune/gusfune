/**
 * Single source of truth for the site's identity.
 *
 * Lives here rather than in `src/app/sitemap.ts` so that consumers such as the
 * root layout can import `baseUrl` without pulling `getBlogPosts()` and
 * `node:fs` into their module graph. `sitemap.ts` re-exports it for
 * backwards compatibility.
 */
export const baseUrl = "https://gusfune.com"

export const siteName = "Gus Fune"

export const siteDescription = "e-commerce, tech and stuff..."
