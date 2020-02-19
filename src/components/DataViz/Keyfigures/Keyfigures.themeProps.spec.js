import themeProps from "./Keyfigures.themeProps"

describe("Keyfigures", () => {
  describe("Theme props", () => {
    it("list", () => {
      expect(themeProps.list).not.toBeNull()
      expect(themeProps.list.hasOwnProperty("createVariants")).toBe(true)

      const style = `background-color: blue;`
      const variant = themeProps.list.createVariants({
        myVariant: style
      })
      expect(variant.hasOwnProperty(themeProps.list.name)).toBe(true)
      expect(variant[themeProps.list.name].myVariant).toEqual(style)
    })
    it("item", () => {
      expect(themeProps.item).not.toBeNull()
      expect(themeProps.item.hasOwnProperty("createVariants")).toBe(true)

      const style = `background-color: blue;`
      const variant = themeProps.item.createVariants({
        myVariant: style
      })
      expect(variant.hasOwnProperty(themeProps.item.name)).toBe(true)
      expect(variant[themeProps.item.name].myVariant).toEqual(style)
    })
    it("heading", () => {
      expect(themeProps.heading).not.toBeNull()
      expect(themeProps.heading.hasOwnProperty("createVariants")).toBe(true)

      const style = `background-color: blue;`
      const variant = themeProps.heading.createVariants({
        myVariant: style
      })
      expect(variant.hasOwnProperty(themeProps.heading.name)).toBe(true)
      expect(variant[themeProps.heading.name].myVariant).toEqual(style)
    })
    it("value", () => {
      expect(themeProps.value).not.toBeNull()
      expect(themeProps.value.hasOwnProperty("createVariants")).toBe(true)

      const style = `background-color: blue;`
      const variant = themeProps.value.createVariants({
        myVariant: style
      })
      expect(variant.hasOwnProperty(themeProps.value.name)).toBe(true)
      expect(variant[themeProps.value.name].myVariant).toEqual(style)
    })
  })
})
