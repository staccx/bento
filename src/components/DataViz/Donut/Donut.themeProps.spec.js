import themeProps from "./Donut.themeProps"
import { theme as instance } from "../../../theming"
import Donut from "./Donut"

describe("Donut", () => {
  describe("theme Props", () => {
    it("donut", () => {
      expect(themeProps.donut).not.toBeNull()
      expect(Donut.hasOwnProperty("createVariants")).toBe(true)

      const style = `color: blue;`
      Donut.createVariants({
        donut: {
          myVariant: style
        }
      })
      expect(instance.hasOwnProperty(themeProps.donut.name)).toBe(true)
      expect(instance[themeProps.donut.name].myVariant).toEqual(style)
    })
    it("donutBackground", () => {
      expect(themeProps.donutBackground).not.toBeNull()
      expect(Donut.hasOwnProperty("createVariants")).toBe(true)

      const style = `color: blue;`
      Donut.createVariants({
        donutBackground: {
          myVariant: style
        }
      })
      expect(instance.hasOwnProperty(themeProps.donutBackground.name)).toBe(
        true
      )
      expect(instance[themeProps.donutBackground.name].myVariant).toEqual(style)
    })
    it("donutValue", () => {
      expect(themeProps.donutValue).not.toBeNull()
      expect(Donut.hasOwnProperty("createVariants")).toBe(true)

      const style = `color: orange;`
      Donut.createVariants({
        donutValue: {
          myVariant: style
        }
      })
      expect(instance.hasOwnProperty(themeProps.donutValue.name)).toBe(true)
      expect(instance[themeProps.donutValue.name].myVariant).toEqual(style)
    })
  })
})
