import themeProps from "./ItemGroup.themeProps"

describe("ItemGroup", () => {
  describe("Theme props", () => {
    it("wrapper", () => {
      expect(themeProps.wrapper).not.toBeNull()
      expect(themeProps.wrapper.hasOwnProperty("createVariants")).toBe(true)

      const style = `background-color: blue;`
      const variant = themeProps.wrapper.createVariants({
        myVariant: style
      })
      expect(variant.hasOwnProperty(themeProps.wrapper.name)).toBe(true)
      expect(variant[themeProps.wrapper.name].myVariant).toEqual(style)
    })
    it("group", () => {
      expect(themeProps.group).not.toBeNull()
      expect(themeProps.group.hasOwnProperty("createVariants")).toBe(true)

      const style = `background-color: blue;`
      const variant = themeProps.group.createVariants({
        myVariant: style
      })
      expect(variant.hasOwnProperty(themeProps.group.name)).toBe(true)
      expect(variant[themeProps.group.name].myVariant).toEqual(style)
    })
  })
})
