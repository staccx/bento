import React, { Component } from "react"
import { ThemeProvider, injectGlobal } from "styled-components"
import PropTypes from "prop-types"
import Theme from "./baseTheme"

/**
 * NOTE : https://github.com/styled-components/styled-components/issues/1333.
 * TODO: Implement once this is merged into style-components
 */
export default class ThemeWrapper extends Component {
  render() {
    injectGlobal`${Theme.reset}`
    return <ThemeProvider theme={Theme}>{this.props.children}</ThemeProvider>
  }
}

ThemeWrapper.propTypes = {
  children: PropTypes.object.isRequired,
  resets: PropTypes.string
}
