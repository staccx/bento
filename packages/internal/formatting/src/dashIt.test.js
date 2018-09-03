import dashIt from "./dashIt"

describe("dash-it", () => {
  it("Should smash it", () => {
    expect(dashIt("This is a long text")).toBe("this-is-a-long-text")
  })
})
