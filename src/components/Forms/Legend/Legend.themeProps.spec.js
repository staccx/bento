import themeProps from "./Legend.themeProps"
import { theme as instance } from "../../../theming"
import Legend from "./Legend"

describe("legend", () => {
  describe("Theme props", () => {
    it("legend", () => {
      expect(themeProps.legend).not.toBeNull()
      expect(Legend.hasOwnProperty("createVariants")).toBe(true)

      const style = `background-color: blue;`
      Legend.createVariants({
        legend: {
          myVariant: style
        }
      })
      expect(instance.hasOwnProperty(themeProps.legend.name)).toBe(true)
      expect(instance[themeProps.legend.name].myVariant).toEqual(style)
    })
  })
})
