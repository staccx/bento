import PropTypes from "prop-types"
import { useI18n } from "../I18n"
import i18next from "i18next"
import { getComponent } from "../utils"
import { useEffect, useState } from "react"

/**
 * Component for transformation
 * @param children
 * @param value
 */
const Transform = ({ children, data }) => {
  const { transform } = useI18n()
  const [value, valueSet] = useState(children ?? null)

  useEffect(() => {
    valueSet(transform(data, children))
  }, [i18next, data, transform])

  if (Array.isArray(value)) {
    return value.map(getComponent)
  }

  return value || null
}

Transform.propTypes = {
  data: PropTypes.any.isRequired
}

export default Transform
