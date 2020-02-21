import themeProps from "./Toggle.themeProps"

describe("Toggle", () => {
  describe("Theme props", () => {
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
    it("toggleElement", () => {
      expect(themeProps.toggleElement).not.toBeNull()
      expect(themeProps.toggleElement.hasOwnProperty("createVariants")).toBe(
        true
      )

      const style = `color: blue;`
      const variant = themeProps.toggleElement.createVariants({
        myVariant: style
      })
      expect(variant.hasOwnProperty(themeProps.toggleElement.name)).toBe(true)
      expect(variant[themeProps.toggleElement.name].myVariant).toEqual(style)
    })
    it("input", () => {
      expect(themeProps.input).not.toBeNull()
      expect(themeProps.input.hasOwnProperty("createVariants")).toBe(true)

      const style = `color: blue;`
      const variant = themeProps.input.createVariants({
        myVariant: style
      })
      expect(variant.hasOwnProperty(themeProps.input.name)).toBe(true)
      expect(variant[themeProps.input.name].myVariant).toEqual(style)
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
  })
})
