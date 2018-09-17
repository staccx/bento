import PropTypes from "prop-types"
import React from "react"
import { Consumer } from "./context"

class TranslatedText extends React.Component {
  render() {
    const { i18nKey, children } = this.props
    return (
      <Consumer>
        {({ translate, texts }) => {
          console.log("attempt to translate " + i18nKey, texts)

          const value = translate(i18nKey)
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
