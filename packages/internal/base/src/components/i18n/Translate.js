import React from "react"
import { useI18n } from "./I18n"
import loglevel from "loglevel"
import { commonPropTypes } from "../../constants/themeContants"

/**
 * Component for translation
 * @param children
 * @param key
 * @param data
 * @return {*}
 * @constructor
 */
const Translate = ({ children, key, data }) => {
  const [{ translate }] = useI18n()

  if (!key) {
    loglevel.warn("No key supplied to I18n")
    return children
  }

  if (Array.isArray(key)) {
    const values = key.map((k, index) =>
      translate({
        key: k,
        data,
        fallback: React.Children(children)[index] || null
      })
    )

    if (typeof children === "function") {
      return children(values)
    }

    return values.map(value => value)
  }

  const fb = typeof children !== "function" ? children : null
  const value = translate(key, data, fb)
  if (!value) {
    loglevel.warn("No value found for", key)
    if (children) {
      loglevel.debug("Falling back to children")
      if (typeof children !== "function") {
        return children // Fallback to children
      }
      return children(null)
    }

    return null
  }

  if (children) {
    if (typeof children === "function") {
      return children(value)
    }
  }
  return value
}

Translate.propTypes = {
  children: commonPropTypes.children.isRequired
}

export default Translate
