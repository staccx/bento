import themeProps from "./Text.themeProps"

describe("Text", () => {
  describe("Theme props", () => {
    it("text", () => {
      expect(themeProps.text).not.toBeNull()
      expect(themeProps.text.hasOwnProperty("createVariants")).toBe(true)

      const style = `color: blue;`
      const variant = themeProps.text.createVariants({
        myVariant: style
      })
      expect(variant.hasOwnProperty(themeProps.text.name)).toBe(true)
      expect(variant[themeProps.text.name].myVariant).toEqual(style)
    })
  })
})
