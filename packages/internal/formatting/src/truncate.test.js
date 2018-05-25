import truncate from "./truncate"

const longString = "The quick brown fox jumps over the lazy dog"
const shortString = "The quick brown fox"
describe("Truncate", () => {
  it("Should truncate with defaults", () => {
    expect(truncate(longString)).toBe("The quick brown fox&hellip;")
  })

  it("Should not truncate strings shorter than %length", () => {
    expect(truncate(shortString)).toBe(shortString)
  })

  it("Should truncate with other length passed", () => {
    expect(truncate(longString, 10)).toBe("The quick&hellip;")
  })

  it("Should truncate with other symbol passed", () => {
    expect(truncate(longString, 10, "---")).toBe("The quick---")
  })
})
