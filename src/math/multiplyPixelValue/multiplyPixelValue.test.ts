import { multiplyPixelValue } from "./multiplyPixelValue"
describe("Math", () => {
  describe("Multiply pixel value", () => {
    it("Normal use", () => {
      expect(multiplyPixelValue("36px", 2)).toBe(72)
    })

    it("Override unit", () => {
      expect(multiplyPixelValue("36px", 2, "em")).toBe("72em")
    })
  })
})
