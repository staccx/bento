import get from "lodash.get"
import { VARIANT_DEFAULT } from "../themeContants"
import { themeLogger } from "../theme.logger"

export const applyVariables = name => props => {
  const { variant = VARIANT_DEFAULT, theme } = props
  if (!theme) {
    themeLogger.warn("No theme!", variant)
    return null
  }

  if (!name) {
    themeLogger.warn("No name!", variant, theme)
    return null
  }

  const styles = get(theme, `variables.${name}`)

  if (!styles || !styles[variant]) {
    themeLogger.warn(
      "Could not find any styles for variant",
      variant,
      `variables_${name}`
    )
    return null
  }

  return styles[variant]
}
