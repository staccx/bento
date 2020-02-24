import themeProps from "./LinkListItem.themeProps"

describe("LinkListItem", () => {
  describe("Theme props", () => {
    it("iconComponent", () => {
      expect(themeProps.iconComponent).not.toBeNull()
      expect(themeProps.iconComponent.hasOwnProperty("createVariants")).toBe(
        true
      )

      const style = `color: blue;`
      const variant = themeProps.iconComponent.createVariants({
        myVariant: style
      })
      expect(variant.hasOwnProperty(themeProps.iconComponent.name)).toBe(true)
      expect(variant[themeProps.iconComponent.name].myVariant).toEqual(style)
    })
    it("icon", () => {
      expect(themeProps.icon).not.toBeNull()
      expect(themeProps.icon.hasOwnProperty("createVariants")).toBe(true)

      const style = `color: blue;`
      const variant = themeProps.icon.createVariants({
        myVariant: style
      })
      expect(variant.hasOwnProperty(themeProps.icon.name)).toBe(true)
      expect(variant[themeProps.icon.name].myVariant).toEqual(style)
    })
    it("listItem", () => {
      expect(themeProps.listItem).not.toBeNull()
      expect(themeProps.listItem.hasOwnProperty("createVariants")).toBe(true)

      const style = `color: blue;`
      const variant = themeProps.listItem.createVariants({
        myVariant: style
      })
      expect(variant.hasOwnProperty(themeProps.listItem.name)).toBe(true)
      expect(variant[themeProps.listItem.name].myVariant).toEqual(style)
    })
    it("itemButton", () => {
      expect(themeProps.itemButton).not.toBeNull()
      expect(themeProps.itemButton.hasOwnProperty("createVariants")).toBe(true)

      const style = `color: blue;`
      const variant = themeProps.itemButton.createVariants({
        myVariant: style
      })
      expect(variant.hasOwnProperty(themeProps.itemButton.name)).toBe(true)
      expect(variant[themeProps.itemButton.name].myVariant).toEqual(style)
    })
    it("link", () => {
      expect(themeProps.link).not.toBeNull()
      expect(themeProps.link.hasOwnProperty("createVariants")).toBe(true)

      const style = `color: blue;`
      const variant = themeProps.link.createVariants({
        myVariant: style
      })
      expect(variant.hasOwnProperty(themeProps.link.name)).toBe(true)
      expect(variant[themeProps.link.name].myVariant).toEqual(style)
    })
    it("hover", () => {
      expect(themeProps.hover).not.toBeNull()
      expect(themeProps.hover.hasOwnProperty("createVariants")).toBe(true)

      const style = `color: blue;`
      const variant = themeProps.hover.createVariants({
        myVariant: style
      })
      expect(variant.hasOwnProperty(themeProps.hover.name)).toBe(true)
      expect(variant[themeProps.hover.name].myVariant).toEqual(style)
    })
  })
})
