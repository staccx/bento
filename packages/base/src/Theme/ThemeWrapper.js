import React, { Component } from "react"
import { ThemeProvider } from "styled-components"
import PropTypes from "prop-types"
import baseTheme from "./baseTheme"
import cssReset from "../Styles/cssResets"

/**
 * NOTE : https://github.com/styled-components/styled-components/issues/1333.
 * TODO: Implement once this is merged into style-components
 */
export default class ThemeWrapper extends Component {
  render() {
    cssReset(this.props.resets)
    const theme = Object.assign({}, baseTheme, this.props.theme)
    return <ThemeProvider theme={theme}>{this.props.children}</ThemeProvider>
  }
}

ThemeWrapper.propTypes = {
  children: PropTypes.object.isRequired,
  theme: PropTypes.object,
  resets: PropTypes.string
}
