import themeProps from "./Expand.themeProps"
import { theme as instance } from "../../theming"
import Expand from "./Expand"

describe("Expand", () => {
  describe("Theme props", () => {
    it("iconComponent", () => {
      expect(themeProps.iconComponent).not.toBeNull()
      expect(Expand.hasOwnProperty("createVariants")).toBe(true)

      const style = `color: blue;`
      Expand.createVariants({
        iconComponent: {
          myVariant: style
        }
      })
      expect(instance.hasOwnProperty(themeProps.iconComponent.name)).toBe(true)
      expect(instance[themeProps.iconComponent.name].myVariant).toEqual(style)
    })
    it("icon", () => {
      expect(themeProps.icon).not.toBeNull()
      expect(Expand.hasOwnProperty("createVariants")).toBe(true)

      const style = `color: blue;`
      Expand.createVariants({
        icon: {
          myVariant: style
        }
      })
      expect(instance.hasOwnProperty(themeProps.icon.name)).toBe(true)
      expect(instance[themeProps.icon.name].myVariant).toEqual(style)
    })
    it("Wrapper", () => {
      expect(themeProps.wrapper).not.toBeNull()
      expect(Expand.hasOwnProperty("createVariants")).toBe(true)

      const style = `color: blue;`
      Expand.createVariants({
        wrapper: {
          myVariant: style
        }
      })
      expect(instance.hasOwnProperty(themeProps.wrapper.name)).toBe(true)
      expect(instance[themeProps.wrapper.name].myVariant).toEqual(style)
    })
    it("Button", () => {
      expect(themeProps.button).not.toBeNull()
      expect(Expand.hasOwnProperty("createVariants")).toBe(true)

      const style = `color: blue;`
      Expand.createVariants({
        button: {
          myVariant: style
        }
      })
      expect(instance.hasOwnProperty(themeProps.button.name)).toBe(true)
      expect(instance[themeProps.button.name].myVariant).toEqual(style)
    })
    it("Item", () => {
      expect(themeProps.item).not.toBeNull()
      expect(Expand.hasOwnProperty("createVariants")).toBe(true)

      const style = `color: blue;`
      Expand.createVariants({
        item: {
          myVariant: style
        }
      })
      expect(instance.hasOwnProperty(themeProps.item.name)).toBe(true)
      expect(instance[themeProps.item.name].myVariant).toEqual(style)
    })
  })
})
