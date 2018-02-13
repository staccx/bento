import React, { Component } from "react"
import { ThemeProvider } from "styled-components"
import theme from "./baseTheme"
import cssReset from './cssResets'

export default class ThemeWrapper extends Component {
  render() {
    cssReset();
    return <ThemeProvider theme={theme}>{this.props.children}</ThemeProvider>
  }
}
