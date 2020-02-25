import themeProps from "./Table.themeProps"

describe("Table", () => {
  describe("Theme props", () => {
    it("table", () => {
      expect(themeProps.table).not.toBeNull()
      expect(themeProps.table.hasOwnProperty("createVariants")).toBe(true)

      const style = `background-color: blue;`
      const variant = themeProps.table.createVariants({
        myVariant: style
      })
      expect(variant.hasOwnProperty(themeProps.table.name)).toBe(true)
      expect(variant[themeProps.table.name].myVariant).toEqual(style)
    })
  })
})
