import React, { Component } from "react"
import { ThemeProvider } from "styled-components"
import PropTypes from "prop-types"
import baseTheme from "./baseTheme"
import cssReset from "../Styles/cssResets"

export default class ThemeWrapper extends Component {
  render() {
    cssReset()
    const theme = Object.assign({}, baseTheme, this.props.theme)

    return <ThemeProvider theme={theme}>{this.props.children}</ThemeProvider>
  }
}

ThemeWrapper.propTypes = {
  children: PropTypes.object.isRequired,
  theme: PropTypes.object
}
