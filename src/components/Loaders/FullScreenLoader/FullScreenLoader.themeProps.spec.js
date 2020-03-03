import themeProps from "./FullScreenLoader.themeProps"
import { theme as instance } from "../../../theming"
import FullScreenLoader from "./FullScreenLoader"

describe("FullScreenLoader", () => {
  describe("Theme props", () => {
    it("mainContainer", () => {
      expect(themeProps.mainContainer).not.toBeNull()
      expect(FullScreenLoader.hasOwnProperty("createVariants")).toBe(true)

      const style = `color: blue;`
      FullScreenLoader.createVariants({
        mainContainer: {
          myVariant: style
        }
      })
      expect(instance.hasOwnProperty(themeProps.mainContainer.name)).toBe(true)
      expect(instance[themeProps.mainContainer.name].myVariant).toEqual(style)
    })
    it("innerContainer", () => {
      expect(themeProps.innerContainer).not.toBeNull()
      expect(FullScreenLoader.hasOwnProperty("createVariants")).toBe(true)

      const style = `color: blue;`
      FullScreenLoader.createVariants({
        innerContainer: {
          myVariant: style
        }
      })
      expect(instance.hasOwnProperty(themeProps.innerContainer.name)).toBe(true)
      expect(instance[themeProps.innerContainer.name].myVariant).toEqual(style)
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
      expect(instance.hasOwnProperty(themeProps.messagesContainer.name)).toBe(
        true
      )
      expect(instance[themeProps.messagesContainer.name].myVariant).toEqual(
        style
      )
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
      expect(instance.hasOwnProperty(themeProps.message.name)).toBe(true)
      expect(instance[themeProps.message.name].myVariant).toEqual(style)
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
      expect(instance.hasOwnProperty(themeProps.previousMessage.name)).toBe(
        true
      )
      expect(instance[themeProps.previousMessage.name].myVariant).toEqual(style)
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
      expect(instance.hasOwnProperty(themeProps.currentMessage.name)).toBe(true)
      expect(instance[themeProps.currentMessage.name].myVariant).toEqual(style)
    })
  })
})
