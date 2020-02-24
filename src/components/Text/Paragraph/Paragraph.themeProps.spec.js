import themeProps from "./Paragraph.themeProps"

describe("Paragraph", () => {
  describe("Theme props", () => {
    it("paragraph", () => {
      expect(themeProps.paragraph).not.toBeNull()
      expect(themeProps.paragraph.hasOwnProperty("createVariants")).toBe(true)

      const style = `color: blue;`
      const variant = themeProps.paragraph.createVariants({
        myVariant: style
      })
      expect(variant.hasOwnProperty(themeProps.paragraph.name)).toBe(true)
      expect(variant[themeProps.paragraph.name].myVariant).toEqual(style)
    })
  })
})
