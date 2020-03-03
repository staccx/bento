import themeProps from "./Text.themeProps"
import { theme as instance } from "../../../theming"
import Text from "./Text"

describe("Text", () => {
  describe("Theme props", () => {
    it("text", () => {
      expect(themeProps.text).not.toBeNull()
      expect(Text.hasOwnProperty("createVariants")).toBe(true)

      const style = `color: blue;`
      Text.createVariants({
        text: {
          myVariant: style
        }
      })
      expect(instance.hasOwnProperty(themeProps.text.name)).toBe(true)
      expect(instance[themeProps.text.name].myVariant).toEqual(style)
    })
  })
})
