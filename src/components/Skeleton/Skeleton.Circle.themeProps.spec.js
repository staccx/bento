import themeProps from "./Skeleton.Circle.themeProps"

describe("Circle", () => {
  describe("Theme props", () => {
    it("circle", () => {
      expect(themeProps.circle).not.toBeNull()
      expect(themeProps.circle.hasOwnProperty("createVariants")).toBe(true)

      const style = `color: blue;`
      const variant = themeProps.circle.createVariants({
        myVariant: style
      })
      expect(variant.hasOwnProperty(themeProps.circle.name)).toBe(true)
      expect(variant[themeProps.circle.name].myVariant).toEqual(style)
    })
  })
})
