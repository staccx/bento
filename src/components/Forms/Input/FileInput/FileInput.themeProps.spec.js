import themeProps from "./FileInput.themeProps"
import { theme as instance } from "../../../../theming"
import FileInput from "./FileInput"

describe("FileInput", () => {
  describe("Theme props", () => {
    it("wrapper", () => {
      expect(themeProps.wrapper).not.toBeNull()
      expect(FileInput.hasOwnProperty("createVariants")).toBe(true)

      const style = `background-color: blue;`
      FileInput.createVariants({
        wrapper: {
          myVariant: style
        }
      })
      expect(instance.hasOwnProperty(themeProps.wrapper.name)).toBe(true)
      expect(instance[themeProps.wrapper.name].myVariant).toEqual(style)
    })
    it("input", () => {
      expect(themeProps.input).not.toBeNull()
      expect(FileInput.hasOwnProperty("createVariants")).toBe(true)

      const style = `background-color: blue;`
      FileInput.createVariants({
        input: {
          myVariant: style
        }
      })
      expect(instance.hasOwnProperty(themeProps.input.name)).toBe(true)
      expect(instance[themeProps.input.name].myVariant).toEqual(style)
    })
    it("label", () => {
      expect(themeProps.label).not.toBeNull()
      expect(FileInput.hasOwnProperty("createVariants")).toBe(true)

      const style = `color: blue;`
      FileInput.createVariants({
        label: {
          myVariant: style
        }
      })
      expect(instance.hasOwnProperty(themeProps.label.name)).toBe(true)
      expect(instance[themeProps.label.name].myVariant).toEqual(style)
    })
    it("icon", () => {
      expect(themeProps.icon).not.toBeNull()
      expect(FileInput.hasOwnProperty("createVariants")).toBe(true)

      const style = `color: blue;`
      FileInput.createVariants({
        icon: {
          myVariant: style
        }
      })
      expect(instance.hasOwnProperty(themeProps.icon.name)).toBe(true)
      expect(instance[themeProps.icon.name].myVariant).toEqual(style)
    })
    it("iconComponent", () => {
      expect(themeProps.iconComponent).not.toBeNull()
      expect(FileInput.hasOwnProperty("createVariants")).toBe(true)

      const style = `color: blue;`
      FileInput.createVariants({
        iconComponent: {
          myVariant: style
        }
      })
      expect(instance.hasOwnProperty(themeProps.iconComponent.name)).toBe(true)
      expect(instance[themeProps.iconComponent.name].myVariant).toEqual(style)
    })
  })
})
