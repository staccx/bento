import themeProps from "./Flag.themeProps"

describe("Flag", () => {
  describe("Theme props", () => {
    it("object", () => {
      expect(themeProps.object).not.toBeNull()
      expect(themeProps.object.hasOwnProperty("createVariants")).toBe(true)

      const style = `color: blue;`
      const variant = themeProps.object.createVariants({
        myVariant: style
      })
      expect(variant.hasOwnProperty(themeProps.object.name)).toBe(true)
      expect(variant[themeProps.object.name].myVariant).toEqual(style)
    })
  })
})
