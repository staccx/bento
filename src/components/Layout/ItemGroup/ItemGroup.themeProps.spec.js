import themeProps from "./ItemGroup.themeProps"
import { theme as instance } from "../../../theming"
import ItemGroup from "./ItemGroup"

describe("ItemGroup", () => {
  describe("Theme props", () => {
    it("wrapper", () => {
      expect(themeProps.wrapper).not.toBeNull()
      expect(ItemGroup.hasOwnProperty("createVariants")).toBe(true)

      const style = `background-color: blue;`
      ItemGroup.createVariants({
        wrapper: {
          myVariant: style
        }
      })
      expect(instance.hasOwnProperty(themeProps.wrapper.name)).toBe(true)
      expect(instance[themeProps.wrapper.name].myVariant).toEqual(style)
    })
    it("group", () => {
      expect(themeProps.group).not.toBeNull()
      expect(ItemGroup.hasOwnProperty("createVariants")).toBe(true)

      const style = `background-color: blue;`
      ItemGroup.createVariants({
        group: {
          myVariant: style
        }
      })
      expect(instance.hasOwnProperty(themeProps.group.name)).toBe(true)
      expect(instance[themeProps.group.name].myVariant).toEqual(style)
    })
  })
})
