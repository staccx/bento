import {formatCurrency} from "./currency"
describe("Currency", () => {
  describe("Formatting", ()=> {
    it("Should format have good defaults", () => {
      expect(formatCurrency(100000)).toBe("100 000")
    })
  })
})