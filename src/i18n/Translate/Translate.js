import PropTypes from "prop-types"
import i18next from "i18next"
import { i18nLogger, useI18n } from "../I18n"
import { getComponent, handleArray } from "../utils"
import React, { useEffect, useState } from "react"
import TranslateDebug from "./Translate.Debug"

/**
 * Jsx Component for translating
 * @param children
 * @param i18n
 * @param data
 * @name Translate
 * @returns {null|*}
 * @constructor
 */

const Translate = ({ children, i18n, data }) => {
  const { translate, language, debug, i18n: allI18n } = useI18n()
  const [value, valueSet] = useState(children ?? null)

  useEffect(() => {
    if (!i18next.isInitialized) return

    let result = null
    if (Array.isArray(i18n)) {
      i18nLogger.debug("Handling i18n key is array")
      result = handleArray(i18n, data, children, translate)
    } else {
      result = translate(i18n, children, data)
    }
    valueSet(result)
  }, [i18next, i18n, translate, language])

  if (Array.isArray(value)) {
    i18nLogger.debug("Handling value is array")
    return value.map(getComponent)
  }

  if (debug === true) {
    return (
      <TranslateDebug
        allLangs={allI18n.options.resources}
        value={value}
        i18n={i18n}
      >
        {children}
      </TranslateDebug>
    )
  }

  i18nLogger.debug("Key:", i18n, "resolved to:", value)
  return value
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
  ]).isRequired,
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
