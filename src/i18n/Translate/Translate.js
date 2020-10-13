import PropTypes from "prop-types"
import { i18nLogger, useI18n } from "../I18n"
import { getComponent, handleArray } from "../utils"
import { useMemo } from "react"

/**
 * Jsx Component for translating
 * @param children
 * @param i18n
 * @param data
 * @returns {null|*}
 * @constructor
 */
const Translate = ({ children, i18n, data }) => {
  const { translate, ready, level } = useI18n()

  const renderResult = useMemo(() => {
    if (ready) {
      if (Array.isArray(i18n)) {
        i18nLogger.debug("Handling i18n key is array")
        return handleArray(i18n, data, children, translate)
      }
      const value = translate(i18n, data, children ?? null)
      if (Array.isArray(value)) {
        i18nLogger.debug("Handling value is array")
        return value.map(getComponent)
      }

      i18nLogger.debug("Key:", i18n, "resolved to:", value)
      return value
    }
    if (level === 5) {
      i18nLogger.debug("Returning key instead")
      return i18n
    }

    return children || null
  }, [ready, translate, i18n, level])

  return renderResult
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
