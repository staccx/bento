import themeProps from "./PostalCode.themeProps"

describe("PostalCodeInput", () => {
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
    it("location", () => {
      expect(themeProps.location).not.toBeNull()
      expect(themeProps.location.hasOwnProperty("createVariants")).toBe(true)

      const style = `background-color: blue;`
      const variant = themeProps.location.createVariants({
        myVariant: style
      })
      expect(variant.hasOwnProperty(themeProps.location.name)).toBe(true)
      expect(variant[themeProps.location.name].myVariant).toEqual(style)
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
  })
})
