import themeProps from "./Odometer.themeProps"
import { theme as instance } from "../../../theming"
import Odometer from "./Odometer"

describe("Odometer", () => {
  describe("Theme props", () => {
    it("animating", () => {
      expect(themeProps.animating).not.toBeNull()
      expect(Odometer.hasOwnProperty("createVariants")).toBe(true)

      const style = `background-color: blue;`
      Odometer.createVariants({
        animating: {
          myVariant: style
        }
      })
      expect(instance.hasOwnProperty(themeProps.animating.name)).toBe(true)
      expect(instance[themeProps.animating.name].myVariant).toEqual(style)
    })
    it("static", () => {
      expect(themeProps.static).not.toBeNull()
      expect(Odometer.hasOwnProperty("createVariants")).toBe(true)

      const style = `background-color: blue;`
      Odometer.createVariants({
        static: {
          myVariant: style
        }
      })
      expect(instance.hasOwnProperty(themeProps.static.name)).toBe(true)
      expect(instance[themeProps.static.name].myVariant).toEqual(style)
    })
    it("container", () => {
      expect(themeProps.container).not.toBeNull()
      expect(Odometer.hasOwnProperty("createVariants")).toBe(true)

      const style = `background-color: blue;`
      Odometer.createVariants({
        container: {
          myVariant: style
        }
      })
      expect(instance.hasOwnProperty(themeProps.container.name)).toBe(true)
      expect(instance[themeProps.container.name].myVariant).toEqual(style)
    })
    it("wrapper", () => {
      expect(themeProps.wrapper).not.toBeNull()
      expect(Odometer.hasOwnProperty("createVariants")).toBe(true)

      const style = `background-color: blue;`
      Odometer.createVariants({
        wrapper: {
          myVariant: style
        }
      })
      expect(instance.hasOwnProperty(themeProps.wrapper.name)).toBe(true)
      expect(instance[themeProps.wrapper.name].myVariant).toEqual(style)
    })
  })
})
