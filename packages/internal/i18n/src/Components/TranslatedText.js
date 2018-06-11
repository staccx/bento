import PropTypes from "prop-types"
import React from "react"
import { Consumer } from "./context"

class TranslatedText extends React.Component {
  render() {
    const { i18nKey, children } = this.props
    return (
      <Consumer>
        {({ texts, language }) => {
          if (!texts) {
            console.warn("Please provide a dictionary of texts")
            return null
          }
          if (!language) {
            console.warn("No language defined!", i18nKey)
            return null
          }
          if (!texts.hasOwnProperty(i18nKey)) {
            console.warn("Key is not part of texts", i18nKey)
            return null
          }
          const entry = texts[i18nKey]
          if (!entry.hasOwnProperty(language)) {
            console.warn(`Language ${language} not found in ${i18nKey}`, entry)
            return null
          }
          const value = entry[language]
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
