import { font } from "./font"

const props = {
  theme: {
    font: {
      h1: "36px",
      h2: "26px",
      h3: "22px",
      h4: "18px",
      h5: "16px",
      h6: "14px",
      base: "14px",
      tiny: "12px",
      input: "16px",
      huge: "44px",
      lineHeight: "1.5",
      ridiculous: "100px"
    }
  }
}

describe("Font", () => {
  it("Should work with helpers", () => {
    expect(font.h1()(props)).toBe(props.theme.font.h1)
    expect(font.h2()(props)).toBe(props.theme.font.h2)
    expect(font.h3()(props)).toBe(props.theme.font.h3)
    expect(font.h4()(props)).toBe(props.theme.font.h4)
    expect(font.h5()(props)).toBe(props.theme.font.h5)
    expect(font.h6()(props)).toBe(props.theme.font.h6)
    expect(font.base()(props)).toBe(props.theme.font.base)
    expect(font.tiny()(props)).toBe(props.theme.font.tiny)
    expect(font.input()(props)).toBe(props.theme.font.input)
    expect(font.huge()(props)).toBe(props.theme.font.huge)
    expect(font.lineHeight()(props)).toBe(props.theme.font.lineHeight)
  })

  it("Should work with added ones", () => {
    expect(font("ridiculous")(props)).toBe(props.theme.font.ridiculous)
  })
})
