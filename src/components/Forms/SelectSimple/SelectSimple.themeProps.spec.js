import themeProps from "./SelectSimple.themeProps"

describe("SelectSimple", () => {
  describe("Theme props", () => {
    it("iconComponent", () => {
      expect(themeProps.iconComponent).not.toBeNull()
      expect(themeProps.iconComponent.hasOwnProperty("createVariants")).toBe(
        true
      )

      const style = `color: blue;`
      const variant = themeProps.iconComponent.createVariants({
        myVariant: style
      })
      expect(variant.hasOwnProperty(themeProps.iconComponent.name)).toBe(true)
      expect(variant[themeProps.iconComponent.name].myVariant).toEqual(style)
    })
    it("wrapper", () => {
      expect(themeProps.wrapper).not.toBeNull()
      expect(themeProps.wrapper.hasOwnProperty("createVariants")).toBe(true)

      const style = `color: blue;`
      const variant = themeProps.wrapper.createVariants({
        myVariant: style
      })
      expect(variant.hasOwnProperty(themeProps.wrapper.name)).toBe(true)
      expect(variant[themeProps.wrapper.name].myVariant).toEqual(style)
    })
    it("icon", () => {
      expect(themeProps.icon).not.toBeNull()
      expect(themeProps.icon.hasOwnProperty("createVariants")).toBe(true)

      const style = `color: blue;`
      const variant = themeProps.icon.createVariants({
        myVariant: style
      })
      expect(variant.hasOwnProperty(themeProps.icon.name)).toBe(true)
      expect(variant[themeProps.icon.name].myVariant).toEqual(style)
    })
    it("select", () => {
      expect(themeProps.select).not.toBeNull()
      expect(themeProps.select.hasOwnProperty("createVariants")).toBe(true)

      const style = `color: blue;`
      const variant = themeProps.select.createVariants({
        myVariant: style
      })
      expect(variant.hasOwnProperty(themeProps.select.name)).toBe(true)
      expect(variant[themeProps.select.name].myVariant).toEqual(style)
    })
  })
})
