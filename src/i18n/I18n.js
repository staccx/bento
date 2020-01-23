import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState
} from "react"
import i18next from "i18next"
import PropTypes from "prop-types"
import loglevel from "loglevel"
import { formatCurrency } from "../../formatting/currency"

const I18nContext = createContext({})

const defaultFormat = {
  currency: value => {
    return formatCurrency(parseInt(value, 10))
  }
}

const Provider = ({ children, ...props }) => {
  // const [i18n] = useReducer(reducer, props)
  const [ready, setReady] = useState(false)
  const [language, setLanguage] = useState(props.language)

  const changeLanguage = async language => {
    await i18next.changeLanguage(language)
    setLanguage(language)
  }

  const {
    texts = null,
    languages = ["en"],
    formatFunctions = {},
    backend,
    backendOptions = {},
    debug = false,
    level = null
  } = props

  const initialize = async () => {
    loglevel.setLevel(level || (debug ? "DEBUG" : "SILENT"))
    if (backend) {
      i18next.use(backend)
    }
    await i18next.init({
      ...(texts && { resources: texts }),
      lng: language,
      debug,
      backend: {
        ...backendOptions
      },
      returnObjects: true,
      saveMissing: true, // Must be set to true
      missingKeyHandler: key => null,
      parseMissingKeyHandler: key => {
        loglevel.warn(`No translation found for "${key}"`)
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

    loglevel.log("i18n ready to use", i18next)
    setReady(true)
  }

  useEffect(() => {
    initialize()
  }, [])

  return (
    <I18nContext.Provider
      value={{
        texts,
        i18n: i18next,
        ready,
        languages,
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
  language: PropTypes.string.isRequired,
  formatFunctions: PropTypes.object,
  backend: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
  backendOptions: PropTypes.object,
  debug: PropTypes.bool
}

export const useI18n = () => {
  const value = useContext(I18nContext)

  const { i18n, ready } = value

  const translate = (key, data) => i18n.t(key, data)

  const transform = value => {
    if (!value.hasOwnProperty(i18n.language)) {
      return null
    }
    return value[i18n.language]
  }

  return useMemo(() => {
    return {
      translate,
      transform,
      languages: i18n.languages,
      ...value
    }
  }, [value, ready])
}

export const I18nConsumer = ({ children }) => {
  const props = useI18n()

  if (!children) {
    return null
  }

  if (!props.ready) {
    return null
  }

  return children(props)
}

// TODO: Split into seperate files
export const withI18n = Component => props => (
  <I18nConsumer>
    {i18nProps => <Component {...props} {...i18nProps} />}
  </I18nConsumer>
)

export default Provider
