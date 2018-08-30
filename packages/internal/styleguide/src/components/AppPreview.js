import React, { Component } from "react"
import PropTypes from "prop-types"
import { ThemeProvider } from "@staccx/theme"

class AppPreview extends Component {
  render() {
    console.log(this.props.themes[this.props.themeName])
    return (
      <ThemeProvider
        themeName={this.props.themeName}
        themes={this.props.themes}
      >
        {this.props.app}
      </ThemeProvider>
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
