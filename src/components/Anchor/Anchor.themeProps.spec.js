import Anchor from "./Anchor"
import { theme as instance } from "../../theming"
import themeProps from "./anchor.themeProps"

describe("Anchor", () => {
  describe("Theme props", () => {
    it("Anchor", () => {
      expect(themeProps.anchor).not.toBeNull()
      expect(Anchor.hasOwnProperty("createVariants")).toBe(true)
      const style = `color: orange;`
      Anchor.createVariants({
        anchor: {
          myVariant: style
        }
      })
      expect(instance.hasOwnProperty(themeProps.anchor.name)).toBe(true)
      expect(instance[themeProps.anchor.name].myVariant).toEqual(style)
    })
  })
})
