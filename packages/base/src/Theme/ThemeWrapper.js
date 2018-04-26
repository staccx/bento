import React, { Component } from "react"
import { ThemeProvider } from "styled-components"
import PropTypes from "prop-types"
import themeManager from "./baseTheme"

/**
 * NOTE : https://github.com/styled-components/styled-components/issues/1333.
 * TODO: Implement once this is merged into style-components
 */
export default class ThemeWrapper extends Component {
  componentWillMount() {
    themeManager.addReset(this.props.reset).resetCSS()
  }
  render() {
    return (
      <ThemeProvider theme={themeManager.theme}>
        {this.props.children}
      </ThemeProvider>
    )
  }
}

ThemeWrapper.propTypes = {
  children: PropTypes.object.isRequired,
  resets: PropTypes.string
}
