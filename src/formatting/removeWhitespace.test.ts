import removeWhitespace from "./removeWhitespace"

describe("Remove white space", () => {
  it("Should remove leading white space", () => {
    expect(removeWhitespace("   test")).toBe("test")
  })

  it("Should remove trailing white space", () => {
    expect(removeWhitespace("test   ")).toBe("test")
  })

  it("Should remove all white space in multiple word string", () => {
    expect(
      removeWhitespace("The quick brown fox jumps over the lazy dog")
    ).toBe("Thequickbrownfoxjumpsoverthelazydog")
  })
})
