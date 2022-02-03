import { formatNumber } from "./formatNumber"
import { STYLE, UNITS } from "./number.constants"

describe("Format number", () => {
  it("Default", () => {
    expect(formatNumber(100000)).toBe("100\u00a0000")
  })

  it("Compact", () => {
    expect(formatNumber(100000, { notation: "compact" })).toBe("100k")
  })

  xit("Units", () => {
    expect(
      formatNumber(25, {
        style: STYLE.unit,
        unit: UNITS.celsius
      })
    ).toBe("25 °C")
  })

  it("Percent", () => {
    expect(
      formatNumber(1, {
        style: STYLE.percent
      })
    ).toBe("100\u00a0%")

    expect(
      formatNumber(0.2, {
        style: STYLE.percent
      })
    ).toBe("20\u00a0%")

    expect(
      formatNumber(50, {
        style: STYLE.percent
      })
    ).toBe("5\u00a0000\u00a0%") // 5 000 %
  })
})
