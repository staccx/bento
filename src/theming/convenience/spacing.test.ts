import { spacing } from "./spacing"

const theme = {
  spacing: {
    huge: "96px",
    large: "48px",
    mediumPlus: "32px",
    medium: "24px",
    small: "12px",
    tiny: "6px",
    micro: "3px"
  }
}
describe("Spacing", () => {
  it("Should work", () => {
    expect(spacing("huge")({ theme })).toBe(theme.spacing.huge)
  })

  it("Should work with string literals", () => {
    expect(spacing`large`({ theme })).toBe(theme.spacing.large)
  })
})
