import themeProps from "./RadioButton.themeProps"
import { theme as instance } from "../../../theming"
import RadioButton from "./RadioButton"

describe("RadioButton", () => {
  describe("Theme props", () => {
    it("radio", () => {
      expect(themeProps.radio).not.toBeNull()
      expect(RadioButton.hasOwnProperty("createVariants")).toBe(true)

      const style = `background-color: blue;`
      RadioButton.createVariants({
        radio: {
          myVariant: style
        }
      })
      expect(instance.hasOwnProperty(themeProps.radio.name)).toBe(true)
      expect(instance[themeProps.radio.name].myVariant).toEqual(style)
    })
    it("label", () => {
      expect(themeProps.label).not.toBeNull()
      expect(RadioButton.hasOwnProperty("createVariants")).toBe(true)

      const style = `background-color: blue;`
      RadioButton.createVariants({
        label: {
          myVariant: style
        }
      })
      expect(instance.hasOwnProperty(themeProps.label.name)).toBe(true)
      expect(instance[themeProps.label.name].myVariant).toEqual(style)
    })
    it("wrapper", () => {
      expect(themeProps.wrapper).not.toBeNull()
      expect(RadioButton.hasOwnProperty("createVariants")).toBe(true)

      const style = `background-color: blue;`
      RadioButton.createVariants({
        wrapper: {
          myVariant: style
        }
      })
      expect(instance.hasOwnProperty(themeProps.wrapper.name)).toBe(true)
      expect(instance[themeProps.wrapper.name].myVariant).toEqual(style)
    })
  })
})
