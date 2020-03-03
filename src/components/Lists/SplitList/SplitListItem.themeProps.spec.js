import themeProps from "./SplitListItem.themeProps"
import { theme as instance } from "../../../theming"
import SplitListItem from "./SplitListItem"

describe("SplitListItem", () => {
  describe("Theme props", () => {
    it("listItem", () => {
      expect(themeProps.listItem).not.toBeNull()
      expect(SplitListItem.hasOwnProperty("createVariants")).toBe(true)

      const style = `background-color: blue;`
      SplitListItem.createVariants({
        listItem: {
          myVariant: style
        }
      })
      expect(instance.hasOwnProperty(themeProps.listItem.name)).toBe(true)
      expect(instance[themeProps.listItem.name].myVariant).toEqual(style)
    })
  })
})
