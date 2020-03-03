import themeProps from "./Keyfigures.themeProps"
import { theme as instance } from "../../../theming"
import KeyFigures from "./Keyfigures"

describe("Keyfigures", () => {
  describe("Theme props", () => {
    it("list", () => {
      expect(themeProps.list).not.toBeNull()
      expect(KeyFigures.hasOwnProperty("createVariants")).toBe(true)

      const style = `background-color: blue;`
      KeyFigures.createVariants({
        list: {
          myVariant: style
        }
      })
      expect(instance.hasOwnProperty(themeProps.list.name)).toBe(true)
      expect(instance[themeProps.list.name].myVariant).toEqual(style)
    })
    it("item", () => {
      expect(themeProps.item).not.toBeNull()
      expect(KeyFigures.hasOwnProperty("createVariants")).toBe(true)

      const style = `background-color: blue;`
      KeyFigures.createVariants({
        item: {
          myVariant: style
        }
      })
      expect(instance.hasOwnProperty(themeProps.item.name)).toBe(true)
      expect(instance[themeProps.item.name].myVariant).toEqual(style)
    })
    it("heading", () => {
      expect(themeProps.heading).not.toBeNull()
      expect(KeyFigures.hasOwnProperty("createVariants")).toBe(true)

      const style = `background-color: blue;`
      KeyFigures.createVariants({
        heading: {
          myVariant: style
        }
      })
      expect(instance.hasOwnProperty(themeProps.heading.name)).toBe(true)
      expect(instance[themeProps.heading.name].myVariant).toEqual(style)
    })
    it("value", () => {
      expect(themeProps.value).not.toBeNull()
      expect(KeyFigures.hasOwnProperty("createVariants")).toBe(true)

      const style = `background-color: blue;`
      KeyFigures.createVariants({
        value: {
          myVariant: style
        }
      })
      expect(instance.hasOwnProperty(themeProps.value.name)).toBe(true)
      expect(instance[themeProps.value.name].myVariant).toEqual(style)
    })
  })
})
