import themeProps from "./ExpandListItem.themeProps"

describe("ExpandListItem", () => {
  describe("Theme props", () => {
    it("listItemButtonComponent", () => {
      expect(themeProps.listItemButtonComponent).not.toBeNull()
      expect(
        themeProps.listItemButtonComponent.hasOwnProperty("createVariants")
      ).toBe(true)

      const style = `color: blue;`
      const variant = themeProps.listItemButtonComponent.createVariants({
        myVariant: style
      })
      expect(
        variant.hasOwnProperty(themeProps.listItemButtonComponent.name)
      ).toBe(true)
      expect(
        variant[themeProps.listItemButtonComponent.name].myVariant
      ).toEqual(style)
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
    it("listIcon", () => {
      expect(themeProps.listIcon).not.toBeNull()
      expect(themeProps.listIcon.hasOwnProperty("createVariants")).toBe(true)

      const style = `color: blue;`
      const variant = themeProps.listIcon.createVariants({
        myVariant: style
      })
      expect(variant.hasOwnProperty(themeProps.listIcon.name)).toBe(true)
      expect(variant[themeProps.listIcon.name].myVariant).toEqual(style)
    })
    it("listButton", () => {
      expect(themeProps.listButton).not.toBeNull()
      expect(themeProps.listButton.hasOwnProperty("createVariants")).toBe(true)

      const style = `color: blue;`
      const variant = themeProps.listButton.createVariants({
        myVariant: style
      })
      expect(variant.hasOwnProperty(themeProps.listButton.name)).toBe(true)
      expect(variant[themeProps.listButton.name].myVariant).toEqual(style)
    })
    it("expandedItem", () => {
      expect(themeProps.expandedItem).not.toBeNull()
      expect(themeProps.expandedItem.hasOwnProperty("createVariants")).toBe(
        true
      )

      const style = `color: blue;`
      const variant = themeProps.expandedItem.createVariants({
        myVariant: style
      })
      expect(variant.hasOwnProperty(themeProps.expandedItem.name)).toBe(true)
      expect(variant[themeProps.expandedItem.name].myVariant).toEqual(style)
    })
    it("expandListIconComponent", () => {
      expect(themeProps.expandListIconComponent).not.toBeNull()
      expect(
        themeProps.expandListIconComponent.hasOwnProperty("createVariants")
      ).toBe(true)

      const style = `color: blue;`
      const variant = themeProps.expandListIconComponent.createVariants({
        myVariant: style
      })
      expect(
        variant.hasOwnProperty(themeProps.expandListIconComponent.name)
      ).toBe(true)
      expect(
        variant[themeProps.expandListIconComponent.name].myVariant
      ).toEqual(style)
    })
  })
})
