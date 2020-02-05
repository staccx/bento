import { opacity } from "./opacity"
import { colorNames } from "./colorNames"

describe("Opacity", () => {
  it("Set", () => {
    expect(opacity(colorNames.white, 0.5)).toBe("rgba(255, 255, 255, 0.5)")
  })
})
