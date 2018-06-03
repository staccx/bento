import lighten from "./lighten"
import colorNames from "./colorNames"

describe("Lighten", () => {
  it("Work", () => {
    expect(lighten(colorNames.blue, 0.5)).toBe("hsl(240, 100%, 75%)")
  })
})
