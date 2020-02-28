import themeProps from "./SliderKeyboardInput.themeProps"
import { theme as instance } from "../../../../theming"
import SliderKeyboardInput from "./SliderKeyboardInput"

describe("SliderKeyboardInput", () => {
  describe("Theme props", () => {
    it("wrapper", () => {
      expect(themeProps.wrapper).not.toBeNull()
      expect(SliderKeyboardInput.hasOwnProperty("createVariants")).toBe(true)

      const style = `background-color: blue;`
      SliderKeyboardInput.createVariants({
        wrapper: {
          myVariant: style
        }
      })
      expect(instance.hasOwnProperty(themeProps.wrapper.name)).toBe(true)
      expect(instance[themeProps.wrapper.name].myVariant).toEqual(style)
    })
    it("input", () => {
      expect(themeProps.input).not.toBeNull()
      expect(SliderKeyboardInput.hasOwnProperty("createVariants")).toBe(true)

      const style = `background-color: blue;`
      SliderKeyboardInput.createVariants({
        input: {
          myVariant: style
        }
      })
      expect(instance.hasOwnProperty(themeProps.input.name)).toBe(true)
      expect(instance[themeProps.input.name].myVariant).toEqual(style)
    })
  })
})
