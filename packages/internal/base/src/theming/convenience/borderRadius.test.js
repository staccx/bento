import borderRadius from "./borderRadius"

describe("borderRadius", () => {
  it("Work", () => {
    const func = borderRadius()
    expect(func({ theme: { borderRadius: "10px" } })).toBe("10px")
  })
})
