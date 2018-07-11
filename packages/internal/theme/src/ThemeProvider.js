import React, { Component } from "react"
import {
  ThemeProvider as StyledThemeProvider,
  injectGlobal
} from "styled-components"
import { Provider } from "./themeContext"
import PropTypes from "prop-types"
import Theme from "./theme"

export default class ThemeProvider extends Component {
  constructor(props, context) {
    super(props, context)

    this.state = {
      themes: props.themes
    }
  }

  componentWillMount() {
    this.reset()
  }

  reset() {
    const { themes } = this.state

    const theme = themes[this.props.themeName]
    if (!theme) {
      console.error("No theme")
      return
    }
    if (theme.webfonts) {
      const WebFont = require("webfontloader")
      WebFont.load(theme.webfonts)
    }

    injectGlobal`
    ${theme.reset({ theme })};
    ${theme.global}
    `
  }

  render() {
    const { themes } = this.state
    const theme = themes[this.props.themeName]
    if (!theme) {
      return null
    }
    return (
      <StyledThemeProvider theme={theme}>
        <Provider
          value={{
            themes
          }}
        >
          {this.props.children}
        </Provider>
      </StyledThemeProvider>
    )
  }
}

ThemeProvider.propTypes = {
  children: PropTypes.any,
  resets: PropTypes.string,
  themeName: PropTypes.string.isRequired,
  themes: PropTypes.objectOf(PropTypes.instanceOf(Theme)).isRequired
}
