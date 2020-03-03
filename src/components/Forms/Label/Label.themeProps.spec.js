import themeProps from "./Label.themeProps"
import { theme as instance } from "../../../theming"
import Label from "./Label"

describe("Label", () => {
  describe("Theme props", () => {
    it("label", () => {
      expect(themeProps.label).not.toBeNull()
      expect(Label.hasOwnProperty("createVariants")).toBe(true)

      const style = `background-color: blue;`
      Label.createVariants({
        label: {
          myVariant: style
        }
      })
      expect(instance.hasOwnProperty(themeProps.label.name)).toBe(true)
      expect(instance[themeProps.label.name].myVariant).toEqual(style)
    })
  })
})
