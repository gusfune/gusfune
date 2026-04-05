import { describe, it, expect, vi, beforeEach, afterEach } from "vitest"
import { fetchContributions } from "./github"

const mockCalendar = {
  totalContributions: 500,
  weeks: [
    {
      contributionDays: [
        { contributionCount: 5, date: "2025-04-01" },
        { contributionCount: 0, date: "2025-04-02" },
      ],
    },
  ],
}

describe("fetchContributions", () => {
  const originalFetch = globalThis.fetch

  beforeEach(() => {
    vi.stubEnv("GITHUB_TOKEN", "test-token")
  })

  afterEach(() => {
    globalThis.fetch = originalFetch
    vi.unstubAllEnvs()
  })

  it("returns null when GITHUB_TOKEN is not set", async () => {
    vi.stubEnv("GITHUB_TOKEN", "")
    const result = await fetchContributions("testuser")
    expect(result).toBeNull()
  })

  it("fetches and returns contribution calendar", async () => {
    globalThis.fetch = vi.fn().mockResolvedValue({
      ok: true,
      json: () =>
        Promise.resolve({
          data: {
            user: {
              contributionsCollection: {
                contributionCalendar: mockCalendar,
              },
            },
          },
        }),
    })

    const result = await fetchContributions("testuser")
    expect(result).toEqual(mockCalendar)
    expect(globalThis.fetch).toHaveBeenCalledWith(
      "https://api.github.com/graphql",
      expect.objectContaining({
        method: "POST",
        headers: expect.objectContaining({
          Authorization: "Bearer test-token",
        }),
      }),
    )
  })

  it("returns null on non-ok response", async () => {
    globalThis.fetch = vi.fn().mockResolvedValue({
      ok: false,
    })

    const result = await fetchContributions("testuser")
    expect(result).toBeNull()
  })

  it("returns null on fetch error", async () => {
    globalThis.fetch = vi.fn().mockRejectedValue(new Error("network error"))

    const result = await fetchContributions("testuser")
    expect(result).toBeNull()
  })

  it("returns null when API response has no user data", async () => {
    globalThis.fetch = vi.fn().mockResolvedValue({
      ok: true,
      json: () => Promise.resolve({ data: { user: null } }),
    })

    const result = await fetchContributions("testuser")
    expect(result).toBeNull()
  })

  it("includes username in query variables", async () => {
    globalThis.fetch = vi.fn().mockResolvedValue({
      ok: true,
      json: () =>
        Promise.resolve({
          data: {
            user: {
              contributionsCollection: {
                contributionCalendar: mockCalendar,
              },
            },
          },
        }),
    })

    await fetchContributions("gusfune")
    const body = JSON.parse((globalThis.fetch as ReturnType<typeof vi.fn>).mock.calls[0][1].body)
    expect(body.variables.username).toBe("gusfune")
  })
})
