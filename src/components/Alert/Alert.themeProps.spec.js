import themeProps from "./Alert.themeProps"

describe("Alert", () => {
  describe("Theme props", () => {
    it("alert", () => {
      expect(themeProps.alert).not.toBeNull()
    })
    it("componentAlertInfo", () => {
      expect(themeProps.componentAlertInfo).not.toBeNull()
    })
    it("componentAlertWarning", () => {
      expect(themeProps.componentAlertWarning).not.toBeNull()
    })
    it("componentAlertSuccess", () => {
      expect(themeProps.componentAlertSuccess).not.toBeNull()
    })
    it("alertInfo", () => {
      expect(themeProps.alertInfo).not.toBeNull()
    })
    it("alertWarning", () => {
      expect(themeProps.alertWarning).not.toBeNull()
    })
    it("alertSuccess", () => {
      expect(themeProps.alertSuccess).not.toBeNull()
    })
  })
})
