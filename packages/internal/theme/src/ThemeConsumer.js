import PropTypes from "prop-types"
import React from "react"
import { Consumer } from "./themeContext"

class ThemeConsumer extends React.Component {
  render() {
    return (
      <Consumer>
        {({ themes }) => {
          const theme = themes[this.props.themeName]

          return this.props.children({ theme, themes })
        }}
      </Consumer>
    )
  }
}

export default ThemeConsumer

ThemeConsumer.propTypes = {
  children: PropTypes.func.isRequired
}
