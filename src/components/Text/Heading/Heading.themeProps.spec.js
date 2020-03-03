import themeProps from "./Headling.themeProps"
import { theme as instance } from "../../../theming"
import Heading from "./Heading"

describe("Heading", () => {
  describe("Theme props", () => {
    it("heading", () => {
      expect(themeProps.heading).not.toBeNull()
      expect(Heading.hasOwnProperty("createVariants")).toBe(true)

      const style = `color: blue;`
      Heading.createVariants({
        heading: {
          myVariant: style
        }
      })
      expect(instance.hasOwnProperty(themeProps.heading.name)).toBe(true)
      expect(instance[themeProps.heading.name].myVariant).toEqual(style)
    })
  })
})
