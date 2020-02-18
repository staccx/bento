import { clamp } from "./index"

describe("Clamp", () => {
  it("Should clamp down high values", () => {
    expect(clamp(1, 100, 1000)).toBe(100)
  })
  it("Should clamp up low values", () => {
    expect(clamp(1, 100, -100)).toBe(1)
  })
  it("Should return value if between min and max", () => {
    expect(clamp(1, 100, 54)).toBe(54)
    expect(clamp(1, 100, 54)).toBe(54)
  })
})
