import themeProps from "./LinkListItem.themeProps"
import { theme as instance } from "../../../theming"
import LinkListItem from "./LinkListItem"

describe("LinkListItem", () => {
  describe("Theme props", () => {
    it("iconComponent", () => {
      expect(themeProps.iconComponent).not.toBeNull()
      expect(LinkListItem.hasOwnProperty("createVariants")).toBe(true)

      const style = `color: blue;`
      LinkListItem.createVariants({
        iconComponent: {
          myVariant: style
        }
      })
      expect(instance.hasOwnProperty(themeProps.iconComponent.name)).toBe(true)
      expect(instance[themeProps.iconComponent.name].myVariant).toEqual(style)
    })
    it("icon", () => {
      expect(themeProps.icon).not.toBeNull()
      expect(LinkListItem.hasOwnProperty("createVariants")).toBe(true)

      const style = `color: blue;`
      LinkListItem.createVariants({
        icon: {
          myVariant: style
        }
      })
      expect(instance.hasOwnProperty(themeProps.icon.name)).toBe(true)
      expect(instance[themeProps.icon.name].myVariant).toEqual(style)
    })
    it("listItem", () => {
      expect(themeProps.listItem).not.toBeNull()
      expect(LinkListItem.hasOwnProperty("createVariants")).toBe(true)

      const style = `color: blue;`
      LinkListItem.createVariants({
        listItem: {
          myVariant: style
        }
      })
      expect(instance.hasOwnProperty(themeProps.listItem.name)).toBe(true)
      expect(instance[themeProps.listItem.name].myVariant).toEqual(style)
    })
    it("itemButton", () => {
      expect(themeProps.itemButton).not.toBeNull()
      expect(LinkListItem.hasOwnProperty("createVariants")).toBe(true)

      const style = `color: blue;`
      LinkListItem.createVariants({
        itemButton: {
          myVariant: style
        }
      })
      expect(instance.hasOwnProperty(themeProps.itemButton.name)).toBe(true)
      expect(instance[themeProps.itemButton.name].myVariant).toEqual(style)
    })
    it("link", () => {
      expect(themeProps.link).not.toBeNull()
      expect(LinkListItem.hasOwnProperty("createVariants")).toBe(true)

      const style = `color: blue;`
      LinkListItem.createVariants({
        link: {
          myVariant: style
        }
      })
      expect(instance.hasOwnProperty(themeProps.link.name)).toBe(true)
      expect(instance[themeProps.link.name].myVariant).toEqual(style)
    })
    it("hover", () => {
      expect(themeProps.hover).not.toBeNull()
      expect(LinkListItem.hasOwnProperty("createVariants")).toBe(true)

      const style = `color: blue;`
      LinkListItem.createVariants({
        hover: {
          myVariant: style
        }
      })
      expect(instance.hasOwnProperty(themeProps.hover.name)).toBe(true)
      expect(instance[themeProps.hover.name].myVariant).toEqual(style)
    })
  })
})
