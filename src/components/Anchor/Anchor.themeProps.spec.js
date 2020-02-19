import themeProps from "./anchor.themeProps"

describe("Anchor", () => {
  describe("Theme props", () => {
    it("Anchor", () => {
      expect(themeProps.anchor).not.toBeNull()
      expect(themeProps.anchor.hasOwnProperty("createVariants")).toBe(true)
      const style = `color: orange;`
      const variant = themeProps.anchor.createVariants({
        myVariant: style
      })
      expect(variant.hasOwnProperty(themeProps.anchor.name)).toBe(true)
      expect(variant[themeProps.anchor.name].myVariant).toEqual(style)
    })
  })
})
