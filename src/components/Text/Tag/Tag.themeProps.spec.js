import themeProps from "./Tag.themeProps"
import { theme as instance } from "../../../theming"
import Tag from "./Tag"

describe("Tag", () => {
  describe("Theme props", () => {
    it("tag", () => {
      expect(themeProps.tag).not.toBeNull()
      expect(Tag.hasOwnProperty("createVariants")).toBe(true)

      const style = `color: blue;`
      Tag.createVariants({
        tag: {
          myVariant: style
        }
      })
      expect(instance.hasOwnProperty(themeProps.tag.name)).toBe(true)
      expect(instance[themeProps.tag.name].myVariant).toEqual(style)
    })
  })
})
