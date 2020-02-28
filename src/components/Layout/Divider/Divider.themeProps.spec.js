import themeProps from "./Divider.themeProps"
import { theme as instance } from "../../../theming"
import Divider from "./Divider"

describe("Divider", () => {
  describe("Theme props", () => {
    it("rule", () => {
      expect(themeProps.rule).not.toBeNull()
      expect(Divider.hasOwnProperty("createVariants")).toBe(true)

      const style = `color: blue;`
      Divider.createVariants({
        rule: {
          myVariant: style
        }
      })
      expect(instance.hasOwnProperty(themeProps.rule.name)).toBe(true)
      expect(instance[themeProps.rule.name].myVariant).toEqual(style)
    })
  })
})
