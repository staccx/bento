import themeProps from "./CheckBox.themeProps"

describe("CheckBox", () => {
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
    it("icon", () => {
      expect(themeProps.icon).not.toBeNull()
      expect(themeProps.icon.hasOwnProperty("createVariants")).toBe(true)

      const style = `color: blue`
      const variant = themeProps.icon.createVariants({
        myVariant: style
      })
      expect(variant.hasOwnProperty(themeProps.icon.name)).toBe(true)
      expect(variant[themeProps.icon.name].myVariant).toEqual(style)
    })
    it("iconComponent", () => {
      expect(themeProps.iconComponent).not.toBeNull()
      expect(themeProps.iconComponent.hasOwnProperty("createVariants")).toBe(
        true
      )

      const style = `color: blue`
      const variant = themeProps.iconComponent.createVariants({
        myVariant: style
      })
      expect(variant.hasOwnProperty(themeProps.iconComponent.name)).toBe(true)
      expect(variant[themeProps.iconComponent.name].myVariant).toEqual(style)
    })
    it("label", () => {
      expect(themeProps.label).not.toBeNull()
      expect(themeProps.label.hasOwnProperty("createVariants")).toBe(true)

      const style = `color: blue`
      const variant = themeProps.label.createVariants({
        myVariant: style
      })
      expect(variant.hasOwnProperty(themeProps.label.name)).toBe(true)
      expect(variant[themeProps.label.name].myVariant).toEqual(style)
    })
    it("labelBefore", () => {
      expect(themeProps.labelBefore).not.toBeNull()
      expect(themeProps.labelBefore.hasOwnProperty("createVariants")).toBe(true)

      const style = `color: blue`
      const variant = themeProps.labelBefore.createVariants({
        myVariant: style
      })
      expect(variant.hasOwnProperty(themeProps.labelBefore.name)).toBe(true)
      expect(variant[themeProps.labelBefore.name].myVariant).toEqual(style)
    })
    it("labelChecked", () => {
      expect(themeProps.labelChecked).not.toBeNull()
      expect(themeProps.labelChecked.hasOwnProperty("createVariants")).toBe(
        true
      )

      const style = `color: blue`
      const variant = themeProps.labelChecked.createVariants({
        myVariant: style
      })
      expect(variant.hasOwnProperty(themeProps.labelChecked.name)).toBe(true)
      expect(variant[themeProps.labelChecked.name].myVariant).toEqual(style)
    })
    it("labelBeforeChecked", () => {
      expect(themeProps.labelBeforeChecked).not.toBeNull()
      expect(
        themeProps.labelBeforeChecked.hasOwnProperty("createVariants")
      ).toBe(true)

      const style = `color: blue`
      const variant = themeProps.labelBeforeChecked.createVariants({
        myVariant: style
      })
      expect(variant.hasOwnProperty(themeProps.labelBeforeChecked.name)).toBe(
        true
      )
      expect(variant[themeProps.labelBeforeChecked.name].myVariant).toEqual(
        style
      )
    })
    it("input", () => {
      expect(themeProps.input).not.toBeNull()
      expect(themeProps.input.hasOwnProperty("createVariants")).toBe(true)

      const style = `color: blue`
      const variant = themeProps.input.createVariants({
        myVariant: style
      })
      expect(variant.hasOwnProperty(themeProps.input.name)).toBe(true)
      expect(variant[themeProps.input.name].myVariant).toEqual(style)
    })
  })
})
