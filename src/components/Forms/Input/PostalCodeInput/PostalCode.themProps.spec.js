import themeProps from "./PostalCode.themeProps"
import { theme as instance } from "../../../../theming"
import PostalCodeInput from "./PostalCodeInput"

describe("PostalCodeInput", () => {
  describe("Theme props", () => {
    it("wrapper", () => {
      expect(themeProps.wrapper).not.toBeNull()
      expect(PostalCodeInput.hasOwnProperty("createVariants")).toBe(true)

      const style = `background-color: blue;`
      PostalCodeInput.createVariants({
        wrapper: {
          myVariant: style
        }
      })
      expect(instance.hasOwnProperty(themeProps.wrapper.name)).toBe(true)
      expect(instance[themeProps.wrapper.name].myVariant).toEqual(style)
    })
    it("location", () => {
      expect(themeProps.location).not.toBeNull()
      expect(PostalCodeInput.hasOwnProperty("createVariants")).toBe(true)

      const style = `background-color: blue;`
      PostalCodeInput.createVariants({
        location: {
          myVariant: style
        }
      })
      expect(instance.hasOwnProperty(themeProps.location.name)).toBe(true)
      expect(instance[themeProps.location.name].myVariant).toEqual(style)
    })
    it("input", () => {
      expect(themeProps.input).not.toBeNull()
      expect(PostalCodeInput.hasOwnProperty("createVariants")).toBe(true)

      const style = `background-color: blue;`
      PostalCodeInput.createVariants({
        input: {
          myVariant: style
        }
      })
      expect(instance.hasOwnProperty(themeProps.input.name)).toBe(true)
      expect(instance[themeProps.input.name].myVariant).toEqual(style)
    })
  })
})
