import { formatDateDistance } from "./formatDateDistance"
import { addDays } from "date-fns"
import enUS from "date-fns/locale/en-US"

describe("FormatDistance", () => {
  it("Should format dates with defaults", () => {
    const date = new Date(1525910400000)
    const old = new Date(1524614400000)

    const formatted = formatDateDistance(date, old)
    expect(formatted).toBe("15 dager")
  })

  it("Should format ISO 8601 with defaults", () => {
    const formatted = formatDateDistance(
      "2018-04-25T00:00:00Z",
      "2018-05-10T00:00:00Z"
    )
    expect(formatted).toBe("15 dager")
  })

  it("Should format mixed inputs with defaults", () => {
    const date = new Date(1524614400000)
    const date2 = new Date(1525910400000)

    expect(formatDateDistance(date, "2018-05-10T00:00:00Z")).toBe("15 dager")
    expect(formatDateDistance("2018-04-25T00:00:00Z", date2)).toBe("15 dager")
  })

  it("Should get distance only one input with defaults", () => {
    const date = addDays(new Date(), 10)
    expect(formatDateDistance(date)).toBe("10 dager")
  })

  it("Should be able to override locale", () => {
    const date = addDays(new Date(), 10)
    expect(formatDateDistance(date, new Date(), enUS)).toBe("10 days")
  })
})
