import PropTypes from "prop-types"
import { useI18n } from "./I18n"
import loglevel from "loglevel"
import { getComponent } from "./utils"

/**
 * Component for transformation
 * @param children
 * @param value
 */
const Transform = ({ children, data }) => {
  const { transform, ready } = useI18n()

  if (!ready) {
    loglevel.debug("Not ready yet")
    return null
  }
  if (!data) {
    loglevel.warn("No value provided")
    return children
  }

  const value = transform(data)
  if (!value) {
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
  let result = value
  if (Array.isArray(value)) {
    result = value.map(getComponent)
  }

  return result
}

Transform.propTypes = {
  value: PropTypes.any.isRequired
}

export default Transform
