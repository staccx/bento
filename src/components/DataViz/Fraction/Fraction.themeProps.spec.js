import themeProps from "./Fraction.themeProps"

describe("Alert", () => {
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
    it("circle", () => {
      expect(themeProps.circle).not.toBeNull()
      expect(themeProps.circle.hasOwnProperty("createVariants")).toBe(true)

      const style = `color: blue;`
      const variant = themeProps.circle.createVariants({
        myVariant: style
      })
      expect(variant.hasOwnProperty(themeProps.circle.name)).toBe(true)
      expect(variant[themeProps.circle.name].myVariant).toEqual(style)
    })
    it("coloredDot", () => {
      expect(themeProps.coloredDot).not.toBeNull()
      expect(themeProps.coloredDot.hasOwnProperty("createVariants")).toBe(true)

      const style = `color: blue;`
      const variant = themeProps.coloredDot.createVariants({
        myVariant: style
      })
      expect(variant.hasOwnProperty(themeProps.coloredDot.name)).toBe(true)
      expect(variant[themeProps.coloredDot.name].myVariant).toEqual(style)
    })
    it("desaturatedDot", () => {
      expect(themeProps.desaturatedDot).not.toBeNull()
      expect(themeProps.desaturatedDot.hasOwnProperty("createVariants")).toBe(
        true
      )

      const style = `color: blue;`
      const variant = themeProps.desaturatedDot.createVariants({
        myVariant: style
      })
      expect(variant.hasOwnProperty(themeProps.desaturatedDot.name)).toBe(true)
      expect(variant[themeProps.desaturatedDot.name].myVariant).toEqual(style)
    })
  })
})
