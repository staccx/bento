import themeProps from "./Expand.themeProps"

describe("Expand", () => {
  describe("Theme props", () => {
    it("apenx", () => {
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
    it("Icon", () => {
      expect(themeProps.icon).not.toBeNull()
      expect(themeProps.icon.hasOwnProperty("createVariants")).toBe(true)

      const style = `color: blue;`
      const variant = themeProps.icon.createVariants({
        myVariant: style
      })
      expect(variant.hasOwnProperty(themeProps.icon.name)).toBe(true)
      expect(variant[themeProps.icon.name].myVariant).toEqual(style)
    })
    it("Wrapper", () => {
      expect(themeProps.wrapper).not.toBeNull()
      expect(themeProps.wrapper.hasOwnProperty("createVariants")).toBe(true)

      const style = `color: blue;`
      const variant = themeProps.wrapper.createVariants({
        myVariant: style
      })
      expect(variant.hasOwnProperty(themeProps.wrapper.name)).toBe(true)
      expect(variant[themeProps.wrapper.name].myVariant).toEqual(style)
    })
    it("Button", () => {
      expect(themeProps.button).not.toBeNull()
      expect(themeProps.button.hasOwnProperty("createVariants")).toBe(true)

      const style = `color: blue;`
      const variant = themeProps.button.createVariants({
        myVariant: style
      })
      expect(variant.hasOwnProperty(themeProps.button.name)).toBe(true)
      expect(variant[themeProps.button.name].myVariant).toEqual(style)
    })
    it("Item", () => {
      expect(themeProps.item).not.toBeNull()
      expect(themeProps.item.hasOwnProperty("createVariants")).toBe(true)

      const style = `color: blue;`
      const variant = themeProps.item.createVariants({
        myVariant: style
      })
      expect(variant.hasOwnProperty(themeProps.item.name)).toBe(true)
      expect(variant[themeProps.item.name].myVariant).toEqual(style)
    })
  })
})
