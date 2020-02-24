import themeProps from "./NewBadge.themeProps"

describe("NewBadge", () => {
  describe("Theme props", () => {
    it("wrapper", () => {
      expect(themeProps.wrapper).not.toBeNull()
      expect(themeProps.wrapper.hasOwnProperty("createVariants")).toBe(true)

      const style = `background-color: blue;`
      const variant = themeProps.wrapper.createVariants({
        myVariant: style
      })
      expect(variant.hasOwnProperty(themeProps.wrapper.name)).toBe(true)
      expect(variant[themeProps.wrapper.name].myVariant).toEqual(style)
    })
    it("badge", () => {
      expect(themeProps.badge).not.toBeNull()
      expect(themeProps.badge.hasOwnProperty("createVariants")).toBe(true)

      const style = `background-color: blue;`
      const variant = themeProps.badge.createVariants({
        myVariant: style
      })
      expect(variant.hasOwnProperty(themeProps.badge.name)).toBe(true)
      expect(variant[themeProps.badge.name].myVariant).toEqual(style)
    })
  })
})
