import translate from "./translate"
import { i18nConfig } from "./__config"

describe("Translate", () => {
  it("Should fallback", () => {
    expect(
      translate({ key: "NOTHERE", data: {}, fallback: "Yeah!", ...i18nConfig })
    ).toBe("Yeah!")
  })

  it("Should handle fallback with data", () => {
    expect(
      translate({
        key: "NOTHERE",
        data: { name: "science" },
        fallback: "Yeah, {name}!",
        texts: {}
      })
    ).toBe("Yeah, science!")
  })

  it("Translates", () => {
    expect(translate({ key: "next", ...i18nConfig })).toBe("Next")
  })

  it("Handles language change", () => {
    expect(translate({ key: "next", ...i18nConfig })).toBe("Next")
    expect(translate({ key: "next", ...i18nConfig, language: "nb" })).toBe(
      "Neste"
    )
  })

  it("Fails when no texts", () => {
    const key = "next"
    expect(translate({ key })).toBe(key)
  })

  it("Fails when text does not exists", () => {
    const key = "next"
    expect(translate({ key, texts: {} })).toBe(key)
  })

  it("Fails when with faulty lang", () => {
    const key = "next"
    expect(
      translate({
        key,
        texts: {
          [key]: { nb: "neste" }
        }
      })
    ).toBe(key)
  })

  it("Throws in strict mode", () => {
    const key = "next"
    const fn = () => translate({ key, strict: true })
    const fn2 = () => translate({ key, texts: {}, strict: true })
    const fn3 = () =>
      translate({ key, texts: { next: { nb: "neste" } }, strict: true })
    expect(fn).toThrow()
    expect(fn2).toThrow()
    expect(fn3).toThrow()
  })
})
