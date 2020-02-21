import themeProps from "./Legend.themeProps"

describe("legend", () => {
  describe("Theme props", () => {
    it("legend", () => {
      expect(themeProps.legend).not.toBeNull()
      expect(themeProps.legend.hasOwnProperty("createVariants")).toBe(true)

      const style = `background-color: blue;`
      const variant = themeProps.legend.createVariants({
        myVariant: style
      })
      expect(variant.hasOwnProperty(themeProps.legend.name)).toBe(true)
      expect(variant[themeProps.legend.name].myVariant).toEqual(style)
    })
  })
})
