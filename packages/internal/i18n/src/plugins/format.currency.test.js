import format from "./format.currency"

import { i18nConfig } from "../__config"

const formatter = value => {
  return format(
    value,
    "en",
    {
      currency: {
        format: "%s %v",
        en: {
          thousand: " ",
          symbol: "kr"
        }
      }
    },
    i18nConfig.data
  )
}

describe("Format currency plugin", () => {
  it("Should ignore non currency input", () => {
    expect(formatter("My localized text")).toBe("My localized text")
  })

  it("Should format single instance", () => {
    const expected = "Price kr 10 000"
    const received = formatter("Price {currency(price)}")
    expect(expected).toBe(received)
  })

  it("Should format multiple instances", () => {
    const expected = "Price kr 10 000 og kr 10"
    const received = formatter("Price {currency(price)} og {currency(10)}")
    expect(expected).toBe(received)
  })
})
