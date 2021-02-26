import { createContext, useContext } from "react"
import PropTypes from "prop-types"
import { locales } from "./locales"

const Context = createContext({})
/**
 * Locale provider provides locale to the app and certain components (see Input)
 * @param children
 * @param locale
 * @returns {JSX.Element}
 */
const LocaleProvider = ({ children, locale }) => {
  return <Context.Provider value={{ locale }}>{children}</Context.Provider>
}

LocaleProvider.propTypes = {
  children: PropTypes.element.isRequired,
  locale: PropTypes.shape({
    name: PropTypes.string,
    native: PropTypes.string,
    phone: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    continent: PropTypes.string,
    capital: PropTypes.string,
    currency: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    languages: PropTypes.arrayOf(PropTypes.string),
    alpha2: PropTypes.string,
    key: PropTypes.string
  })
}

LocaleProvider.defaultProps = {
  locale: locales.Norway
}

export const useLocale = () => useContext(Context)

export default LocaleProvider
