import themeProps from "./InlineList.themeProps"
import { theme as instance } from "../../../theming"
import InlineListItem from "./InlineListItem"

describe("inlineList", () => {
  describe("Theme props", () => {
    it("listItem", () => {
      expect(themeProps.listItem).not.toBeNull()
      expect(InlineListItem.hasOwnProperty("createVariants")).toBe(true)

      const style = `background-color: blue;`
      InlineListItem.createVariants({
        listItem: {
          myVariant: style
        }
      })
      expect(instance.hasOwnProperty(themeProps.listItem.name)).toBe(true)
      expect(instance[themeProps.listItem.name].myVariant).toEqual(style)
    })
  })
})
