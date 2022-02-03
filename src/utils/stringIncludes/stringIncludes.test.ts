import { stringIncludes } from "./stringIncludes"

const text = "The quick brown fox jumps over the lazy dog"
const snippet = "Quick brown"

describe("String inclued", () => {
  it("Should test with defaults", () => {
    expect(stringIncludes(text, snippet)).toBe(true)
  })

  it("Should be able to not ignore case", () => {
    expect(stringIncludes(text, snippet, false)).toBe(false)
  })
})
