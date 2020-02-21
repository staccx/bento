import themeProps from "./RadioPill.item.themeProps"

describe("RadioPillItem", () => {
  describe("Theme props", () => {
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
    it("checked", () => {
      expect(themeProps.checked).not.toBeNull()
      expect(themeProps.checked.hasOwnProperty("createVariants")).toBe(true)

      const style = `color: blue;`
      const variant = themeProps.checked.createVariants({
        myVariant: style
      })
      expect(variant.hasOwnProperty(themeProps.checked.name)).toBe(true)
      expect(variant[themeProps.checked.name].myVariant).toEqual(style)
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
    it("hover", () => {
      expect(themeProps.hover).not.toBeNull()
      expect(themeProps.hover.hasOwnProperty("createVariants")).toBe(true)

      const style = `color: blue;`
      const variant = themeProps.hover.createVariants({
        myVariant: style
      })
      expect(variant.hasOwnProperty(themeProps.hover.name)).toBe(true)
      expect(variant[themeProps.hover.name].myVariant).toEqual(style)
    })
  })
})
