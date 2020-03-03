import themeProps from "./Modal.themeProps"
import { theme as instance } from "../../theming"
import Modal from "./Modal"

describe("Modal", () => {
  describe("Theme props", () => {
    it("dialog", () => {
      expect(themeProps.dialog).not.toBeNull()
      expect(Modal.hasOwnProperty("createVariants")).toBe(true)

      const style = `background-color: blue;`
      Modal.createVariants({
        dialog: {
          myVariant: style
        }
      })
      expect(instance.hasOwnProperty(themeProps.dialog.name)).toBe(true)
      expect(instance[themeProps.dialog.name].myVariant).toEqual(style)
    })
    it("content", () => {
      expect(themeProps.content).not.toBeNull()
      expect(Modal.hasOwnProperty("createVariants")).toBe(true)

      const style = `background-color: blue;`
      Modal.createVariants({
        content: {
          myVariant: style
        }
      })
      expect(instance.hasOwnProperty(themeProps.content.name)).toBe(true)
      expect(instance[themeProps.content.name].myVariant).toEqual(style)
    })
    it("close", () => {
      expect(themeProps.close).not.toBeNull()
      expect(Modal.hasOwnProperty("createVariants")).toBe(true)

      const style = `background-color: blue;`
      Modal.createVariants({
        close: {
          myVariant: style
        }
      })
      expect(instance.hasOwnProperty(themeProps.close.name)).toBe(true)
      expect(instance[themeProps.close.name].myVariant).toEqual(style)
    })
    it("backdrop", () => {
      expect(themeProps.backdrop).not.toBeNull()
      expect(Modal.hasOwnProperty("createVariants")).toBe(true)

      const style = `background-color: blue;`
      Modal.createVariants({
        backdrop: {
          myVariant: style
        }
      })
      expect(instance.hasOwnProperty(themeProps.backdrop.name)).toBe(true)
      expect(instance[themeProps.backdrop.name].myVariant).toEqual(style)
    })
    it("closeIcon", () => {
      expect(themeProps.closeIcon).not.toBeNull()
      expect(Modal.hasOwnProperty("createVariants")).toBe(true)

      const style = `background-color: blue;`
      Modal.createVariants({
        closeIcon: {
          myVariant: style
        }
      })
      expect(instance.hasOwnProperty(themeProps.closeIcon.name)).toBe(true)
      expect(instance[themeProps.closeIcon.name].myVariant).toEqual(style)
    })
  })
})
