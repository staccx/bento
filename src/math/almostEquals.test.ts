import { almostEquals } from "./index"

describe("Math", () => {
  describe("Almost equals", () => {
    it("Default", () => {
      expect(almostEquals(1.00001, 1.00002)).toBe(true)
    })

    it("Override epsilon", () => {
      expect(almostEquals(1.00001, 1.00002, 0.000001)).toBe(false)
    })
  })
})
