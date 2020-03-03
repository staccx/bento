import themeProps from "./Skeleton.Circle.themeProps"
import { theme as instance } from "../../theming"
import SkeletonCircle from "./Skeleton.Circle"

describe("Circle", () => {
  describe("Theme props", () => {
    it("circle", () => {
      expect(themeProps.circle).not.toBeNull()
      expect(SkeletonCircle.hasOwnProperty("createVariants")).toBe(true)

      const style = `color: blue;`
      SkeletonCircle.createVariants({
        circle: {
          myVariant: style
        }
      })
      expect(instance.hasOwnProperty(themeProps.circle.name)).toBe(true)
      expect(instance[themeProps.circle.name].myVariant).toEqual(style)
    })
  })
})
