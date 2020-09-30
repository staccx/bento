import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState
} from "react"
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
    if (language.hasOwnProperty("alpha2")) {
      return language.alpha2
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
  const [ready, setReady] = useState(false)
  const [lang, setLanguage] = useState(() => resolveLanguage(language))

  const changeLanguage = async language => {
    const lang = resolveLanguage(language)
    await i18next.changeLanguage(lang)
    // set whatever language is set. No resolving. We want the consumer to get this
    setLanguage(language)
  }

  useEffect(() => {
    i18nLogger.setLevel(normalizeLevel(level))
    i18nLogger.info("i18n levels updated")
  }, [])

  const initialize = useCallback(async () => {
    if (ready) {
      i18nLogger.info("Alredy completed initializion. Aborting")
      return
    }
    i18nLogger.info("Initializing i18n")
    if (backend) {
      i18next.use(backend)
    }
    await i18next.init({
      ...(texts && { resources: texts }),
      lng: resolveLanguage(language),
      fallbackLng: [lang],
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
          key,
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

    i18nLogger.info("i18n ready to use")
    setReady(true)
  }, [
    backend,
    backendOptions,
    debug,
    formatFunctions,
    lang,
    level,
    texts,
    ready
  ])

  useEffect(() => {
    initialize()
  }, [initialize])

  return (
    <I18nContext.Provider
      value={{
        texts,
        i18n: i18next,
        ready,
        languages,
        language: lang,
        changeLanguage
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
      name: PropTypes.string,
      native: PropTypes.string,
      phone: PropTypes.string,
      continent: PropTypes.string,
      capital: PropTypes.string,
      currency: PropTypes.string,
      languages: PropTypes.arrayOf(PropTypes.string),
      alpha2: PropTypes.string,
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

export const useI18n = () => {
  const value = useContext(I18nContext)

  const { i18n, ready } = value

  const translate = (key, data, fallback = null) => {
    i18nLogger.debug(`Translating ${key}`, data)
    const value = i18n.t(key, data)
    i18nLogger.debug(`Translated ${key} into ${value}`)
    return value || fallback
  }

  const transform = value => {
    if (!value) {
      i18nLogger.warn(`Cannot transform null or undefined`)
      return null
    }
    if (!value.hasOwnProperty(i18n.language)) {
      i18nLogger.warn(`Could not find key in language`, value, i18n.language)
      return null
    }
    i18nLogger.debug(`Transforming in ${i18n.language}`, value)
    return value[i18n.language]
  }

  return useMemo(() => {
    return {
      translate,
      transform,
      languages: i18n ? i18n.languages : [],
      ...value
    }
  }, [value, ready, i18n])
}

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

// TODO: Split into seperate files
export const withI18n = Component => props => (
  <I18nConsumer>
    {i18nProps => <Component {...props} {...i18nProps} />}
  </I18nConsumer>
)

export default Provider
