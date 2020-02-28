import themeProps from "./Paragraph.themeProps"
import { theme as instance } from "../../../theming"
import Paragraph from "./Paragraph"

describe("Paragraph", () => {
  describe("Theme props", () => {
    it("paragraph", () => {
      expect(themeProps.paragraph).not.toBeNull()
      expect(Paragraph.hasOwnProperty("createVariants")).toBe(true)

      const style = `color: blue;`
      Paragraph.createVariants({
        paragraph: {
          myVariant: style
        }
      })
      expect(instance.hasOwnProperty(themeProps.paragraph.name)).toBe(true)
      expect(instance[themeProps.paragraph.name].myVariant).toEqual(style)
    })
  })
})
