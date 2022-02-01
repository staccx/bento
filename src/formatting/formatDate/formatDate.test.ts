import { formatDate } from "./formatDate"

describe("Format date", () => {
  it("Should format ISO 8601 with defaults", () => {
    const formatted = formatDate("2018-04-25T00:00:00")
    expect(formatted).toBe("25 april 2018")
  })
  it("Should format ISO 8601 with other formats", () => {
    const format = (f: string) => formatDate("2018-04-25T00:00:00", f)

    expect(format("yyyy")).toBe("2018")
    expect(format("MM/yyyy")).toBe("04/2018")
    expect(format("dd/MM")).toBe("25/04")
    expect(format("HH:mm")).toBe("00:00")
    expect(format("MMMM")).toBe("april")
  })
  it("Should take Date object", () => {
    const date = new Date(1525968057000)
    expect(formatDate(date)).toBe("10 mai 2018")
  })
})
