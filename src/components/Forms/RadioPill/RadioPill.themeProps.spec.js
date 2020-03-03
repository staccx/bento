import themeProps from "./RadioPill.themeProps"
import { theme as instance } from "../../../theming"
import RadioPill from "./RadioPill"

describe("RadioPill", () => {
  describe("Theme props", () => {
    it("container", () => {
      expect(themeProps.container).not.toBeNull()
      expect(RadioPill.hasOwnProperty("createVariants")).toBe(true)

      const style = `background-color: blue;`
      RadioPill.createVariants({
        container: {
          myVariant: style
        }
      })
      expect(instance.hasOwnProperty(themeProps.container.name)).toBe(true)
      expect(instance[themeProps.container.name].myVariant).toEqual(style)
    })
  })
})
