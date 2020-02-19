import themeProps from "./ProgressBar.themeProps"

describe("ProgressBar", () => {
  describe("theme Props", () => {
    it("background", () => {
      expect(themeProps.background).not.toBeNull()
      expect(themeProps.background.hasOwnProperty("createVariants")).toBe(true)

      const style = `color: blue;`
      const variant = themeProps.background.createVariants({
        myVariant: style
      })
      expect(variant.hasOwnProperty(themeProps.background.name)).toBe(true)
      expect(variant[themeProps.background.name].myVariant).toEqual(style)
    })
    it("bar", () => {
      expect(themeProps.bar).not.toBeNull()
      expect(themeProps.bar.hasOwnProperty("createVariants")).toBe(true)

      const style = `color: blue;`
      const variant = themeProps.bar.createVariants({
        myVariant: style
      })
      expect(variant.hasOwnProperty(themeProps.bar.name)).toBe(true)
      expect(variant[themeProps.bar.name].myVariant).toEqual(style)
    })
    it("progress", () => {
      expect(themeProps.progress).not.toBeNull()
      expect(themeProps.progress.hasOwnProperty("createVariants")).toBe(true)

      const style = `color: orange;`
      const variant = themeProps.progress.createVariants({
        myVariant: style
      })
      expect(variant.hasOwnProperty(themeProps.progress.name)).toBe(true)
      expect(variant[themeProps.progress.name].myVariant).toEqual(style)
    })
  })
})
