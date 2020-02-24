import themeProps from "./Skeleton.Pulse.themeProps"

describe("Pulse", () => {
  describe("Theme props", () => {
    it("pulse", () => {
      expect(themeProps.pulse).not.toBeNull()
      expect(themeProps.pulse.hasOwnProperty("createVariants")).toBe(true)

      const style = `color: blue;`
      const variant = themeProps.pulse.createVariants({
        myVariant: style
      })
      expect(variant.hasOwnProperty(themeProps.pulse.name)).toBe(true)
      expect(variant[themeProps.pulse.name].myVariant).toEqual(style)
    })
  })
})
