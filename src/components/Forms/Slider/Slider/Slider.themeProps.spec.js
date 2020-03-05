import themeProps from "./Slider.themeProps"
import { theme as instance } from "../../../../theming"
import Slider from "./Slider"

describe("Slider", () => {
  describe("Theme props", () => {
    it("container", () => {
      expect(themeProps.container).not.toBeNull()
      expect(Slider.hasOwnProperty("createVariants")).toBe(true)

      const style = `color: blue;`
      Slider.createVariants({
        container: {
          myVariant: style
        }
      })
      expect(instance.hasOwnProperty(themeProps.container.name)).toBe(true)
      expect(instance[themeProps.container.name].myVariant).toEqual(style)
    })
    it("slider", () => {
      expect(themeProps.slider).not.toBeNull()
      expect(Slider.hasOwnProperty("createVariants")).toBe(true)

      const style = `color: blue;`
      Slider.createVariants({
        slider: {
          myVariant: style
        }
      })
      expect(instance.hasOwnProperty(themeProps.slider.name)).toBe(true)
      expect(instance[themeProps.slider.name].myVariant).toEqual(style)
    })
    it("rail", () => {
      expect(themeProps.rail).not.toBeNull()
      expect(Slider.hasOwnProperty("createVariants")).toBe(true)

      const style = `color: blue;`
      Slider.createVariants({
        rail: {
          myVariant: style
        }
      })
      expect(instance.hasOwnProperty(themeProps.rail.name)).toBe(true)
      expect(instance[themeProps.rail.name].myVariant).toEqual(style)
    })
    it("tracks", () => {
      expect(themeProps.tracks).not.toBeNull()
      expect(Slider.hasOwnProperty("createVariants")).toBe(true)

      const style = `color: blue;`
      Slider.createVariants({
        tracks: {
          myVariant: style
        }
      })
      expect(instance.hasOwnProperty(themeProps.tracks.name)).toBe(true)
      expect(instance[themeProps.tracks.name].myVariant).toEqual(style)
    })
    it("handle", () => {
      expect(themeProps.handle).not.toBeNull()
      expect(Slider.hasOwnProperty("createVariants")).toBe(true)

      const style = `color: blue;`
      Slider.createVariants({
        handle: {
          myVariant: style
        }
      })
      expect(instance.hasOwnProperty(themeProps.handle.name)).toBe(true)
      expect(instance[themeProps.handle.name].myVariant).toEqual(style)
    })
  })
})
