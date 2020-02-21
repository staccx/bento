import themeProps from "./PhoneInput.themeProps"

describe("PhoneInput", () => {
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
    it("countryCode", () => {
      expect(themeProps.countryCode).not.toBeNull()
      expect(themeProps.countryCode.hasOwnProperty("createVariants")).toBe(true)

      const style = `background-color: blue;`
      const variant = themeProps.countryCode.createVariants({
        myVariant: style
      })
      expect(variant.hasOwnProperty(themeProps.countryCode.name)).toBe(true)
      expect(variant[themeProps.countryCode.name].myVariant).toEqual(style)
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
