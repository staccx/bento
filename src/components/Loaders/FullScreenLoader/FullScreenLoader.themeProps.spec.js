import themeProps from "./FullScreenLoader.themeProps"
import messageLoaderThemeProps from "../MessageLoader/MessageLoader.themeProps"

describe("FullScreenLoader", () => {
  describe("Theme props", () => {
    it("references", () => {
      expect(themeProps.innerContainer.references).toBe(
        messageLoaderThemeProps.container
      )
      expect(themeProps.messagesContainer.references).toBe(
        messageLoaderThemeProps.messagesContainer
      )

      expect(themeProps.message.references).toBe(
        messageLoaderThemeProps.message
      )

      expect(themeProps.previousMessage.references).toBe(
        messageLoaderThemeProps.previousMessage
      )

      expect(themeProps.currentMessage.references).toBe(
        messageLoaderThemeProps.currentMessage
      )
    })
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
      expect(
        variant.hasOwnProperty(messageLoaderThemeProps.container.name)
      ).toBe(true)
      expect(variant[messageLoaderThemeProps.container.name].myVariant).toEqual(
        style
      )
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
      expect(
        variant.hasOwnProperty(messageLoaderThemeProps.messagesContainer.name)
      ).toBe(true)
      expect(
        variant[messageLoaderThemeProps.messagesContainer.name].myVariant
      ).toEqual(style)
    })
    it("message", () => {
      expect(themeProps.message).not.toBeNull()
      expect(themeProps.message.hasOwnProperty("createVariants")).toBe(true)

      const style = `color: blue;`
      const variant = themeProps.message.createVariants({
        myVariant: style
      })
      expect(variant.hasOwnProperty(messageLoaderThemeProps.message.name)).toBe(
        true
      )
      expect(variant[messageLoaderThemeProps.message.name].myVariant).toEqual(
        style
      )
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
      expect(
        variant.hasOwnProperty(messageLoaderThemeProps.previousMessage.name)
      ).toBe(true)
      expect(
        variant[messageLoaderThemeProps.previousMessage.name].myVariant
      ).toEqual(style)
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
      expect(
        variant.hasOwnProperty(messageLoaderThemeProps.currentMessage.name)
      ).toBe(true)
      expect(
        variant[messageLoaderThemeProps.currentMessage.name].myVariant
      ).toEqual(style)
    })
  })
})
