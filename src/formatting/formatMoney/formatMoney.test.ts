import { formatMoney } from "./formatMoney"
import { CURRENCY_DISPLAY } from "../formatNumber/number.constants"

// const space = \u00a0

describe("Format money", () => {
  // NOTE: https://www.basefactor.com/javascript-es6-intl-not-working-properly-when-running-jest-tests
  it("Default", () => {
    expect(formatMoney(100000)).toBe("100\u00a0000")
  })

  it("Suffix", () => {
    expect(formatMoney(100000, { suffix: ",-" })).toBe("100\u00a0000,-")
  })

  it("Decimals", () => {
    expect(
      formatMoney(100000, { suffix: ",-", minimumFractionDigits: 2 })
    ).toBe("100\u00a0000,00,-")
  })

  it("Currency display name", () => {
    expect(
      formatMoney(100000, { currencyDisplay: CURRENCY_DISPLAY.name })
    ).toBe("100\u00a0000 norske kroner")
  })

  it("Currency display code", () => {
    expect(
      formatMoney(100000, { currencyDisplay: CURRENCY_DISPLAY.code })
    ).toBe("NOK\u00a0100\u00a0000")
  })

  it("Currency other locale", () => {
    expect(
      formatMoney(100000, {
        currencyDisplay: CURRENCY_DISPLAY.name,
        currency: "EUR",
        locale: "fi"
      })
    ).toBe("100\u00a0000 euroa")
  })
})
