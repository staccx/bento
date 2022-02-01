import { abbreviateCurrency } from "./abbreviateCurrency"

// const space = \u00a0

describe("abbreviateCurrency", () => {
  it("Should not abbreviate values less than 1000", () => {
    expect(abbreviateCurrency(999)).toBe("999")
  })
  it("Should abbreviate 1000 to 1k", () => {
    expect(abbreviateCurrency(1000)).toBe("1k")
  })
  it("Should abbreviate 1 000 000 to 1m", () => {
    expect(abbreviateCurrency(1000000)).toBe("1\u00a0mill.")
  })
  it("Should handle different values", () => {
    expect(abbreviateCurrency(12345)).toBe("12k")
  })
})
