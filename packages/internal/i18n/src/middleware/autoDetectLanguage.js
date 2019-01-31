import { STACC_X_LANGUAGE_KEY } from "../i18n"
import logLevel from "loglevel"

export default instance => {
  const value = localStorage.getItem(STACC_X_LANGUAGE_KEY)

  console.group("Auto detect language i18n middleware")

  if (!value) {
    // Check navigator language
    if (instance.hasLanguage(navigator.language)) {
      logLevel.info(
        `Found language in navigator language: ${navigator.language}`
      )
      instance.setLanguage(navigator.language)
    }
    // Check navigator languages
    for (let i = 0; i < navigator.languages.length; i++) {
      const locale = navigator.languages[i]

      // Check each language if it exist
      if (instance.hasLanguage(locale)) {
        logLevel.info(`Found language in navigator languages: ${locale}`)
        instance.setLanguage(locale)
      }

      // Check if the first part of language exists e.g "en_US" -> "en"
      if (locale.includes("-")) {
        const l = locale.split("-")[0] // take first piece of this

        if (instance.hasLanguage(l)) {
          logLevel.info(
            `Found language by splitting locale ${locale} into ${l}`
          )

          instance.setLanguage(l)
        }
      }
    }
    const language = instance.language || instance.languages[0]
    logLevel.info(`Falling back to ${language}`)

    instance.setLanguage(language)
  }
  logLevel.info(`Found language in local storage: ${value}`)
  instance.setLanguage(value)

  console.groupEnd()
}
