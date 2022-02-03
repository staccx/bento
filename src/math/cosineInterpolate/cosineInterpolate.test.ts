import { cosineInterpolate, almostEquals } from "../index"

describe("Math", () => {
  describe("Cosine Interpolate", () => {
    it("Should", () => {
      const result = cosineInterpolate(0, 10, 0.5) // will yield 4.99999999
      expect(Math.round(result)).toBe(5)
      expect(almostEquals(result, 5)).toBe(true)
    })
  })
})
