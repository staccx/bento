import themeProps from "./Layout.themeProps"
import { theme as instance } from "../../../theming"
import Layout from "./Layout"

describe("Layout", () => {
  describe("Theme props", () => {
    it("container", () => {
      expect(themeProps.container).not.toBeNull()
      expect(Layout.hasOwnProperty("createVariants")).toBe(true)

      const style = `background-color: blue;`
      Layout.createVariants({
        container: {
          myVariant: style
        }
      })
      expect(instance.hasOwnProperty(themeProps.container.name)).toBe(true)
      expect(instance[themeProps.container.name].myVariant).toEqual(style)
    })
  })
})
