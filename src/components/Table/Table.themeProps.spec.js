import themeProps from "./Table.themeProps"
import { theme as instance } from "../../theming"
import Table from "./Table"

describe("Table", () => {
  describe("Theme props", () => {
    it("table", () => {
      expect(themeProps.table).not.toBeNull()
      expect(Table.hasOwnProperty("createVariants")).toBe(true)

      const style = `background-color: blue;`
      Table.createVariants({
        table: {
          myVariant: style
        }
      })
      expect(instance.hasOwnProperty(themeProps.table.name)).toBe(true)
      expect(instance[themeProps.table.name].myVariant).toEqual(style)
    })
  })
})
