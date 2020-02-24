import themeProps from "./Pack.themeProps"

describe("Pack", () => {
  describe("Theme props", () => {
    it("list", () => {
      expect(themeProps.list).not.toBeNull()
      expect(themeProps.list.hasOwnProperty("createVariants")).toBe(true)

      const style = `background-color: blue;`
      const variant = themeProps.list.createVariants({
        myVariant: style
      })
      expect(variant.hasOwnProperty(themeProps.list.name)).toBe(true)
      expect(variant[themeProps.list.name].myVariant).toEqual(style)
    })
  })
})
