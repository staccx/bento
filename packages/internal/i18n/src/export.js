import LanguageProvider from "./Components/LanguageProvider"
import LanguageSettings from "./Components/LanguageSettings"
import TranslatedText from "./Components/TranslatedText"
import i18n from "./i18n"
import dateNow from "./plugins/date.now"
import formatCurrency from "./plugins/format.currency"

const plugins = {
  dateNow,
  formatCurrency
}

export {
  LanguageProvider,
  LanguageSettings,
  TranslatedText,
  i18n as i18nInstance,
  plugins
}
