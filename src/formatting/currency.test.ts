import { abbreviateCurrency, formatMoney } from "./currency"
import { CURRENCY_DISPLAY } from "./number.constants"

// const space = \u00a0

describe("Currency", () => {
  describe("Abbreviations", () => {
    it("Should not abbreviate values less than 1000", () => {
      expect(abbreviateCurrency(999)).toBe("999")
    })
    it("Should abbreviate 1000 to 1k", () => {
      expect(abbreviateCurrency(1000)).toBe("1k")
    })
    it("Should abbreviate 1 000 000 to 1m", () => {
      expect(abbreviateCurrency(1000000)).toBe("1\u00a0mill.")
    })
    it("Should handle different values", () => {
      expect(abbreviateCurrency(12345)).toBe("12k")
    })
  })

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
})
