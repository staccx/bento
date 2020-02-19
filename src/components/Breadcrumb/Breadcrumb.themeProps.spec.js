import themeProps from "./Breadcrumb.themeProps"

describe("Breadcrumb", () => {
  describe("Theme props", () => {
    it("main", () => {
      expect(themeProps.main).not.toBeNull()
      expect(themeProps.main.hasOwnProperty("createVariants")).toBe(true)

      const style = `background-color: blue;`
      const variant = themeProps.main.createVariants({
        myVariant: style
      })
      expect(variant.hasOwnProperty(themeProps.main.name)).toBe(true)
      expect(variant[themeProps.main.name].myVariant).toEqual(style)
    })
    it("listItem", () => {
      expect(themeProps.listItem).not.toBeNull()
      expect(themeProps.listItem.hasOwnProperty("createVariants")).toBe(true)

      const style = `background-color: blue;`
      const variant = themeProps.listItem.createVariants({
        myVariant: style
      })
      expect(variant.hasOwnProperty(themeProps.listItem.name)).toBe(true)
      expect(variant[themeProps.listItem.name].myVariant).toEqual(style)
    })
    it("itemAnchor", () => {
      expect(themeProps.itemAnchor).not.toBeNull()
      expect(themeProps.itemAnchor.hasOwnProperty("createVariants")).toBe(true)

      const style = `color: blue;`
      const variant = themeProps.itemAnchor.createVariants({
        myVariant: style
      })
      expect(variant.hasOwnProperty(themeProps.itemAnchor.name)).toBe(true)
      expect(variant[themeProps.itemAnchor.name].myVariant).toEqual(style)
    })
    it("itemText", () => {
      expect(themeProps.itemText).not.toBeNull()
      expect(themeProps.itemText.hasOwnProperty("createVariants")).toBe(true)

      const style = `color: blue;`
      const variant = themeProps.itemText.createVariants({
        myVariant: style
      })
      expect(variant.hasOwnProperty(themeProps.itemText.name)).toBe(true)
      expect(variant[themeProps.itemText.name].myVariant).toEqual(style)
    })
    it("listItemLast", () => {
      expect(themeProps.listItemLast).not.toBeNull()
      expect(themeProps.listItemLast.hasOwnProperty("createVariants")).toBe(
        true
      )

      const style = `background-color: blue;`
      const variant = themeProps.listItemLast.createVariants({
        myVariant: style
      })
      expect(variant.hasOwnProperty(themeProps.listItemLast.name)).toBe(true)
      expect(variant[themeProps.listItemLast.name].myVariant).toEqual(style)
    })
  })
})
