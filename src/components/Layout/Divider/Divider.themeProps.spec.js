import themeProps from "./Divider.themeProps"

describe("Divider", () => {
  describe("Theme props", () => {
    it("rule", () => {
      expect(themeProps.rule).not.toBeNull()
      expect(themeProps.rule.hasOwnProperty("createVariants")).toBe(true)

      const style = `color: blue;`
      const variant = themeProps.rule.createVariants({
        myVariant: style
      })
      expect(variant.hasOwnProperty(themeProps.rule.name)).toBe(true)
      expect(variant[themeProps.rule.name].myVariant).toEqual(style)
    })
  })
})
