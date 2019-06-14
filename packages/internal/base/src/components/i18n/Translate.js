import React from "react"
import { useI18n } from "./I18n"
import loglevel from "loglevel"
import { commonPropTypes } from "../../constants/themeContants"

/**
 * Component for translation
 * @param children
 * @param i18n
 * @param data
 * @return {*}
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
    const values = i18n.map(
      (k, index) => translate(k, data) || React.Children(children)[index]
    )

    if (typeof children === "function") {
      return children(values)
    }

    return values.map(value => value)
  }

  const fb = typeof children !== "function" ? children : null

  const value = translate(i18n, data)

  if (!value) {
    loglevel.warn("No value found for", i18n)
    if (children) {
      loglevel.debug("Falling back to children")
      if (typeof children !== "function") {
        return children // Fallback to children
      }
      return children(null)
    }

    return fb
  }

  if (children) {
    if (typeof children === "function") {
      return children(value)
    }
  }
  return value
}

Translate.propTypes = {
  children: commonPropTypes.children
}

export default Translate
