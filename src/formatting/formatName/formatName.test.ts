import { formatName } from "./formatName"

describe("Format name", () => {
  it("Should format name properly from lowercase", () => {
    expect(formatName("john doe")).toBe("Doe, John")
  })

  it("Should format name properly from uppercase", () => {
    expect(formatName("JANE DOE")).toBe("Doe, Jane")
  })

  it("Should work with custom separator", () => {
    expect(formatName("JANE DOE", { separator: "-" })).toBe("Doe- Jane")
  })
})
