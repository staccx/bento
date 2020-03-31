import themeProps from "./Button.themeProps"
import { theme as instance } from "../../theming"
import Button from "./Button"

describe("Button", () => {
  describe("Theme props", () => {
    it("button", () => {
      expect(themeProps.button).not.toBeNull()
      expect(Button.hasOwnProperty("createVariants")).toBe(true)

      const style = `background-color: blue;`
      Button.createVariants({
        button: {
          myVariant: style
        }
      })
      expect(instance.hasOwnProperty(themeProps.button.name)).toBe(true)
      expect(instance[themeProps.button.name].myVariant).toEqual(style)
    })
  })
})
