import themeProps from "./Box.themeProps"
import { theme as instance } from "../../../theming"
import Box from "./Box"

describe("Box", () => {
  describe("Theme props", () => {
    it("box", () => {
      expect(themeProps.box).not.toBeNull()
      expect(Box.hasOwnProperty("createVariants")).toBe(true)

      const style = `background-color: blue;`
      Box.createVariants({
        box: {
          myVariant: style
        }
      })
      expect(instance.hasOwnProperty(themeProps.box.name)).toBe(true)
      expect(instance[themeProps.box.name].myVariant).toEqual(style)
    })
  })
})
