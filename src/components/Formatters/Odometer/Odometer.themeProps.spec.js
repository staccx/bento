import themeProps from "./Odometer.themeProps"

describe("Odometer", () => {
  describe("Theme props", () => {
    it("animating", () => {
      expect(themeProps.animating).not.toBeNull()
      expect(themeProps.animating.hasOwnProperty("createVariants")).toBe(true)

      const style = `background-color: blue;`
      const variant = themeProps.animating.createVariants({
        myVariant: style
      })
      expect(variant.hasOwnProperty(themeProps.animating.name)).toBe(true)
      expect(variant[themeProps.animating.name].myVariant).toEqual(style)
    })
    it("static", () => {
      expect(themeProps.static).not.toBeNull()
      expect(themeProps.static.hasOwnProperty("createVariants")).toBe(true)

      const style = `background-color: blue;`
      const variant = themeProps.static.createVariants({
        myVariant: style
      })
      expect(variant.hasOwnProperty(themeProps.static.name)).toBe(true)
      expect(variant[themeProps.static.name].myVariant).toEqual(style)
    })
    it("container", () => {
      expect(themeProps.container).not.toBeNull()
      expect(themeProps.container.hasOwnProperty("createVariants")).toBe(true)

      const style = `background-color: blue;`
      const variant = themeProps.container.createVariants({
        myVariant: style
      })
      expect(variant.hasOwnProperty(themeProps.container.name)).toBe(true)
      expect(variant[themeProps.container.name].myVariant).toEqual(style)
    })
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
  })
})
