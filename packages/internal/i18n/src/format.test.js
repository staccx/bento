import format from "./format"
import { i18nConfig } from "./__config"

describe("Format", () => {
  it("Should work", () => {
    expect(
      format({ value: "Format this, {name}", data: { name: "Bento" } })
    ).toBe("Format this, Bento")
  })

  it("Format currency", () => {
    const received = format({
      value: "{currency(balance)}",
      data: { balance: 10000 },
      plugins: i18nConfig.plugins
    })
    const expected = "10\u00A0000"
    expect(received).toEqual(expected)
  })

  it("Should not format arrays", () => {
    const value = ["test", "test2"]
    expect(format({ value })).toBe(value)
  })

  it("Should fail when with erronious plugin", () => {
    const fn = () => format({ value: "Format this, {name}", plugins: [null] })
    expect(fn).toThrow()
  })
})
