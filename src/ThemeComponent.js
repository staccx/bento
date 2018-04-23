import React from "react"
import {withTheme} from "styled-components"

class ThemeComponent extends React.Component {
  render() {
    const {theme, tagName, fallback, children, ...props} = this.props
    const Component = (!theme || !tagName || !theme.hasOwnProperty(tagName)) ? fallback : theme[tagName]
    return (<Component {...props}>
      {children}
    </Component>)
  }
}

export default withTheme(ThemeComponent)