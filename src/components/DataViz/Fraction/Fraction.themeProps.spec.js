import themeProps from "./Fraction.themeProps"
import { theme as instance } from "../../../theming"
import Fraction from "./Fraction"

describe("Alert", () => {
  describe("Theme props", () => {
    it("wrapper", () => {
      expect(themeProps.wrapper).not.toBeNull()
      expect(Fraction.hasOwnProperty("createVariants")).toBe(true)

      const style = `background-color: blue;`
      Fraction.createVariants({
        wrapper: {
          myVariant: style
        }
      })
      expect(instance.hasOwnProperty(themeProps.wrapper.name)).toBe(true)
      expect(instance[themeProps.wrapper.name].myVariant).toEqual(style)
    })
    it("circle", () => {
      expect(themeProps.circle).not.toBeNull()
      expect(Fraction.hasOwnProperty("createVariants")).toBe(true)

      const style = `color: blue;`
      Fraction.createVariants({
        circle: {
          myVariant: style
        }
      })
      expect(instance.hasOwnProperty(themeProps.circle.name)).toBe(true)
      expect(instance[themeProps.circle.name].myVariant).toEqual(style)
    })
    it("coloredDot", () => {
      expect(themeProps.coloredDot).not.toBeNull()
      expect(Fraction.hasOwnProperty("createVariants")).toBe(true)

      const style = `color: blue;`
      Fraction.createVariants({
        coloredDot: {
          myVariant: style
        }
      })
      expect(instance.hasOwnProperty(themeProps.coloredDot.name)).toBe(true)
      expect(instance[themeProps.coloredDot.name].myVariant).toEqual(style)
    })
    it("desaturatedDot", () => {
      expect(themeProps.desaturatedDot).not.toBeNull()
      expect(Fraction.hasOwnProperty("createVariants")).toBe(true)

      const style = `color: blue;`
      Fraction.createVariants({
        desaturatedDot: {
          myVariant: style
        }
      })
      expect(instance.hasOwnProperty(themeProps.desaturatedDot.name)).toBe(true)
      expect(instance[themeProps.desaturatedDot.name].myVariant).toEqual(style)
    })
  })
})
