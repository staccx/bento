import themeProps from "./Button.themeProps"

describe("Button", () => {
  describe("Theme props", () => {
    it("button", () => {
      expect(themeProps.button).not.toBeNull()
      expect(themeProps.button.hasOwnProperty("createVariants")).toBe(true)

      const style = `background-color: blue;`
      const variant = themeProps.button.createVariants({
        myVariant: style
      })
      expect(variant.hasOwnProperty(themeProps.button.name)).toBe(true)
      expect(variant[themeProps.button.name].myVariant).toEqual(style)
    })
  })
})
