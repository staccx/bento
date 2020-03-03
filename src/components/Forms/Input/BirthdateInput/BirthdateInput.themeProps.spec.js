import themeProps from "./BirthdateInput.themeProps"
import { theme as instance } from "../../../../theming"
import BirthdateInput from "./BirthdateInput"

describe("BirthdateInput", () => {
  describe("Theme props", () => {
    it("outer", () => {
      expect(themeProps.outer).not.toBeNull()
      expect(BirthdateInput.hasOwnProperty("createVariants")).toBe(true)

      const style = `background-color: blue;`
      BirthdateInput.createVariants({
        outer: {
          myVariant: style
        }
      })
      expect(instance.hasOwnProperty(themeProps.outer.name)).toBe(true)
      expect(instance[themeProps.outer.name].myVariant).toEqual(style)
    })
    it("container", () => {
      expect(themeProps.container).not.toBeNull()
      expect(BirthdateInput.hasOwnProperty("createVariants")).toBe(true)

      const style = `background-color: blue;`
      BirthdateInput.createVariants({
        container: {
          myVariant: style
        }
      })
      expect(instance.hasOwnProperty(themeProps.container.name)).toBe(true)
      expect(instance[themeProps.container.name].myVariant).toEqual(style)
    })
  })
})
