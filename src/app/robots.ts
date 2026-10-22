import type { MetadataRoute } from "next"
import { baseUrl } from "@/lib/site"

/**
 * AI crawlers and agents that get an explicit allow rule.
 *
 * Named rather than relying on the `*` rule so the intent is legible: this site
 * wants to be read by agents. Adding a name here is the opt-in switch.
 */
const aiAgents = [
  "GPTBot",
  "OAI-SearchBot",
  "ChatGPT-User",
  "ClaudeBot",
  "Claude-User",
  "Claude-SearchBot",
  "PerplexityBot",
  "Perplexity-User",
  "Google-Extended",
  "Applebot-Extended",
  "CCBot",
  "Meta-ExternalAgent",
  "Amazonbot",
  "Bytespider",
]

const robots = (): MetadataRoute.Robots => ({
  rules: [
    {
      userAgent: "*",
      allow: "/",
      // Non-standard directives. Next 16.3.0 added `other` for exactly this
      // case; a crawler that does not know the keys ignores the lines.
      // Convention, not spec — see llmstxt.org.
      other: {
        "LLM-Content": `${baseUrl}/llms.txt`,
      },
    },
    {
      userAgent: aiAgents,
      allow: "/",
    },
  ],
  sitemap: `${baseUrl}/sitemap.xml`,
  host: baseUrl,
})

export default robots
