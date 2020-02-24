import themeProps from "./Skeleton.Line.themeProps"

describe("Line", () => {
  describe("Theme props", () => {
    it("line", () => {
      expect(themeProps.line).not.toBeNull()
      expect(themeProps.line.hasOwnProperty("createVariants")).toBe(true)

      const style = `color: blue;`
      const variant = themeProps.line.createVariants({
        myVariant: style
      })
      expect(variant.hasOwnProperty(themeProps.line.name)).toBe(true)
      expect(variant[themeProps.line.name].myVariant).toEqual(style)
    })
  })
})
