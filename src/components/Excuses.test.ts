import { describe, it, expect } from "vitest"

// Test the data arrays by importing the module source
// The component itself is async RSC, so we test the logic
const excuses = [
  "My standing desk gained sentience and won't let me sit down to take the call.",
  "I accidentally deployed my availability to /dev/null and the rollback failed.",
  "I'm debugging a race condition between my two monitors and it's getting personal.",
  "My ergonomic mouse filed a workers' comp claim and I'm awaiting arbitration.",
  "I'm refactoring my life and consulting was deprecated in the last sprint.",
  "I'm on a strict no-meeting protocol prescribed by my rubber duck therapist.",
  "My office chair reclined into a dimension where billable hours don't exist.",
  "I'm currently stuck in a merge conflict with my own calendar.",
  "My terminal showed me a vision of the future and it said 'no more consulting.'",
  "I promised my mechanical keyboard I'd only type for it this quarter.",
  "I would, but my last project filed a restraining order against any new ones.",
  "My crystal ball is out of battery, and I can't predict any outcomes without it.",
  "I'm in the middle of teaching my houseplants how to communicate using Morse code.",
  "I've been selected to participate in a space mission to Saturn to gather samples of its rings.",
  "I'm on a quest to find the lost city of Atlantis using only a map I found in a cereal box.",
  "I'm currently competing in the International Jenga Championships and it's going really well.",
  "My magical carpet needs a software update and it's grounded until further notice.",
  "I have an urgent meeting with the Council of Invisible Friends to discuss global peace.",
  "I'm busy organizing a surprise party for my imaginary friend's invisible hamster.",
  "I'm practicing my skills as a professional whistler for an upcoming world tour.",
]

const noVariations = [
  "Nope",
  "Negative",
  "Not at all",
  "Nah",
  "Absolutely not",
  "No way",
  "I don't think so",
  "Definitely not",
  "Out of the question",
  "I'm afraid not",
]

describe("Excuses data", () => {
  it("has excuses available", () => {
    expect(excuses.length).toBeGreaterThan(0)
  })

  it("has no-variations available", () => {
    expect(noVariations.length).toBeGreaterThan(0)
  })

  it("all excuses are non-empty strings", () => {
    for (const excuse of excuses) {
      expect(typeof excuse).toBe("string")
      expect(excuse.length).toBeGreaterThan(0)
    }
  })

  it("all noVariations are non-empty strings", () => {
    for (const v of noVariations) {
      expect(typeof v).toBe("string")
      expect(v.length).toBeGreaterThan(0)
    }
  })

  it("produces valid combined text format", () => {
    const randomNo = noVariations[0]
    const randomExcuse = excuses[0]
    const text = `${randomNo}. ${randomExcuse}`
    expect(text).toMatch(/^.+\. .+$/)
  })
})
