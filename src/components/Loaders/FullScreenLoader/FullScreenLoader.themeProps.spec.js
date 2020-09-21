import themeProps from "./FullScreenLoader.themeProps"
import messageLoaderThemeProps from "../MessageLoader/MessageLoader.themeProps"
import { theme as instance } from "../../../theming"
import FullScreenLoader from "./FullScreenLoader"

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
      expect(FullScreenLoader.hasOwnProperty("createVariants")).toBe(true)

      const style = `color: blue;`
      FullScreenLoader.createVariants({
        mainContainer: {
          myVariant: style
        }
      })
      console.log(instance)
      expect(instance.hasOwnProperty(themeProps.mainContainer.name)).toBe(true)
      expect(instance[themeProps.mainContainer.name].myVariant).toEqual(style)
    })
    it("innerContainer", () => {
      expect(messageLoaderThemeProps.innerContainer).not.toBeNull()
      expect(FullScreenLoader.hasOwnProperty("createVariants")).toBe(true)

      const style = `color: blue;`
      FullScreenLoader.createVariants({
        innerContainer: {
          myVariant: style
        }
      })
      expect(
        instance.hasOwnProperty(messageLoaderThemeProps.container.name)
      ).toBe(true)
      expect(
        instance[messageLoaderThemeProps.container.name].myVariant
      ).toEqual(style)
    })
    it("messagesContainer", () => {
      expect(themeProps.messagesContainer).not.toBeNull()
      expect(FullScreenLoader.hasOwnProperty("createVariants")).toBe(true)

      const style = `color: blue;`
      FullScreenLoader.createVariants({
        messagesContainer: {
          myVariant: style
        }
      })
      expect(
        instance.hasOwnProperty(messageLoaderThemeProps.messagesContainer.name)
      ).toBe(true)
      expect(
        instance[messageLoaderThemeProps.messagesContainer.name].myVariant
      ).toEqual(style)
    })
    it("message", () => {
      expect(themeProps.message).not.toBeNull()
      expect(FullScreenLoader.hasOwnProperty("createVariants")).toBe(true)

      const style = `color: blue;`
      FullScreenLoader.createVariants({
        message: {
          myVariant: style
        }
      })
      expect(
        instance.hasOwnProperty(messageLoaderThemeProps.message.name)
      ).toBe(true)
      expect(instance[messageLoaderThemeProps.message.name].myVariant).toEqual(
        style
      )
    })
    it("previousMessage", () => {
      expect(themeProps.previousMessage).not.toBeNull()
      expect(FullScreenLoader.hasOwnProperty("createVariants")).toBe(true)

      const style = `color: blue;`
      FullScreenLoader.createVariants({
        previousMessage: {
          myVariant: style
        }
      })
      expect(
        instance.hasOwnProperty(messageLoaderThemeProps.previousMessage.name)
      ).toBe(true)
      expect(
        instance[messageLoaderThemeProps.previousMessage.name].myVariant
      ).toEqual(style)
    })
    it("currentMessage", () => {
      expect(themeProps.currentMessage).not.toBeNull()
      expect(FullScreenLoader.hasOwnProperty("createVariants")).toBe(true)

      const style = `color: blue;`
      FullScreenLoader.createVariants({
        currentMessage: {
          myVariant: style
        }
      })
      expect(
        instance.hasOwnProperty(messageLoaderThemeProps.currentMessage.name)
      ).toBe(true)
      expect(
        instance[messageLoaderThemeProps.currentMessage.name].myVariant
      ).toEqual(style)
    })
  })
})
