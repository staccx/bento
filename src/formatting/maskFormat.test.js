import maskFormat from "./maskFormat"

describe("Phone", () => {
  it("Should format with defaults", () => {
    expect(maskFormat(92284082)).toBe("922 84 082")
  })

  it("Should be able to handle other formats", () => {
    expect(maskFormat(92284082, "XX-XX-XX-XX")).toBe("92-28-40-82")
  })
})
