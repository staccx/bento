import themeProps from "./Breadcrumb.themeProps"
import Breadcrumb from "./Breadcrumb"
import { theme as instance } from "../../theming"

describe("Breadcrumb", () => {
  describe("Theme props", () => {
    it("main", () => {
      expect(themeProps.main).not.toBeNull()
      expect(Breadcrumb.hasOwnProperty("createVariants")).toBe(true)

      const style = `background-color: blue;`
      Breadcrumb.createVariants({
        main: {
          myVariant: style
        }
      })
      expect(instance.hasOwnProperty(themeProps.main.name)).toBe(true)
      expect(instance[themeProps.main.name].myVariant).toEqual(style)
    })
    it("listItem", () => {
      expect(themeProps.listItem).not.toBeNull()
      expect(Breadcrumb.hasOwnProperty("createVariants")).toBe(true)

      const style = `background-color: blue;`
      Breadcrumb.createVariants({
        listItem: {
          myVariant: style
        }
      })
      expect(instance.hasOwnProperty(themeProps.listItem.name)).toBe(true)
      expect(instance[themeProps.listItem.name].myVariant).toEqual(style)
    })
    it("itemAnchor", () => {
      expect(themeProps.itemAnchor).not.toBeNull()
      expect(Breadcrumb.hasOwnProperty("createVariants")).toBe(true)

      const style = `color: blue;`
      Breadcrumb.createVariants({
        itemAnchor: {
          myVariant: style
        }
      })
      expect(instance.hasOwnProperty(themeProps.itemAnchor.name)).toBe(true)
      expect(instance[themeProps.itemAnchor.name].myVariant).toEqual(style)
    })
    it("itemText", () => {
      expect(themeProps.itemText).not.toBeNull()
      expect(Breadcrumb.hasOwnProperty("createVariants")).toBe(true)

      const style = `color: blue;`
      Breadcrumb.createVariants({
        itemText: {
          myVariant: style
        }
      })
      expect(instance.hasOwnProperty(themeProps.itemText.name)).toBe(true)
      expect(instance[themeProps.itemText.name].myVariant).toEqual(style)
    })
    it("listItemLast", () => {
      expect(themeProps.listItemLast).not.toBeNull()
      expect(Breadcrumb.hasOwnProperty("createVariants")).toBe(true)

      const style = `background-color: blue;`
      Breadcrumb.createVariants({
        listItemLast: {
          myVariant: style
        }
      })
      expect(instance.hasOwnProperty(themeProps.listItemLast.name)).toBe(true)
      expect(instance[themeProps.listItemLast.name].myVariant).toEqual(style)
    })
  })
})
