import LanguageProvider from "./Components/LanguageProvider"
import LanguageSettings from "./Components/LanguageSettings"
import TranslatedText from "./Components/TranslatedText"
import Convert from "./Components/Convert"
import i18n from "./i18n"
import createFormatter from "./plugins/_createFormatter"
import getLocaleOptions from "./plugins/_getLocaleOptions"
import dateNow from "./plugins/date.now"
import formatCurrency from "./plugins/format.currency"
import autoDetecLanguage from "./middleware/autoDetectLanguage"

const plugins = {
  dateNow,
  formatCurrency
}

const middleware = {
  autoDetecLanguage
}

const utils = {
  createFormatter,
  getLocaleOptions
}

export {
  LanguageProvider,
  LanguageSettings,
  TranslatedText,
  Convert,
  i18n as i18nInstance,
  plugins,
  middleware,
  utils
}
