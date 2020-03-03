import themeProps from "./Skeleton.Pulse.themeProps"
import { theme as instance } from "../../theming"
import SkeletonPulse from "./Skeleton.Pulse"

describe("Pulse", () => {
  describe("Theme props", () => {
    it("pulse", () => {
      expect(themeProps.pulse).not.toBeNull()
      expect(SkeletonPulse.hasOwnProperty("createVariants")).toBe(true)

      const style = `color: blue;`
      SkeletonPulse.createVariants({
        pulse: {
          myVariant: style
        }
      })
      expect(instance.hasOwnProperty(themeProps.pulse.name)).toBe(true)
      expect(instance[themeProps.pulse.name].myVariant).toEqual(style)
    })
  })
})
