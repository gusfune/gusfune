import { describe, it, expect } from "vitest"
import { buildLevelFn } from "./GitHubContributions"
import type { ContributionCalendar } from "@/lib/github"

const makeCalendar = (counts: number[]): ContributionCalendar => ({
  totalContributions: counts.reduce((a, b) => a + b, 0),
  weeks: [
    {
      contributionDays: counts.map((c, i) => ({
        contributionCount: c,
        date: `2025-01-${String(i + 1).padStart(2, "0")}`,
      })),
    },
  ],
})

describe("buildLevelFn", () => {
  it("returns 0 for zero contributions", () => {
    const getLevel = buildLevelFn(makeCalendar([0, 1, 2, 5, 10, 20, 30, 50]))
    expect(getLevel(0)).toBe(0)
  })

  it("returns levels based on quartiles", () => {
    // Sorted non-zero: [1, 2, 3, 4, 5, 6, 7, 8]
    // q1 = index 1.75 -> arr[1] = 2
    // q2 = index 3.5 -> arr[3] = 4
    // q3 = index 5.25 -> arr[5] = 6
    const getLevel = buildLevelFn(makeCalendar([0, 1, 2, 3, 4, 5, 6, 7, 8]))
    expect(getLevel(1)).toBe(1) // <= q1 (2)
    expect(getLevel(2)).toBe(1) // <= q1 (2)
    expect(getLevel(3)).toBe(2) // <= q2 (4)
    expect(getLevel(4)).toBe(2) // <= q2 (4)
    expect(getLevel(5)).toBe(3) // <= q3 (6)
    expect(getLevel(6)).toBe(3) // <= q3 (6)
    expect(getLevel(7)).toBe(4) // > q3
    expect(getLevel(8)).toBe(4) // > q3
  })

  it("handles all-zero contributions", () => {
    const getLevel = buildLevelFn(makeCalendar([0, 0, 0]))
    expect(getLevel(0)).toBe(0)
    expect(getLevel(5)).toBe(0) // fallback returns 0 for everything
  })

  it("handles single non-zero value", () => {
    const getLevel = buildLevelFn(makeCalendar([0, 5]))
    // All quartiles = 5, so count 5 falls in <= q1
    expect(getLevel(5)).toBe(1)
  })

  it("handles uniform non-zero values", () => {
    const getLevel = buildLevelFn(makeCalendar([3, 3, 3, 3]))
    // All quartiles = 3
    expect(getLevel(3)).toBe(1)
  })

  it("handles high-volume contributor data", () => {
    const counts = [0, 5, 10, 15, 20, 25, 30, 40, 50, 60, 80, 100]
    const getLevel = buildLevelFn(makeCalendar(counts))
    expect(getLevel(0)).toBe(0)
    expect(getLevel(5)).toBe(1)
    expect(getLevel(100)).toBe(4)
  })
})
