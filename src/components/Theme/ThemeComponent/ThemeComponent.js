import React from "react"
import { useTheme } from "styled-components"
import { commonPropTypes, VARIANT_DEFAULT } from "../../../theming"
import PropTypes from "prop-types"

/**
 * When you need a component inside the theme. E.g a logo that changes between themes or whatever you need
 */
const ThemeComponent = ({
  tagName,
  fallback,
  children,
  variant = VARIANT_DEFAULT,
  ...props
}) => {
  const theme = useTheme()
  const name = tagName.name ? tagName.name : tagName
  if (!variant) {
    console.warn("Variant must be specified", name)
    return null
  }

  const Component =
    !theme || !name || !theme.hasOwnProperty(name) ? fallback : theme[name]

  if (!Component) {
    console.warn("Tagname is not present in theme", name, variant, theme)
    return null
  }

  const SubComponent = Component.hasOwnProperty(variant)
    ? Component[variant]
    : typeof Component === "object"
    ? fallback
    : Component

  if (!SubComponent) {
    console.warn(
      "Could not find component nor subcomponent in theme.",
      name,
      variant,
      fallback,
      theme
    )
    return null
  }
  return <SubComponent {...props}>{children}</SubComponent>
}

ThemeComponent.propTypes = {
  children: commonPropTypes.children,
  /**
   * Title element
   */
  fallback: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.array,
    PropTypes.func
  ]).isRequired,
  /**
   * Name to look after in theme
   */
  tagName: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({
      name: PropTypes.string,
      description: PropTypes.string,
      type: PropTypes.string
    })
  ]).isRequired,
  /**
   * variant(s)
   */
  variant: commonPropTypes.variant
}

export default ThemeComponent
