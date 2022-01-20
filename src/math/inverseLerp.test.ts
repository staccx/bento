import { inverseLerp } from "./index"

describe("Math", () => {
  describe("Inverse lerp", () => {
    it("Work", () => {
      expect(inverseLerp(0, 10, 5)).toBe(0.5)
    })
  })
})
