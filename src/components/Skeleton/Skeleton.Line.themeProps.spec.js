import themeProps from "./Skeleton.Line.themeProps"
import { theme as instance } from "../../theming"
import SkeletonLine from "./Skeleton.Line"

describe("Line", () => {
  describe("Theme props", () => {
    it("line", () => {
      expect(themeProps.Line).not.toBeNull()
      expect(SkeletonLine.hasOwnProperty("createVariants")).toBe(true)

      const style = `color: blue;`
      SkeletonLine.createVariants({
        line: {
          myVariant: style
        }
      })
      expect(instance.hasOwnProperty(themeProps.line.name)).toBe(true)
      expect(instance[themeProps.line.name].myVariant).toEqual(style)
    })
  })
})
