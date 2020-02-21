import themeProps from "./Image.themeProps"

describe("Image", () => {
  describe("Theme props", () => {
    it("image", () => {
      expect(themeProps.image).not.toBeNull()
      expect(themeProps.image.hasOwnProperty("createVariants")).toBe(true)

      const style = `color: blue;`
      const variant = themeProps.image.createVariants({
        myVariant: style
      })
      expect(variant.hasOwnProperty(themeProps.image.name)).toBe(true)
      expect(variant[themeProps.image.name].myVariant).toEqual(style)
    })
    it("container", () => {
      expect(themeProps.container).not.toBeNull()
      expect(themeProps.container.hasOwnProperty("createVariants")).toBe(true)

      const style = `color: blue;`
      const variant = themeProps.container.createVariants({
        myVariant: style
      })
      expect(variant.hasOwnProperty(themeProps.container.name)).toBe(true)
      expect(variant[themeProps.container.name].myVariant).toEqual(style)
    })
  })
})
