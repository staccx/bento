import PropTypes from "prop-types"
import { useI18n } from "./I18n"
import loglevel from "loglevel"

/**
 * Component for transformation
 * @param children
 * @param value
 */
const Transform = ({ children, value }) => {
  const { transform, ready } = useI18n()

  if (!ready) {
    loglevel.debug("Not ready yet")
    return null
  }
  if (!value) {
    loglevel.warn("No value provided")
    return children
  }

  const result = transform(value)
  if (!result) {
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
      return children(result)
    }
  }
  return result
}

Transform.propTypes = {
  value: PropTypes.any.isRequired
}

export default Transform
