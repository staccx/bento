import { Input, Button, extend } from "./"

describe("Input", () => {
  it("is truthy", () => {
    expect(Input).toBeTruthy()
  })
})

describe("Extending components", () => {
  describe("Button", () => {
    it("can be extended", () => {
      const aweSomeButton = extend(Button, `background: blue`)
      expect(aweSomeButton).toBeTruthy()
    })
  })
})
