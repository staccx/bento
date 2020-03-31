import themeProps from "./ProgressBar.themeProps"
import { theme as instance } from "../../../theming"
import ProgressBar from "./ProgressBar"

describe("ProgressBar", () => {
  describe("theme Props", () => {
    it("background", () => {
      expect(themeProps.background).not.toBeNull()
      expect(ProgressBar.hasOwnProperty("createVariants")).toBe(true)

      const style = `color: blue;`
      ProgressBar.createVariants({
        background: {
          myVariant: style
        }
      })
      expect(instance.hasOwnProperty(themeProps.background.name)).toBe(true)
      expect(instance[themeProps.background.name].myVariant).toEqual(style)
    })
    it("bar", () => {
      expect(themeProps.bar).not.toBeNull()
      expect(ProgressBar.hasOwnProperty("createVariants")).toBe(true)

      const style = `color: blue;`
      ProgressBar.createVariants({
        bar: {
          myVariant: style
        }
      })
      expect(instance.hasOwnProperty(themeProps.bar.name)).toBe(true)
      expect(instance[themeProps.bar.name].myVariant).toEqual(style)
    })
    it("progress", () => {
      expect(themeProps.progress).not.toBeNull()
      expect(ProgressBar.hasOwnProperty("createVariants")).toBe(true)

      const style = `color: orange;`
      ProgressBar.createVariants({
        progress: {
          myVariant: style
        }
      })
      expect(instance.hasOwnProperty(themeProps.progress.name)).toBe(true)
      expect(instance[themeProps.progress.name].myVariant).toEqual(style)
    })
  })
})
