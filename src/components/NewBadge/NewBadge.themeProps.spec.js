import themeProps from "./NewBadge.themeProps"
import { theme as instance } from "../../theming"
import NewBadge from "./NewBadge"

describe("NewBadge", () => {
  describe("Theme props", () => {
    it("wrapper", () => {
      expect(themeProps.wrapper).not.toBeNull()
      expect(NewBadge.hasOwnProperty("createVariants")).toBe(true)

      const style = `background-color: blue;`
      NewBadge.createVariants({
        wrapper: {
          myVariant: style
        }
      })
      expect(instance.hasOwnProperty(themeProps.wrapper.name)).toBe(true)
      expect(instance[themeProps.wrapper.name].myVariant).toEqual(style)
    })
    it("badge", () => {
      expect(themeProps.badge).not.toBeNull()
      expect(NewBadge.hasOwnProperty("createVariants")).toBe(true)

      const style = `background-color: blue;`
      NewBadge.createVariants({
        badge: {
          myVariant: style
        }
      })
      expect(instance.hasOwnProperty(themeProps.badge.name)).toBe(true)
      expect(instance[themeProps.badge.name].myVariant).toEqual(style)
    })
  })
})
