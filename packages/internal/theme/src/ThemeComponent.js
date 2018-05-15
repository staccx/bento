import React from "react"
import { withTheme } from "styled-components"
import { VARIANT_DEFAULT } from "./_constants"

class ThemeComponent extends React.Component {
  render() {
    const {
      theme,
      tagName,
      fallback,
      children,
      variant = VARIANT_DEFAULT,
      ...props
    } = this.props

    if (!variant) {
      console.warn("Variant must be specified", tagName)
      return null
    }

    const Component =
      !theme || !tagName || !theme.hasOwnProperty(tagName)
        ? fallback
        : theme[tagName]

    if (!Component) {
      console.warn("Tagname is not present in theme", tagName, variant, theme)
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
        tagName,
        variant,
        fallback,
        theme
      )
      return null
    }
    return <SubComponent {...props}>{children}</SubComponent>
  }
}

export default withTheme(ThemeComponent)
