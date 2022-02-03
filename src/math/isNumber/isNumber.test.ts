import { isNumber } from "./isNumber"

describe("Is Number", () => {
  it("Should return true for numbers", () => {
    expect(isNumber(10)).toBe(true)
  })

  it("Should return true for numeric string", () => {
    expect(isNumber("123")).toBe(true)
  })

  it("Should return false for normal string", () => {
    expect(isNumber("espen")).toBe(false)
  })

  it("Should return false for Infinite", () => {
    expect(isNumber(Number.POSITIVE_INFINITY)).toBe(false)
  })

  it("Should return false for calculation above infinite", () => {
    expect(isNumber(Number.MAX_VALUE * 2)).toBe(false)
  })
})
