import themeProps from "./Toggle.themeProps"
import { theme as instance } from "../../../theming"
import Toggle from "./Toggle"

describe("Toggle", () => {
  describe("Theme props", () => {
    it("wrapper", () => {
      expect(themeProps.wrapper).not.toBeNull()
      expect(Toggle.hasOwnProperty("createVariants")).toBe(true)

      const style = `color: blue;`
      Toggle.createVariants({
        wrapper: {
          myVariant: style
        }
      })
      expect(instance.hasOwnProperty(themeProps.wrapper.name)).toBe(true)
      expect(instance[themeProps.wrapper.name].myVariant).toEqual(style)
    })
    it("toggleElement", () => {
      expect(themeProps.toggleElement).not.toBeNull()
      expect(Toggle.hasOwnProperty("createVariants")).toBe(true)

      const style = `color: blue;`
      Toggle.createVariants({
        toggleElement: {
          myVariant: style
        }
      })
      expect(instance.hasOwnProperty(themeProps.toggleElement.name)).toBe(true)
      expect(instance[themeProps.toggleElement.name].myVariant).toEqual(style)
    })
    it("input", () => {
      expect(themeProps.input).not.toBeNull()
      expect(Toggle.hasOwnProperty("createVariants")).toBe(true)

      const style = `color: blue;`
      Toggle.createVariants({
        input: {
          myVariant: style
        }
      })
      expect(instance.hasOwnProperty(themeProps.input.name)).toBe(true)
      expect(instance[themeProps.input.name].myVariant).toEqual(style)
    })
    it("checked", () => {
      expect(themeProps.checked).not.toBeNull()
      expect(Toggle.hasOwnProperty("createVariants")).toBe(true)

      const style = `color: blue;`
      Toggle.createVariants({
        checked: {
          myVariant: style
        }
      })
      expect(instance.hasOwnProperty(themeProps.checked.name)).toBe(true)
      expect(instance[themeProps.checked.name].myVariant).toEqual(style)
    })
  })
})
