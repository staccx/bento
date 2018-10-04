import React from "react"
import { withTheme } from "styled-components"
import { VARIANT_DEFAULT } from "../../theming/_constants"

// TODO: Rename
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
}

export default withTheme(ThemeComponent)
