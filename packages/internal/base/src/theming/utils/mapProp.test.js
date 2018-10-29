import mapProp from "./mapProp"
const props = {
  theme: {},
  tab: "Example"
}

describe("Map Prop", () => {
  it("Should map props correctly", () => {
    expect(
      mapProp(
        "tab",
        {
          Example: "green",
          Variants: "red"
        },
        "blue"
      )(props)
    ).toBe("green")
  })
  it("Should use fallback is nothing fits", () => {
    expect(
      mapProp(
        "tab",
        {
          Variants: "red"
        },
        "blue"
      )(props)
    ).toBe("blue")
  })
})
