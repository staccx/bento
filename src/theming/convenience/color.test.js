import color from "./color"

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
  it("Should work helpers", () => {
    expect(color.white()(props)).toBe(props.theme.color.white)
    expect(color.bg()(props)).toBe(props.theme.color.bg)
    expect(color.subtleHover()(props)).toBe(props.theme.color.subtleHover)
    expect(color.bgGray()(props)).toBe(props.theme.color.bgGray)
    expect(color.line()(props)).toBe(props.theme.color.line)
    expect(color.gray()(props)).toBe(props.theme.color.gray)
    expect(color.wcag()(props)).toBe(props.theme.color.wcag)
    expect(color.disabled()(props)).toBe(props.theme.color.disabled)
    expect(color.primary()(props)).toBe(props.theme.color.primary)
    expect(color.secondary()(props)).toBe(props.theme.color.secondary)
    expect(color.text()(props)).toBe(props.theme.color.text)
    expect(color.negative()(props)).toBe(props.theme.color.negative)
    expect(color.positive()(props)).toBe(props.theme.color.positive)
    expect(color.warning()(props)).toBe(props.theme.color.warning)
    expect(color.black()(props)).toBe(props.theme.color.black)
    expect(color.green()(props)).toBe(props.theme.color.green)
    expect(color.link()(props)).toBe(props.theme.color.link)
  })

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
