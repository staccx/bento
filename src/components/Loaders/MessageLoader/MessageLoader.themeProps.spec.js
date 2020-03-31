import themeProps from "./MessageLoader.themeProps"

describe("MessageLoader", () => {
  describe("Theme props", () => {
    it("container", () => {
      expect(themeProps.container).not.toBeNull()
    })

    it("messagesContainer", () => {
      expect(themeProps.messagesContainer).not.toBeNull()
    })
    it("message", () => {
      expect(themeProps.message).not.toBeNull()
    })
    it("previousMessage", () => {
      expect(themeProps.previousMessage).not.toBeNull()
    })
    it("currentMessage", () => {
      expect(themeProps.currentMessage).not.toBeNull()
    })
  })
})
