import hexToRgb from "./hexToRgb"

describe("Color helpers", () => {
  describe("Hex to rgb", () => {
    it("Red", () => {
      expect(hexToRgb("FF0000")).toStrictEqual({
        b: 0,
        g: 0,
        r: 255
      })
    })
    it("Green", () => {
      expect(hexToRgb("00FF00")).toStrictEqual({
        b: 0,
        g: 255,
        r: 0
      })
    })
    it("Blue", () => {
      expect(hexToRgb("0000FF")).toStrictEqual({
        b: 255,
        g: 0,
        r: 0
      })
    })

    it("Shorthand", () => {
      expect(hexToRgb("f0f")).toStrictEqual({
        b: 255,
        g: 0,
        r: 255
      })
    })

    it("Grey", () => {
      expect(hexToRgb("808080")).toStrictEqual({
        b: 128,
        g: 128,
        r: 128
      })
    })
  })
})
