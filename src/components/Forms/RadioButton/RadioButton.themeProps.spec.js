import themeProps from "./RadioButton.themeProps"

describe("RadioButton", () => {
  describe("Theme props", () => {
    it("radio", () => {
      expect(themeProps.radio).not.toBeNull()
      expect(themeProps.radio.hasOwnProperty("createVariants")).toBe(true)

      const style = `background-color: blue;`
      const variant = themeProps.radio.createVariants({
        myVariant: style
      })
      expect(variant.hasOwnProperty(themeProps.radio.name)).toBe(true)
      expect(variant[themeProps.radio.name].myVariant).toEqual(style)
    })
    it("label", () => {
      expect(themeProps.label).not.toBeNull()
      expect(themeProps.label.hasOwnProperty("createVariants")).toBe(true)

      const style = `background-color: blue;`
      const variant = themeProps.label.createVariants({
        myVariant: style
      })
      expect(variant.hasOwnProperty(themeProps.label.name)).toBe(true)
      expect(variant[themeProps.label.name].myVariant).toEqual(style)
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
