import themeProps from "./InlineList.themeProps"

describe("inlineList", () => {
  describe("Theme props", () => {
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
  })
})
