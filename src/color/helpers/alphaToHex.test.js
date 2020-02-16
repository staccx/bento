import alphaToHex from "./alphaToHex"

describe("Color helpers", () => {
  describe("Alpha to hex", () => {
    it("Should work with normalized values", () => {
      expect(alphaToHex(0.8)).toBe("CC")
    })

    it("Should work with percentages values", () => {
      expect(alphaToHex(80)).toBe("CC")
    })
  })
})
