import themeProps from "./Wrapper.themeProps"
import { theme as instance } from "../../../theming"
import Wrapper from "./Wrapper"

describe("Wrapper", () => {
  describe("Theme props", () => {
    it("wrapper", () => {
      expect(themeProps.wrapper).not.toBeNull()
      expect(Wrapper.hasOwnProperty("createVariants")).toBe(true)

      const style = `background-color: blue;`
      Wrapper.createVariants({
        wrapper: {
          myVariant: style
        }
      })
      expect(instance.hasOwnProperty(themeProps.wrapper.name)).toBe(true)
      expect(instance[themeProps.wrapper.name].myVariant).toEqual(style)
    })
  })
})
