import React from "react"
import loglevel from "loglevel"
import { useI18n } from "./I18n"
import { commonPropTypes } from "../../constants/themeContants"
import { getComponent } from "./utils"

const handleArray = (value, data, children, translate) => {
  const values = value.map(
    (k, index) => translate(k, data) || React.Children(children)[index]
  )

  if (typeof children === "function") {
    return children(values)
  }

  return values.map(getComponent)
}

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
  children: commonPropTypes.children
}

export default Translate
