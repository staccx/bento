import PropTypes from "prop-types"
import { useI18n, i18nLogger } from "../I18n"

import { getComponent } from "../utils"

/**
 * Component for transformation
 * @param children
 * @param value
 */
const Transform = ({ children, data }) => {
  const { transform } = useI18n()

  const value = transform(data, children)
  if (!value) {
    if (children) {
      i18nLogger.debug("Falling back to children")
      if (typeof children !== "function") {
        return children // Fallback to children
      }
      return children(null)
    }

    return null
  }
  let result = value
  if (Array.isArray(value)) {
    result = value.map(getComponent)
  }

  return result
}

Transform.propTypes = {
  data: PropTypes.any.isRequired
}

export default Transform
