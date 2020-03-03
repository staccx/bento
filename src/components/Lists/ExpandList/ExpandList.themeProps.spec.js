import themeProps from "./ExpandListItem.themeProps"
import { theme as instance } from "../../../theming"
import ExpandListItem from "./ExpandListItem"

describe("ExpandListItem", () => {
  describe("Theme props", () => {
    it("listItemButtonComponent", () => {
      expect(themeProps.listItemButtonComponent).not.toBeNull()
      expect(ExpandListItem.hasOwnProperty("createVariants")).toBe(true)

      const style = `color: blue;`
      ExpandListItem.createVariants({
        listItemButtonComponent: {
          myVariant: style
        }
      })
      expect(
        instance.hasOwnProperty(themeProps.listItemButtonComponent.name)
      ).toBe(true)
      expect(
        instance[themeProps.listItemButtonComponent.name].myVariant
      ).toEqual(style)
    })
    it("listItem", () => {
      expect(themeProps.listItem).not.toBeNull()
      expect(ExpandListItem.hasOwnProperty("createVariants")).toBe(true)

      const style = `color: blue;`
      ExpandListItem.createVariants({
        listItem: {
          myVariant: style
        }
      })
      expect(instance.hasOwnProperty(themeProps.listItem.name)).toBe(true)
      expect(instance[themeProps.listItem.name].myVariant).toEqual(style)
    })
    it("listIcon", () => {
      expect(themeProps.listIcon).not.toBeNull()
      expect(ExpandListItem.hasOwnProperty("createVariants")).toBe(true)

      const style = `color: blue;`
      ExpandListItem.createVariants({
        listIcon: {
          myVariant: style
        }
      })
      expect(instance.hasOwnProperty(themeProps.listIcon.name)).toBe(true)
      expect(instance[themeProps.listIcon.name].myVariant).toEqual(style)
    })
    it("listButton", () => {
      expect(themeProps.listButton).not.toBeNull()
      expect(ExpandListItem.hasOwnProperty("createVariants")).toBe(true)

      const style = `color: blue;`
      ExpandListItem.createVariants({
        listButton: {
          myVariant: style
        }
      })
      expect(instance.hasOwnProperty(themeProps.listButton.name)).toBe(true)
      expect(instance[themeProps.listButton.name].myVariant).toEqual(style)
    })
    it("expandedItem", () => {
      expect(themeProps.expandedItem).not.toBeNull()
      expect(ExpandListItem.hasOwnProperty("createVariants")).toBe(true)

      const style = `color: blue;`
      ExpandListItem.createVariants({
        expandedItem: {
          myVariant: style
        }
      })
      expect(instance.hasOwnProperty(themeProps.expandedItem.name)).toBe(true)
      expect(instance[themeProps.expandedItem.name].myVariant).toEqual(style)
    })
    it("expandListIconComponent", () => {
      expect(themeProps.expandListIconComponent).not.toBeNull()
      expect(ExpandListItem.hasOwnProperty("createVariants")).toBe(true)

      const style = `color: blue;`
      ExpandListItem.createVariants({
        expandListIconComponent: {
          myVariant: style
        }
      })
      expect(
        instance.hasOwnProperty(themeProps.expandListIconComponent.name)
      ).toBe(true)
      expect(
        instance[themeProps.expandListIconComponent.name].myVariant
      ).toEqual(style)
    })
  })
})
