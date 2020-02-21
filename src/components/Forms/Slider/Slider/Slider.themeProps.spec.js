import themeProps from "./Slider.themeProps"

describe("Slider", () => {
  describe("Theme props", () => {
    it("thumb", () => {
      expect(themeProps.thumb).not.toBeNull()
      expect(themeProps.thumb.hasOwnProperty("createVariants")).toBe(true)

      const style = `color: blue;`
      const variant = themeProps.thumb.createVariants({
        myVariant: style
      })
      expect(variant.hasOwnProperty(themeProps.thumb.name)).toBe(true)
      expect(variant[themeProps.thumb.name].myVariant).toEqual(style)
    })
    it("track", () => {
      expect(themeProps.track).not.toBeNull()
      expect(themeProps.track.hasOwnProperty("createVariants")).toBe(true)

      const style = `color: blue;`
      const variant = themeProps.track.createVariants({
        myVariant: style
      })
      expect(variant.hasOwnProperty(themeProps.track.name)).toBe(true)
      expect(variant[themeProps.track.name].myVariant).toEqual(style)
    })
    it("input", () => {
      expect(themeProps.input).not.toBeNull()
      expect(themeProps.input.hasOwnProperty("createVariants")).toBe(true)

      const style = `color: blue;`
      const variant = themeProps.input.createVariants({
        myVariant: style
      })
      expect(variant.hasOwnProperty(themeProps.input.name)).toBe(true)
      expect(variant[themeProps.input.name].myVariant).toEqual(style)
    })
  })
})
