import loglevel from "loglevel"
import PropTypes from "prop-types"
import { useI18n } from "../I18n"
import { getComponent, handleArray } from "../utils"

/**
 * Jsx Component for translating
 * @param children
 * @param i18n
 * @param data
 * @returns {null|*}
 * @constructor
 */
const Translate = ({ children, i18n, data }) => {
  const { translate, ready } = useI18n()

  if (!ready) {
    loglevel.debug("Not ready yet")
    return null
  }

  if (!i18n) {
    loglevel.warn("No key supplied to I18n")
    return children
  }

  if (Array.isArray(i18n)) {
    return handleArray(i18n, data, children, translate)
  }

  const fallback = typeof children !== "function" ? children : null

  const value = translate(i18n, data)
  if (!value) {
    if (children) {
      loglevel.debug("Falling back to children")
      if (typeof children !== "function") {
        return children // Fallback to children
      }
      return children(null)
    }

    return fallback || null
  }

  if (children) {
    if (typeof children === "function") {
      return children(value)
    }
  }

  let result = value
  if (Array.isArray(value)) {
    result = value.map(getComponent)
  }

  return result
}

Translate.propTypes = {
  /**
   * Children will in this case work as a fallback
   */
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element,
    PropTypes.string,
    PropTypes.number,
    PropTypes.array,
    PropTypes.func
  ]),
  /**
   * Key to look in the store
   */
  i18n: PropTypes.oneOfType([PropTypes.string, PropTypes.array]).isRequired,
  /**
   * Data provided in case of interpolation or custom input
   */
  data: PropTypes.object
}

Translate.defaultProps = {}

export default Translate
