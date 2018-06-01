import React, { Component } from "react"
import { ThemeProvider, injectGlobal } from "styled-components"
import PropTypes from "prop-types"

/**
 * NOTE : https://github.com/styled-components/styled-components/issues/1333.
 * TODO: Implement once this is merged into style-components
 */
export default class ThemeProxyProvider extends Component {
  constructor(props, context) {
    super(props, context)

    this.state = {
      theme: null
    }
  }

  componentWillMount() {
    this.reset(this.props.theme)
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.theme !== nextProps.theme) {
      this.reset(nextProps)
    }
  }

  reset(theme) {
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

    this.setState({ theme: Object.assign({}, theme) })
  }

  render() {
    const { theme } = this.state
    if (!theme) {
      return null
    }
    return <ThemeProvider theme={theme}>{this.props.children}</ThemeProvider>
  }
}

ThemeProxyProvider.propTypes = {
  children: PropTypes.object.isRequired,
  resets: PropTypes.string,
  theme: PropTypes.shape({
    global: PropTypes.any,
    reset: PropTypes.func
  }).isRequired
}
