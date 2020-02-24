import themeProps from "./FullScreenLoader.themeProps"

describe("FullScreenLoader", () => {
  describe("Theme props", () => {
    it("mainContainer", () => {
      expect(themeProps.mainContainer).not.toBeNull()
      expect(themeProps.mainContainer.hasOwnProperty("createVariants")).toBe(
        true
      )

      const style = `color: blue;`
      const variant = themeProps.mainContainer.createVariants({
        myVariant: style
      })
      expect(variant.hasOwnProperty(themeProps.mainContainer.name)).toBe(true)
      expect(variant[themeProps.mainContainer.name].myVariant).toEqual(style)
    })
    it("innerContainer", () => {
      expect(themeProps.innerContainer).not.toBeNull()
      expect(themeProps.innerContainer.hasOwnProperty("createVariants")).toBe(
        true
      )

      const style = `color: blue;`
      const variant = themeProps.innerContainer.createVariants({
        myVariant: style
      })
      expect(variant.hasOwnProperty(themeProps.innerContainer.name)).toBe(true)
      expect(variant[themeProps.innerContainer.name].myVariant).toEqual(style)
    })
    it("messagesContainer", () => {
      expect(themeProps.messagesContainer).not.toBeNull()
      expect(
        themeProps.messagesContainer.hasOwnProperty("createVariants")
      ).toBe(true)

      const style = `color: blue;`
      const variant = themeProps.messagesContainer.createVariants({
        myVariant: style
      })
      expect(variant.hasOwnProperty(themeProps.messagesContainer.name)).toBe(
        true
      )
      expect(variant[themeProps.messagesContainer.name].myVariant).toEqual(
        style
      )
    })
    it("message", () => {
      expect(themeProps.message).not.toBeNull()
      expect(themeProps.message.hasOwnProperty("createVariants")).toBe(true)

      const style = `color: blue;`
      const variant = themeProps.message.createVariants({
        myVariant: style
      })
      expect(variant.hasOwnProperty(themeProps.message.name)).toBe(true)
      expect(variant[themeProps.message.name].myVariant).toEqual(style)
    })
    it("previousMessage", () => {
      expect(themeProps.previousMessage).not.toBeNull()
      expect(themeProps.previousMessage.hasOwnProperty("createVariants")).toBe(
        true
      )

      const style = `color: blue;`
      const variant = themeProps.previousMessage.createVariants({
        myVariant: style
      })
      expect(variant.hasOwnProperty(themeProps.previousMessage.name)).toBe(true)
      expect(variant[themeProps.previousMessage.name].myVariant).toEqual(style)
    })
    it("currentMessage", () => {
      expect(themeProps.currentMessage).not.toBeNull()
      expect(themeProps.currentMessage.hasOwnProperty("createVariants")).toBe(
        true
      )

      const style = `color: blue;`
      const variant = themeProps.currentMessage.createVariants({
        myVariant: style
      })
      expect(variant.hasOwnProperty(themeProps.currentMessage.name)).toBe(true)
      expect(variant[themeProps.currentMessage.name].myVariant).toEqual(style)
    })
  })
})
