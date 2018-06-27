import React, { Component } from "react"
import { ThemeProxyProvider } from "@staccx/theme"
import PropTypes from "prop-types"
import { styleguideTheme } from "./baseTheme"

/**
 * NOTE : https://github.com/styled-components/styled-components/issues/1333.
 * TODO: Implement once this is merged into style-components
 */
export default class ThemeWrapper extends Component {
  render() {
    const { theme } = this.props

    return (
      <ThemeProxyProvider theme={theme}>
        {this.props.children}
      </ThemeProxyProvider>
    )
  }
}

ThemeWrapper.propTypes = {
  children: PropTypes.object.isRequired,
  resets: PropTypes.string,
  theme: PropTypes.shape({
    global: PropTypes.any,
    reset: PropTypes.func
  }).isRequired
}

ThemeWrapper.defaultProps = {
  theme: styleguideTheme
}
