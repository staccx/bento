import themeProps from "./Modal.themeProps"

describe("Modal", () => {
  describe("Theme props", () => {
    it("dialog", () => {
      expect(themeProps.dialog).not.toBeNull()
      expect(themeProps.dialog.hasOwnProperty("createVariants")).toBe(true)

      const style = `background-color: blue;`
      const variant = themeProps.dialog.createVariants({
        myVariant: style
      })
      expect(variant.hasOwnProperty(themeProps.dialog.name)).toBe(true)
      expect(variant[themeProps.dialog.name].myVariant).toEqual(style)
    })
    it("content", () => {
      expect(themeProps.content).not.toBeNull()
      expect(themeProps.content.hasOwnProperty("createVariants")).toBe(true)

      const style = `background-color: blue;`
      const variant = themeProps.content.createVariants({
        myVariant: style
      })
      expect(variant.hasOwnProperty(themeProps.content.name)).toBe(true)
      expect(variant[themeProps.content.name].myVariant).toEqual(style)
    })
    it("close", () => {
      expect(themeProps.close).not.toBeNull()
      expect(themeProps.close.hasOwnProperty("createVariants")).toBe(true)

      const style = `background-color: blue;`
      const variant = themeProps.close.createVariants({
        myVariant: style
      })
      expect(variant.hasOwnProperty(themeProps.close.name)).toBe(true)
      expect(variant[themeProps.close.name].myVariant).toEqual(style)
    })
    it("backdrop", () => {
      expect(themeProps.backdrop).not.toBeNull()
      expect(themeProps.backdrop.hasOwnProperty("createVariants")).toBe(true)

      const style = `background-color: blue;`
      const variant = themeProps.backdrop.createVariants({
        myVariant: style
      })
      expect(variant.hasOwnProperty(themeProps.backdrop.name)).toBe(true)
      expect(variant[themeProps.backdrop.name].myVariant).toEqual(style)
    })
    it("closeIcon", () => {
      expect(themeProps.closeIcon).not.toBeNull()
      expect(themeProps.closeIcon.hasOwnProperty("createVariants")).toBe(true)

      const style = `background-color: blue;`
      const variant = themeProps.closeIcon.createVariants({
        myVariant: style
      })
      expect(variant.hasOwnProperty(themeProps.closeIcon.name)).toBe(true)
      expect(variant[themeProps.closeIcon.name].myVariant).toEqual(style)
    })
  })
})
