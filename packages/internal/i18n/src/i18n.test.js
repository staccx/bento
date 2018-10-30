import i18nInstance, { STACC_X_LANGUAGE_KEY } from "./i18n"
import { i18nConfig } from "./config"
import autoDetectLanguage from "./middleware/autoDetectLanguage"

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
  it("Should be able to use middleware", () => {
    config.middleware = [autoDetectLanguage]

    i18nInstance.setLanguage("nb")
    localStorage.setItem(STACC_X_LANGUAGE_KEY, "en")
    i18nInstance.init(config)
    expect(i18nInstance.language).toBe("en")
  })
})
