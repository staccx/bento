import themeProps from "./SelectSimple.themeProps"
import { theme as instance } from "../../../theming"
import SelectSimple from "./SelectSimple"

describe("SelectSimple", () => {
  describe("Theme props", () => {
    it("iconComponent", () => {
      expect(themeProps.iconComponent).not.toBeNull()
      expect(SelectSimple.hasOwnProperty("createVariants")).toBe(true)

      const style = `color: blue;`
      SelectSimple.createVariants({
        iconComponent: {
          myVariant: style
        }
      })
      expect(instance.hasOwnProperty(themeProps.iconComponent.name)).toBe(true)
      expect(instance[themeProps.iconComponent.name].myVariant).toEqual(style)
    })
    it("wrapper", () => {
      expect(themeProps.wrapper).not.toBeNull()
      expect(SelectSimple.hasOwnProperty("createVariants")).toBe(true)

      const style = `color: blue;`
      SelectSimple.createVariants({
        wrapper: {
          myVariant: style
        }
      })
      expect(instance.hasOwnProperty(themeProps.wrapper.name)).toBe(true)
      expect(instance[themeProps.wrapper.name].myVariant).toEqual(style)
    })
    it("icon", () => {
      expect(themeProps.icon).not.toBeNull()
      expect(SelectSimple.hasOwnProperty("createVariants")).toBe(true)

      const style = `color: blue;`
      SelectSimple.createVariants({
        icon: {
          myVariant: style
        }
      })
      expect(instance.hasOwnProperty(themeProps.icon.name)).toBe(true)
      expect(instance[themeProps.icon.name].myVariant).toEqual(style)
    })
    it("select", () => {
      expect(themeProps.select).not.toBeNull()
      expect(SelectSimple.hasOwnProperty("createVariants")).toBe(true)

      const style = `color: blue;`
      SelectSimple.createVariants({
        select: {
          myVariant: style
        }
      })
      expect(instance.hasOwnProperty(themeProps.select.name)).toBe(true)
      expect(instance[themeProps.select.name].myVariant).toEqual(style)
    })
  })
})
