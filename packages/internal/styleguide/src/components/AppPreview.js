import React, { Component } from "react"
import PropTypes from "prop-types"
import { ThemeProvider } from "styled-components"

class AppPreview extends Component {
  render() {
    return (
      <ThemeProvider theme={this.props.theme}>{this.props.app}</ThemeProvider>
    )
  }
}

AppPreview.propTypes = {
  app: PropTypes.any.isRequired,
  themeName: PropTypes.string.isRequired,
  themes: PropTypes.array.isRequired
}

export default AppPreview

AppPreview.defaultProps = {
  themeName: "Stacc"
}
