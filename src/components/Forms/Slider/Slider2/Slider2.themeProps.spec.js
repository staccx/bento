import themeProps from "./Slider2.themeProps"

describe("Slider2", () => {
  describe("Theme props", () => {
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
    it("slider", () => {
      expect(themeProps.slider).not.toBeNull()
      expect(themeProps.slider.hasOwnProperty("createVariants")).toBe(true)

      const style = `color: blue;`
      const variant = themeProps.slider.createVariants({
        myVariant: style
      })
      expect(variant.hasOwnProperty(themeProps.slider.name)).toBe(true)
      expect(variant[themeProps.slider.name].myVariant).toEqual(style)
    })
    it("rail", () => {
      expect(themeProps.rail).not.toBeNull()
      expect(themeProps.rail.hasOwnProperty("createVariants")).toBe(true)

      const style = `color: blue;`
      const variant = themeProps.rail.createVariants({
        myVariant: style
      })
      expect(variant.hasOwnProperty(themeProps.rail.name)).toBe(true)
      expect(variant[themeProps.rail.name].myVariant).toEqual(style)
    })
    it("tracks", () => {
      expect(themeProps.tracks).not.toBeNull()
      expect(themeProps.tracks.hasOwnProperty("createVariants")).toBe(true)

      const style = `color: blue;`
      const variant = themeProps.tracks.createVariants({
        myVariant: style
      })
      expect(variant.hasOwnProperty(themeProps.tracks.name)).toBe(true)
      expect(variant[themeProps.tracks.name].myVariant).toEqual(style)
    })
    it("handle", () => {
      expect(themeProps.handle).not.toBeNull()
      expect(themeProps.handle.hasOwnProperty("createVariants")).toBe(true)

      const style = `color: blue;`
      const variant = themeProps.handle.createVariants({
        myVariant: style
      })
      expect(variant.hasOwnProperty(themeProps.handle.name)).toBe(true)
      expect(variant[themeProps.handle.name].myVariant).toEqual(style)
    })
  })
})
