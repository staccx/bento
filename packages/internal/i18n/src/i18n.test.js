import i18nInstance from "./i18n"
import { i18nConfig } from "./config"

const config = Object.assign({}, i18nConfig)

config.pluginOptions.timeNow.en = {
  weekday: "long"
}
i18nInstance.init(config)
describe("i18n instance", () => {
  it("Should fallback", () => {
    expect(i18nInstance.translate("NOTHERE", {}, "Yeah!")).toBe("Yeah!")
  })

  it("Should handle fallback with data", () => {
    expect(
      i18nInstance.translate("NOTHERE", { name: "science" }, "Yeah, {name}!")
    ).toBe("Yeah, science!")
  })
})
