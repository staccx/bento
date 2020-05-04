import { isValidLoglevel, normalizeLevel } from "./loglevelUtils"

describe("Loglevel", () => {
  it("Should work", () => {
    expect(isValidLoglevel(0)).toBe(true)
    expect(isValidLoglevel(1)).toBe(true)
    expect(isValidLoglevel(2)).toBe(true)
    expect(isValidLoglevel(3)).toBe(true)
    expect(isValidLoglevel(4)).toBe(true)
    expect(isValidLoglevel(5)).toBe(true)
    expect(isValidLoglevel("silent")).toBe(true)
    expect(isValidLoglevel("error")).toBe(true)
    expect(isValidLoglevel("warn")).toBe(true)
    expect(isValidLoglevel("info")).toBe(true)
    expect(isValidLoglevel("debug")).toBe(true)
    expect(isValidLoglevel("trace")).toBe(true)

    expect(isValidLoglevel(undefined)).toBe(false)
    expect(isValidLoglevel(null)).toBe(false)
  })

  it("Should fail on invalid", () => {
    expect(isValidLoglevel("alarm")).toBe(false)
    expect(isValidLoglevel(6)).toBe(false)
  })

  it("Should be able to normalize", () => {
    expect(normalizeLevel(2)).toBe(3)
    expect(normalizeLevel(0)).toBe(5)
    expect(normalizeLevel("ERROR")).toBe(1)
    expect(normalizeLevel("INFO")).toBe(3)
  })

  it("Null and undefined", () => {
    const shouldThrow = () => {
      normalizeLevel(null)
    }

    expect(shouldThrow).toThrow()

    const undefinedThrow = () => {
      normalizeLevel(undefined)
    }

    expect(undefinedThrow).toThrow()
  })
})
