import darken from "./darken"
import colorNames from "./colorNames"

describe("Darken", () => {
  it("Work", () => {
    expect(darken(colorNames.green, 0.25)).toBe("hsl(120, 100%, 18.8%)")
  })
})
