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
import { formatCurrency } from "@staccx/formatting"
import SanityRichText from "../Sanity/SanityRichText"

const I18nContext = createContext({})

const defaultFormat = {
  currency: value => {
    return formatCurrency(parseInt(value, 10))
  }
}

const Provider = ({ children, ...props }) => {
  // const [i18n] = useReducer(reducer, props)
  const [ready, setReady] = useState(false)
  const {
    texts = null,
    language = "en",
    formatFunctions = {},
    backend,
    backendOptions = {},
    debug = true
  } = props
  const initialize = async () => {
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
        ready
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

  // t({ texts, language, key, data, fallback, namespace, level })
  const transform = value => {
    if (!value.hasOwnProperty(i18n.language)) {
      return null
    }
    return <SanityRichText blocks={value[i18n.language]} />
  }

  return useMemo(() => {
    return {
      translate,
      transform,
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
