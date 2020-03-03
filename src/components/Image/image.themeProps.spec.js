import themeProps from "./Image.themeProps"
import { theme as instance } from "../../theming"
import Image from "./Image"

describe("Image", () => {
  describe("Theme props", () => {
    it("image", () => {
      expect(themeProps.image).not.toBeNull()
      expect(Image.hasOwnProperty("createVariants")).toBe(true)

      const style = `color: blue;`
      Image.createVariants({
        image: {
          myVariant: style
        }
      })
      expect(instance.hasOwnProperty(themeProps.image.name)).toBe(true)
      expect(instance[themeProps.image.name].myVariant).toEqual(style)
    })
    it("container", () => {
      expect(themeProps.container).not.toBeNull()
      expect(Image.hasOwnProperty("createVariants")).toBe(true)

      const style = `color: blue;`
      Image.createVariants({
        container: {
          myVariant: style
        }
      })
      expect(instance.hasOwnProperty(themeProps.container.name)).toBe(true)
      expect(instance[themeProps.container.name].myVariant).toEqual(style)
    })
  })
})
