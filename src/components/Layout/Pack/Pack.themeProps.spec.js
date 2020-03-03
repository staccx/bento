import themeProps from "./Pack.themeProps"
import { theme as instance } from "../../../theming"
import Pack from "./Pack"

describe("Pack", () => {
  describe("Theme props", () => {
    it("list", () => {
      expect(themeProps.list).not.toBeNull()
      expect(Pack.hasOwnProperty("createVariants")).toBe(true)

      const style = `background-color: blue;`
      Pack.createVariants({
        list: {
          myVariant: style
        }
      })
      expect(instance.hasOwnProperty(themeProps.list.name)).toBe(true)
      expect(instance[themeProps.list.name].myVariant).toEqual(style)
    })
  })
})
