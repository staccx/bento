import React from "react"
import LocaleProvider, { useLocale } from "./LocaleProvider"
import { locales } from "./locales"

export default {
  title: "Locale/LocaleProvider",
  component: LocaleProvider
}

const TestApp = () => {
  const { locale } = useLocale()

  return <div>Current locale is: {locale.native}</div>
}

export const UseLocaleStory = args => <TestApp />
