import themeProps from "./BirthdateInput.themeProps"

describe("BirthdateInput", () => {
  describe("Theme props", () => {
    it("outer", () => {
      expect(themeProps.outer).not.toBeNull()
      expect(themeProps.outer.hasOwnProperty("createVariants")).toBe(true)

      const style = `background-color: blue;`
      const variant = themeProps.outer.createVariants({
        myVariant: style
      })
      expect(variant.hasOwnProperty(themeProps.outer.name)).toBe(true)
      expect(variant[themeProps.outer.name].myVariant).toEqual(style)
    })
    it("container", () => {
      expect(themeProps.container).not.toBeNull()
      expect(themeProps.container.hasOwnProperty("createVariants")).toBe(true)

      const style = `background-color: blue;`
      const variant = themeProps.container.createVariants({
        myVariant: style
      })
      expect(variant.hasOwnProperty(themeProps.container.name)).toBe(true)
      expect(variant[themeProps.container.name].myVariant).toEqual(style)
    })
  })
})
