import themeProps from "./FileInput.themeProps"

describe("FileInput", () => {
  describe("Theme props", () => {
    it("wrapper", () => {
      expect(themeProps.wrapper).not.toBeNull()
      expect(themeProps.wrapper.hasOwnProperty("createVariants")).toBe(true)

      const style = `background-color: blue;`
      const variant = themeProps.wrapper.createVariants({
        myVariant: style
      })
      expect(variant.hasOwnProperty(themeProps.wrapper.name)).toBe(true)
      expect(variant[themeProps.wrapper.name].myVariant).toEqual(style)
    })
    it("input", () => {
      expect(themeProps.input).not.toBeNull()
      expect(themeProps.input.hasOwnProperty("createVariants")).toBe(true)

      const style = `background-color: blue;`
      const variant = themeProps.input.createVariants({
        myVariant: style
      })
      expect(variant.hasOwnProperty(themeProps.input.name)).toBe(true)
      expect(variant[themeProps.input.name].myVariant).toEqual(style)
    })
    it("label", () => {
      expect(themeProps.label).not.toBeNull()
      expect(themeProps.label.hasOwnProperty("createVariants")).toBe(true)

      const style = `color: blue;`
      const variant = themeProps.label.createVariants({
        myVariant: style
      })
      expect(variant.hasOwnProperty(themeProps.label.name)).toBe(true)
      expect(variant[themeProps.label.name].myVariant).toEqual(style)
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
  })
})
