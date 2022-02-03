import { color } from "./color"

const props = {
  theme: {
    color: {
      white: "#fff",
      bg: "#fff",
      subtleHover: "#F7F7FF",
      bgGray: "#f7f7ff",
      line: "#EBEBF2",
      gray: "#767676",
      wcag: "#777",
      disabled: "#BABABA",
      primary: "#00a190",
      secondary: "#F5A623",
      text: "#2b2b2b",
      negative: "#ea526f",
      positive: "#4A90E2",
      warning: "#c54059",
      black: "#000",
      green: "#00a190",
      link: "#279AF1",
      staccRed: "#FF5B30"
    }
  }
}

describe("Color", () => {
  it("Should work with added colors", () => {
    expect(color("staccRed")(props)).toBe(props.theme.color.staccRed)
  })

  it("Should work with string literals", () => {
    expect(color`primary`(props)).toBe(props.theme.color.primary)
    expect(color`black`(props)).toBe(props.theme.color.black)
  })

  it("Should not work with mulitple string literals", () => {
    expect(color`primary secondary`(props)).toBe(null)
  })
})
