import { formatCurrency, abbreviateCurrency } from "./currency";
describe("Currency", () => {
  describe("Formatting", () => {
    it("Should format have good defaults", () => {
      expect(formatCurrency(100000)).toBe("100 000");
    });
  });
  describe("Abbreviations", () => {
    it("Should not abbreviate values less than 1000", () => {
      expect(abbreviateCurrency(999)).toBe(999);
    });
    it("Should abbreviate 1000 to 1k", () => {
      expect(abbreviateCurrency(1000)).toBe("1k");
    });
    it("Should abbreviate 1 000 000 to 1m", () => {
      expect(abbreviateCurrency(1000000)).toBe("1m");
    });
    it("Should handle different values", () => {
      expect(abbreviateCurrency(12345)).toBe("12k");
    });
  });
});
