import PropTypes from "prop-types"
import React from "react"
import { Consumer } from "./context"

class TranslatedText extends React.Component {
  render() {
    const { i18nKey, children, data } = this.props
    return (
      <Consumer>
        {({ translate, initialized }) => {
          if (!initialized) {
            return null
          }
          const value = translate(i18nKey, data)
          if (!value) {
            // Has not been initialized
            return null
          }

          if (children) {
            return children(value)
          }
          return value
        }}
      </Consumer>
    )
  }
}

TranslatedText.propTypes = {
  children: PropTypes.func,
  i18nKey: PropTypes.string.isRequired
}

export default TranslatedText
