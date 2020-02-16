import { lerp } from "./index"
describe("Math", () => {
  describe("Lerp", () => {
    it("Lerp", () => {
      expect(lerp(0, 10, 0.5)).toBe(5)
    })
  })
})
