import themeProps from "./Headling.themeProps"

describe("Heading", () => {
  describe("Theme props", () => {
    it("heading", () => {
      expect(themeProps.heading).not.toBeNull()
      expect(themeProps.heading.hasOwnProperty("createVariants")).toBe(true)

      const style = `color: blue;`
      const variant = themeProps.heading.createVariants({
        myVariant: style
      })
      expect(variant.hasOwnProperty(themeProps.heading.name)).toBe(true)
      expect(variant[themeProps.heading.name].myVariant).toEqual(style)
    })
  })
})
