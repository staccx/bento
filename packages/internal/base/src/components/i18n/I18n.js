import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState
} from "react"
import i18next from "i18next"
import PropTypes from "prop-types"
import { convert as c } from "@staccx/i18n"
import loglevel from "loglevel"
import SanityBackend from "./SanityBackend"

const I18nContext = createContext({})

const I18n = ({ children, ...props }) => {
  // const [i18n] = useReducer(reducer, props)
  const [ready, setReady] = useState(false)
  const { texts = null, language = "en", debug = true } = props
  const initialize = async () => {
    await i18next.use(SanityBackend).init({
      lng: language,
      debug,
      resources: texts,
      // returnObjects: true,
      // saveMissing: true, // Must be set to true
      // parseMissingKeyHandler: key => {
      //   loglevel.warn(`No translation found for "${key}"`)
      //   return null
      // },
      backend: {
        sanity: {
          projectId: "1pb4gkca",
          dataset: "production"
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

I18n.propTypes = {
  children: PropTypes.element.isRequired,
  texts: PropTypes.object.isRequired
}

export const useI18n = () => {
  const value = useContext(I18nContext)

  const { i18n, ready } = value

  const translate = (key, data) => i18n.t(key, data)

  // t({ texts, language, key, data, fallback, namespace, level })
  const convert = value => c(value, i18n.language)

  return useMemo(() => {
    return {
      translate,
      convert,
      ...value
    }
  }, [value, ready])
}

export const I18nConsumer = ({ children }) => {
  const { ready, translate, convert } = useI18n()

  if (!children) {
    return null
  }

  if (!ready) {
    return null
  }

  return children({ translate, convert, ready })
}

// TODO: Split into seperate files
export const withI18n = Component => props => (
  <I18nConsumer>
    {({ convert, translate }) => (
      <Component {...props} translate={translate} convert={convert} />
    )}
  </I18nConsumer>
)

export default I18n
