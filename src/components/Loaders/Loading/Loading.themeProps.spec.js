import themeProps from "./Loading.themeProps"

describe("Loading", () => {
  describe("Theme props", () => {
    it("component", () => {
      expect(themeProps.component).not.toBeNull()
      expect(themeProps.component.hasOwnProperty("createVariants")).toBe(true)

      const style = `background-color: blue;`
      const variant = themeProps.component.createVariants({
        myVariant: style
      })
      expect(variant.hasOwnProperty(themeProps.component.name)).toBe(true)
      expect(variant[themeProps.component.name].myVariant).toEqual(style)
    })
    it("loading", () => {
      expect(themeProps.loading).not.toBeNull()
      expect(themeProps.loading.hasOwnProperty("createVariants")).toBe(true)

      const style = `background-color: blue;`
      const variant = themeProps.loading.createVariants({
        myVariant: style
      })
      expect(variant.hasOwnProperty(themeProps.loading.name)).toBe(true)
      expect(variant[themeProps.loading.name].myVariant).toEqual(style)
    })
  })
})
