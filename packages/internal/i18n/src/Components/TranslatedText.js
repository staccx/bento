import PropTypes from "prop-types"
import React from "react"
import { Consumer } from "./context"

class TranslatedText extends React.Component {
  render() {
    const { i18nKey, children, data, fallback } = this.props
    return (
      <Consumer>
        {({ translate, initialized }) => {
          if (!initialized) {
            // Has not been initialized
            return null
          }
          if (Array.isArray(i18nKey)) {
            if (
              fallback &&
              !Array.isArray(fallback) &&
              fallback.length !== i18nKey.length
            ) {
              throw new Error(
                `When using array mode with fallback, supply equal amount of fallback as keys. Should be ${
                  i18nKey.length
                }`
              )
            }
            const values = i18nKey.map((k, index) =>
              translate(k, data, fallback ? fallback[index] : null)
            )

            if (!children) {
              throw new Error(
                "Not supported. When using multiple keys, only render props is supported. Please supply function"
              )
            }

            return children(values)
          }

          const value = translate(i18nKey, data, fallback)
          if (!value) {
            if (children) {
              if (typeof children !== "function") {
                return children // Fallback to children
              }
            }
            return null
          }
          if (children) {
            if (typeof children === "function") {
              return children(value)
            }
          }
          return value
        }}
      </Consumer>
    )
  }
}

TranslatedText.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element,
    PropTypes.string,
    PropTypes.number,
    PropTypes.array,
    PropTypes.func
  ]),
  i18nKey: PropTypes.string.isRequired
}

export default TranslatedText
