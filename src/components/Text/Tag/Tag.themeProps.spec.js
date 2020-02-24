import themeProps from "./Tag.themeProps"

describe("Tag", () => {
  describe("Theme props", () => {
    it("tag", () => {
      expect(themeProps.tag).not.toBeNull()
      expect(themeProps.tag.hasOwnProperty("createVariants")).toBe(true)

      const style = `color: blue;`
      const variant = themeProps.tag.createVariants({
        myVariant: style
      })
      expect(variant.hasOwnProperty(themeProps.tag.name)).toBe(true)
      expect(variant[themeProps.tag.name].myVariant).toEqual(style)
    })
  })
})
