import themeProps from "./Input.themeProps"
import { theme as instance } from "../../../theming"
import Input from "./Input"

describe("Input", () => {
  describe("Theme props", () => {
    it("iconComponent", () => {
      expect(themeProps.iconComponent).not.toBeNull()
      expect(Input.hasOwnProperty("createVariants")).toBe(true)

      const style = `background-color: blue;`
      Input.createVariants({
        iconComponent: {
          myVariant: style
        }
      })
      expect(instance.hasOwnProperty(themeProps.iconComponent.name)).toBe(true)
      expect(instance[themeProps.iconComponent.name].myVariant).toEqual(style)
    })
    it("icon", () => {
      expect(themeProps.icon).not.toBeNull()
      expect(Input.hasOwnProperty("createVariants")).toBe(true)

      const style = `color: blue;`
      Input.createVariants({
        icon: {
          myVariant: style
        }
      })
      expect(instance.hasOwnProperty(themeProps.icon.name)).toBe(true)
      expect(instance[themeProps.icon.name].myVariant).toEqual(style)
    })
    it("input", () => {
      expect(themeProps.input).not.toBeNull()
      expect(Input.hasOwnProperty("createVariants")).toBe(true)

      const style = `color: blue;`
      Input.createVariants({
        input: {
          myVariant: style
        }
      })
      expect(instance.hasOwnProperty(themeProps.input.name)).toBe(true)
      expect(instance[themeProps.input.name].myVariant).toEqual(style)
    })
    it("wrapper", () => {
      expect(themeProps.wrapper).not.toBeNull()
      expect(Input.hasOwnProperty("createVariants")).toBe(true)

      const style = `color: blue;`
      Input.createVariants({
        wrapper: {
          myVariant: style
        }
      })
      expect(instance.hasOwnProperty(themeProps.wrapper.name)).toBe(true)
      expect(instance[themeProps.wrapper.name].myVariant).toEqual(style)
    })
    it("label", () => {
      expect(themeProps.label).not.toBeNull()
      expect(Input.hasOwnProperty("createVariants")).toBe(true)

      const style = `color: blue;`
      Input.createVariants({
        label: {
          myVariant: style
        }
      })
      expect(instance.hasOwnProperty(themeProps.label.name)).toBe(true)
      expect(instance[themeProps.label.name].myVariant).toEqual(style)
    })
    it("helpText", () => {
      expect(themeProps.helpText).not.toBeNull()
      expect(Input.hasOwnProperty("createVariants")).toBe(true)

      const style = `color: blue;`
      Input.createVariants({
        helpText: {
          myVariant: style
        }
      })
      expect(instance.hasOwnProperty(themeProps.helpText.name)).toBe(true)
      expect(instance[themeProps.helpText.name].myVariant).toEqual(style)
    })
    it("helpButton", () => {
      expect(themeProps.helpButton).not.toBeNull()
      expect(Input.hasOwnProperty("createVariants")).toBe(true)

      const style = `color: blue;`
      Input.createVariants({
        helpButton: {
          myVariant: style
        }
      })
      expect(instance.hasOwnProperty(themeProps.helpButton.name)).toBe(true)
      expect(instance[themeProps.helpButton.name].myVariant).toEqual(style)
    })
  })
})
