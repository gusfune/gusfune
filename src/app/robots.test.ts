import { describe, it, expect } from "vitest"
import robots from "./robots"
import { baseUrl } from "@/lib/site"

describe("robots", () => {
  it("points at the sitemap", () => {
    expect(robots().sitemap).toBe(`${baseUrl}/sitemap.xml`)
  })

  it("allows the AI agents this site wants to be read by", () => {
    const agents = robots().rules
    const names = Array.isArray(agents)
      ? agents.flatMap((rule) => rule.userAgent ?? [])
      : []
    expect(names).toContain("ClaudeBot")
    expect(names).toContain("GPTBot")
  })

  it("advertises the llms.txt files to every crawler", () => {
    const rules = robots().rules
    const wildcard = Array.isArray(rules)
      ? rules.find((rule) => rule.userAgent === "*")
      : undefined
    expect(wildcard?.other).toEqual({
      "LLM-Content": `${baseUrl}/llms.txt`,
      "LLM-Full-Content": `${baseUrl}/llms-full.txt`,
    })
  })

  it("does not hide the markdown routes from crawlers", () => {
    const rules = robots().rules
    const disallowed = Array.isArray(rules)
      ? rules.flatMap((rule) => rule.disallow ?? [])
      : []
    expect(disallowed).toHaveLength(0)
  })
})
