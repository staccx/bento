import React, { createContext, useContext, useEffect, useState } from "react"
import i18next from "i18next"
import PropTypes from "prop-types"
import loglevel from "loglevel"
import { formatMoney } from "../formatting"
import { normalizeLevel } from "../utils/loglevelUtils"
import { countries } from "./countries"

const I18nContext = createContext({})

const defaultFormat = {
  currency: value => {
    return formatMoney(parseInt(value, 10))
  }
}

export const i18nLogger = loglevel.getLogger("i18n")
i18nLogger.setDefaultLevel(normalizeLevel(0))

const resolveLanguage = language => {
  if (typeof language === "string") {
    return language
  }
  if (typeof language === "object") {
    if (language.hasOwnProperty("key")) {
      return language.key.toLowerCase()
    }
  }

  return null
}

const Provider = ({
  children,
  level,
  language,
  texts = null,
  languages = ["en"],
  formatFunctions = {},
  backend,
  backendOptions = {},
  debug = false,
  ...props
}) => {
  const [ready, readySet] = useState(false)

  useEffect(() => {
    if (language && i18next.isInitialized) {
      if (resolveLanguage(language) !== i18next.language) {
        i18next
          .changeLanguage(resolveLanguage(language))
          .then(() => {
            i18nLogger.debug("Language changed by props", language)
          })
          .catch(e => {
            i18nLogger.debug("Language change rejected:", e.message)
          })
      }
    }
    if (i18next.isInitialized !== ready) {
      readySet(i18next.isInitialized)
    }
  }, [language, i18next.isInitialized])

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
      i18next.use(backend)
    }
    const lng = resolveLanguage(language)
    i18next
      .init({
        ...(texts && { resources: texts }),
        lng,
        fallbackLng: [lng],
        debug: level >= loglevel.levels.INFO,
        backend: {
          ...backendOptions
        },
        returnObjects: true,
        saveMissing: true, // Must be set to true
        missingKeyHandler: (lng, ns, key, fallbackValue) => {
          i18nLogger.warn(
            `Missing key: ${key} in ${lng}[${ns}]. Fallbackvalue: ${fallbackValue}`,
            lng,
            ns,
            `key: ${key}`,
            fallbackValue
          )
          return null
        },
        parseMissingKeyHandler: key => {
          i18nLogger.warn(`No translation found for "${key}"`)
          return null
        },
        interpolation: {
          format: function(value, format, lng) {
            if (formatFunctions.hasOwnProperty(format)) {
              return formatFunctions[format](value)
            }
            if (defaultFormat.hasOwnProperty(format)) {
              return defaultFormat[format](value)
            }
            return value
          }
        }
      })
      .then(() => {
        i18nLogger.info("i18n ready to use")
      })
  }, [])

  const translate = (key, data, fallback = null) => {
    i18nLogger.debug(`Translating ${key}`, data)
    const value = i18next.t(key, data)
    i18nLogger.debug(`Translated ${key} into ${value}`)
    return value || fallback
  }

  const transform = (value, fallback) => {
    if (!value) {
      i18nLogger.warn(`Cannot transform null or undefined`)
      return fallback ?? null
    }
    if (!value.hasOwnProperty(i18next.language)) {
      i18nLogger.warn(`Could not find key in language`, value, i18next.language)
      return fallback ?? null
    }
    i18nLogger.debug(`Transforming in ${i18next.language}`, value)
    return value[i18next.language] ?? fallback ?? null
  }

  return (
    <I18nContext.Provider
      value={{
        ready,
        i18n: i18next,
        language,
        languages: i18next.languages || [],
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
  language: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({
      key: PropTypes.string
    })
  ]),
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
  language: countries.Norway
}

export const useI18n = () => useContext(I18nContext)

/**
 * @deprecated use usei18n instead
 * @param children
 * @returns {null|*}
 * @constructor
 */
export const I18nConsumer = ({ children }) => {
  const props = useI18n()

  if (!children) {
    i18nLogger.debug("I18nConsumer has no children")
    return null
  }

  if (!props.ready) {
    i18nLogger.debug("i18nConsumer is not ready")
    return null
  }
  i18nLogger.debug(`Returning ${children} with`)
  return children(props)
}

/**
 * @deprecated use usei18n instead
 * @param Component
 * @returns {function(*): *}
 */
export const withI18n = Component => props => (
  <I18nConsumer>
    {i18nProps => <Component {...props} {...i18nProps} />}
  </I18nConsumer>
)

export default Provider
