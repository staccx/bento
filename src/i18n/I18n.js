import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState
} from "react"
import i18next from "i18next"
import PropTypes from "prop-types"
import loglevel from "loglevel"
import { formatMoney } from "../formatting"
import { normalizeLevel } from "../utils/loglevelUtils"
import languages from "./lanuages"

const I18nContext = createContext({})

const defaultFormat = {
  currency: (value, locale) => {
    return formatMoney(parseInt(value, 10), {
      locale: locale || "nb-NO"
    })
  }
}

export const i18nLogger = loglevel.getLogger("i18n")
i18nLogger.setDefaultLevel(normalizeLevel(0))

const Provider = ({
  children,
  level,
  language,
  texts = null,
  formatFunctions = {},
  backend,
  backendOptions = {},
  debug = false
}) => {
  const [ready, readySet] = useState(false)

  useEffect(() => {
    changeLanguage(language)
  }, [language])

  useEffect(() => {
    i18nLogger.setLevel(normalizeLevel(level))
    i18nLogger.info("i18n levels updated")
  }, [level])

  useEffect(() => {
    if (i18next.isInitialized) {
      i18nLogger.debug("Already completed initializion. Aborting")
      return
    }
    i18nLogger.info("Initializing i18n")
    if (backend) {
      i18nLogger.info("Using backend", backend)
      i18next.use(backend)
    }
    i18next
      .init({
        ...(texts && { resources: texts }),
        lng: language,
        fallbackLng: ["no"],
        debug: level >= loglevel.levels.INFO,
        backend: {
          ...backendOptions
        },
        returnObjects: true,
        saveMissing: true, // Must be set to true
        missingKeyHandler: (lng, ns, key, fallbackValue) => {
          i18nLogger.warn(
            "missingKeyHandler",
            `Missing key: ${key} in ${lng}[${ns}]. Fallbackvalue: ${fallbackValue}`,
            lng,
            ns,
            `key: ${key}`,
            fallbackValue
          )
          return null
        },
        parseMissingKeyHandler: key => {
          i18nLogger.warn(
            "parseMissingKeyHandler",
            `No translation found for "${key}"`
          )
          return null
        },
        interpolation: {
          format: function(value, format, lng) {
            if (formatFunctions.hasOwnProperty(format)) {
              return formatFunctions[format](value, lng)
            }
            if (defaultFormat.hasOwnProperty(format)) {
              return defaultFormat[format](value, lng)
            }
            i18nLogger.warn("interpolation", `missing formatter: ${format}`)
            return value
          }
        }
      })
      .then(() => {
        readySet(true)
        i18nLogger.info("i18n ready to use")
      })
  }, [])

  const translate = useCallback(
    (key, fallback = null, data = null) => {
      if (!i18next.isInitialized) {
        i18nLogger.debug("translate", `i18n not initialized`, key)
        return fallback
      }
      i18nLogger.debug(`Translating ${key}`, data)
      const value = i18next.t(key, data)
      i18nLogger.debug(`Translated ${key} into ${value}`)
      return value || fallback
    },
    [i18next.isInitialized]
  )

  const transform = useCallback(
    (value, fallback) => {
      if (!i18next.isInitialized) {
        i18nLogger.debug("transform", "i18n not initialized")
        return fallback
      }
      if (!value) {
        i18nLogger.warn(`Cannot transform null or undefined`)
        return fallback ?? null
      }
      if (!i18next?.language) {
        i18nLogger.warn(`Language not yet set`)
        return fallback ?? null
      }
      i18nLogger.debug(`Transforming in ${i18next.language}`, value)
      return (
        value[i18next.language] ??
        value[i18next.language.toLowerCase()] ??
        value[i18next.language.toUpperCase()] ??
        fallback ??
        null
      )
    },
    [i18next.isInitialized]
  )

  const changeLanguage = useCallback(
    lang => {
      if (i18next.isInitialized) {
        if (lang !== i18next.language) {
          readySet(false)
          i18next
            .changeLanguage(lang)
            .then(() => {
              readySet(true)
              i18nLogger.debug("Language changed", lang)
            })
            .catch(e => {
              i18nLogger.debug("Language change rejected:", e.message)
            })
        }
      }

      return () => {
        i18nLogger.debug("Not ready")
      }
    },
    [i18next.isInitialized]
  )

  return (
    <I18nContext.Provider
      value={{
        ready,
        backend,
        i18n: i18next,
        language: i18next.language,
        languages: i18next.languages,
        changeLanguage,
        translate,
        transform
      }}
    >
      {children}
    </I18nContext.Provider>
  )
}

Provider.propTypes = {
  children: PropTypes.element.isRequired,
  texts: PropTypes.object,
  language: PropTypes.string.isRequired,
  formatFunctions: PropTypes.object,
  backend: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
  backendOptions: PropTypes.object,
  debug: PropTypes.bool,
  level: PropTypes.oneOf([
    loglevel.levels.TRACE,
    loglevel.levels.DEBUG,
    loglevel.levels.INFO,
    loglevel.levels.WARN,
    loglevel.levels.ERROR,
    loglevel.levels.SILENT
  ])
}

Provider.defaultProps = {
  level: loglevel.levels.SILENT,
  language: languages.Norwegian
}

export const useI18n = () => useContext(I18nContext)

export default Provider
