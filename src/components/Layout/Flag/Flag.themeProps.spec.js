import themeProps from "./Flag.themeProps"
import { theme as instance } from "../../../theming"
import Flag from "./Flag"

describe("Flag", () => {
  describe("Theme props", () => {
    it("object", () => {
      expect(themeProps.object).not.toBeNull()
      expect(Flag.hasOwnProperty("createVariants")).toBe(true)

      const style = `color: blue;`
      Flag.createVariants({
        object: {
          myVariant: style
        }
      })
      expect(instance.hasOwnProperty(themeProps.object.name)).toBe(true)
      expect(instance[themeProps.object.name].myVariant).toEqual(style)
    })
  })
})
