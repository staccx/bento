import convert from "./convert"
import { i18nConfig } from "./__config"

describe("Converter", () => {
  it("Should work", () => {
    expect(convert(i18nConfig.texts.next, "nb")).toBe("Neste")
  })
})
