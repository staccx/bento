import { pxToRem } from "./pxToRem"

const theme = {
  baseSize: 24
}
describe("pxToRem", () => {
  it("Should handle numeric values", () => {
    const func = pxToRem(24)
    expect(func({ theme })).toBe("1rem")
  })

  it("Should handle strings", () => {
    const func = pxToRem("12px")
    expect(func({ theme })).toBe("0.5rem")
  })

  it("Different font-size", () => {
    const func = pxToRem("12px")
    expect(
      func({
        theme: {
          baseSize: 12
        }
      })
    ).toBe("1rem")
  })

  it("Works without explisitly setting", () => {
    const func = pxToRem(16)
    expect(
      func({
        theme: {}
      })
    ).toBe("1rem")
  })

  it("Should throw with errounious input", () => {
    const func = pxToRem("abc")
    const fail = () => {
      func({})
    }
    expect(fail).toThrow("Input is not a numeric value or pixel value")
  })
})
