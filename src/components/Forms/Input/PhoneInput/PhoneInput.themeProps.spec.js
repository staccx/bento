import themeProps from "./PhoneInput.themeProps"
import { theme as instance } from "../../../../theming"
import PhoneInput from "./PhoneInput"

describe("PhoneInput", () => {
  describe("Theme props", () => {
    it("wrapper", () => {
      expect(themeProps.wrapper).not.toBeNull()
      expect(PhoneInput.hasOwnProperty("createVariants")).toBe(true)

      const style = `background-color: blue;`
      PhoneInput.createVariants({
        wrapper: {
          myVariant: style
        }
      })
      expect(instance.hasOwnProperty(themeProps.wrapper.name)).toBe(true)
      expect(instance[themeProps.wrapper.name].myVariant).toEqual(style)
    })
    it("countryCode", () => {
      expect(themeProps.countryCode).not.toBeNull()
      expect(PhoneInput.hasOwnProperty("createVariants")).toBe(true)

      const style = `background-color: blue;`
      PhoneInput.createVariants({
        countryCode: {
          myVariant: style
        }
      })
      expect(instance.hasOwnProperty(themeProps.countryCode.name)).toBe(true)
      expect(instance[themeProps.countryCode.name].myVariant).toEqual(style)
    })
    it("input", () => {
      expect(themeProps.input).not.toBeNull()
      expect(PhoneInput.hasOwnProperty("createVariants")).toBe(true)

      const style = `background-color: blue;`
      PhoneInput.createVariants({
        input: {
          myVariant: style
        }
      })
      expect(instance.hasOwnProperty(themeProps.input.name)).toBe(true)
      expect(instance[themeProps.input.name].myVariant).toEqual(style)
    })
  })
})
