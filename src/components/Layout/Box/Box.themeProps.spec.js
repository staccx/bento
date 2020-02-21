import themeProps from "./Box.themeProps"

describe("Box", () => {
  describe("Theme props", () => {
    it("box", () => {
      expect(themeProps.box).not.toBeNull()
      expect(themeProps.box.hasOwnProperty("createVariants")).toBe(true)

      const style = `background-color: blue;`
      const variant = themeProps.box.createVariants({
        myVariant: style
      })
      expect(variant.hasOwnProperty(themeProps.box.name)).toBe(true)
      expect(variant[themeProps.box.name].myVariant).toEqual(style)
    })
  })
})
