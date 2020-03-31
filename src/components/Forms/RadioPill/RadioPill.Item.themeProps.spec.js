import themeProps from "./RadioPill.item.themeProps"
import { theme as instance } from "../../../theming"
import RadioPillItem from "./RadioPill.Item"

describe("RadioPillItem", () => {
  describe("Theme props", () => {
    it("label", () => {
      expect(themeProps.label).not.toBeNull()
      expect(RadioPillItem.hasOwnProperty("createVariants")).toBe(true)

      const style = `color: blue;`
      RadioPillItem.createVariants({
        label: {
          myVariant: style
        }
      })
      expect(instance.hasOwnProperty(themeProps.label.name)).toBe(true)
      expect(instance[themeProps.label.name].myVariant).toEqual(style)
    })
    it("checked", () => {
      expect(themeProps.checked).not.toBeNull()
      expect(RadioPillItem.hasOwnProperty("createVariants")).toBe(true)

      const style = `color: blue;`
      RadioPillItem.createVariants({
        checked: {
          myVariant: style
        }
      })
      expect(instance.hasOwnProperty(themeProps.checked.name)).toBe(true)
      expect(instance[themeProps.checked.name].myVariant).toEqual(style)
    })
    it("wrapper", () => {
      expect(themeProps.wrapper).not.toBeNull()
      expect(RadioPillItem.hasOwnProperty("createVariants")).toBe(true)

      const style = `color: blue;`
      RadioPillItem.createVariants({
        wrapper: {
          myVariant: style
        }
      })
      expect(instance.hasOwnProperty(themeProps.wrapper.name)).toBe(true)
      expect(instance[themeProps.wrapper.name].myVariant).toEqual(style)
    })
    it("hover", () => {
      expect(themeProps.hover).not.toBeNull()
      expect(RadioPillItem.hasOwnProperty("createVariants")).toBe(true)

      const style = `color: blue;`
      RadioPillItem.createVariants({
        hover: {
          myVariant: style
        }
      })
      expect(instance.hasOwnProperty(themeProps.hover.name)).toBe(true)
      expect(instance[themeProps.hover.name].myVariant).toEqual(style)
    })
  })
})
