import themeProps from "./Alert.themeProps"

describe("Alert", () => {
  describe("Theme props", () => {
    it("alert", () => {
      expect(themeProps.alert).not.toBeNull()
      expect(themeProps.alert.hasOwnProperty("createVariants")).toBe(true)

      const style = `background-color: blue;`
      const variant = themeProps.alert.createVariants({
        myVariant: style
      })
      expect(variant.hasOwnProperty(themeProps.alert.name)).toBe(true)
      expect(variant[themeProps.alert.name].myVariant).toEqual(style)
    })
    it("componentAlertInfo", () => {
      expect(themeProps.componentAlertInfo).not.toBeNull()
      expect(
        themeProps.componentAlertInfo.hasOwnProperty("createVariants")
      ).toBe(true)
    })
    it("componentAlertWarning", () => {
      expect(themeProps.componentAlertWarning).not.toBeNull()
      expect(
        themeProps.componentAlertWarning.hasOwnProperty("createVariants")
      ).toBe(true)
    })
    it("componentAlertSuccess", () => {
      expect(themeProps.componentAlertSuccess).not.toBeNull()
      expect(
        themeProps.componentAlertSuccess.hasOwnProperty("createVariants")
      ).toBe(true)
    })
    it("alertInfo", () => {
      expect(themeProps.alertInfo).not.toBeNull()
      expect(themeProps.alertInfo.hasOwnProperty("createVariants")).toBe(true)
    })
    it("alertWarning", () => {
      expect(themeProps.alertWarning).not.toBeNull()
      expect(themeProps.alertWarning.hasOwnProperty("createVariants")).toBe(
        true
      )
    })
    it("alertSuccess", () => {
      expect(themeProps.alertSuccess).not.toBeNull()
      expect(themeProps.alertSuccess.hasOwnProperty("createVariants")).toBe(
        true
      )
    })
  })
})
