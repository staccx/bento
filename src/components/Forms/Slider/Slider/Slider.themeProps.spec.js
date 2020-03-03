import themeProps from "./Slider.themeProps"
import { theme as instance } from "../../../../theming"
import Slider from "./Slider"

describe("Slider", () => {
  describe("Theme props", () => {
    it("thumb", () => {
      expect(themeProps.thumb).not.toBeNull()
      expect(Slider.hasOwnProperty("createVariants")).toBe(true)

      const style = `color: blue;`
      Slider.createVariants({
        thumb: {
          myVariant: style
        }
      })
      expect(instance.hasOwnProperty(themeProps.thumb.name)).toBe(true)
      expect(instance[themeProps.thumb.name].myVariant).toEqual(style)
    })
    it("track", () => {
      expect(themeProps.track).not.toBeNull()
      expect(Slider.hasOwnProperty("createVariants")).toBe(true)

      const style = `color: blue;`
      Slider.createVariants({
        track: {
          myVariant: style
        }
      })
      expect(instance.hasOwnProperty(themeProps.track.name)).toBe(true)
      expect(instance[themeProps.track.name].myVariant).toEqual(style)
    })
    it("input", () => {
      expect(themeProps.input).not.toBeNull()
      expect(Slider.hasOwnProperty("createVariants")).toBe(true)

      const style = `color: blue;`
      Slider.createVariants({
        input: {
          myVariant: style
        }
      })
      expect(instance.hasOwnProperty(themeProps.input.name)).toBe(true)
      expect(instance[themeProps.input.name].myVariant).toEqual(style)
    })
  })
})
