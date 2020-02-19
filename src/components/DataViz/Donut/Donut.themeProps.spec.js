import themeProps from "./Donut.themeProps"

describe("Donut", () => {
  describe("theme Props", () => {
    it("donut", () => {
      expect(themeProps.donut).not.toBeNull()
      expect(themeProps.donut.hasOwnProperty("createVariants")).toBe(true)

      const style = `color: blue;`
      const variant = themeProps.donut.createVariants({
        myVariant: style
      })
      expect(variant.hasOwnProperty(themeProps.donut.name)).toBe(true)
      expect(variant[themeProps.donut.name].myVariant).toEqual(style)
    })
    it("donutBackground", () => {
      expect(themeProps.donutBackground).not.toBeNull()
      expect(themeProps.donutBackground.hasOwnProperty("createVariants")).toBe(
        true
      )

      const style = `color: blue;`
      const variant = themeProps.donutBackground.createVariants({
        myVariant: style
      })
      expect(variant.hasOwnProperty(themeProps.donutBackground.name)).toBe(true)
      expect(variant[themeProps.donutBackground.name].myVariant).toEqual(style)
    })
    it("donutValue", () => {
      expect(themeProps.donutValue).not.toBeNull()
      expect(themeProps.donutValue.hasOwnProperty("createVariants")).toBe(true)

      const style = `color: orange;`
      const variant = themeProps.donutValue.createVariants({
        myVariant: style
      })
      expect(variant.hasOwnProperty(themeProps.donutValue.name)).toBe(true)
      expect(variant[themeProps.donutValue.name].myVariant).toEqual(style)
    })
  })
})
