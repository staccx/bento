import React, { Component } from "react"
import { ThemeProvider, injectGlobal } from "styled-components"
import PropTypes from "prop-types"

/**
 * NOTE : https://github.com/styled-components/styled-components/issues/1333.
 * TODO: Implement once this is merged into style-components
 */
export default class ThemeWrapper extends Component {
  render() {
    const { theme } = this.props
    injectGlobal`
    ${theme.reset({ theme })};
    ${theme.global}
    `
    return <ThemeProvider theme={theme}>{this.props.children}</ThemeProvider>
  }
}

ThemeWrapper.propTypes = {
  children: PropTypes.object.isRequired,
  resets: PropTypes.string,
  theme: PropTypes.shape({
    global: PropTypes.any,
    reset: PropTypes.string
  }).isRequired
}
