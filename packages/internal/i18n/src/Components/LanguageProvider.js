import PropTypes from "prop-types"
import React from "react"
import { Provider } from "./context"
import i18n from "../i18n"

class LanguageProvider extends React.Component {
  constructor(props, context) {
    super(props, context)

    this.state = {
      language: props.language,
      languages: props.languages,
      texts: props.texts,
      data: props.data,
      initialized: false
    }

    this.setLanguage = this.setLanguage.bind(this)
    LanguageProvider.translate = LanguageProvider.translate.bind(this)
    i18n.init(props).then(language => {
      this.setLanguage(language, { initialized: true })
    })
  }

  /**
   * Set language. Keep the language in state to allow for updating
   * @param language
   */
  setLanguage(language, otherState = {}) {
    if (this.state.languages.indexOf(language) !== -1) {
      i18n.setLanguage(language)
      this.setState({ language, ...otherState })
    }
  }

  /***
   * Translate to text. Use data param for formatting. See https://github.com/alexei/sprintf.js
   * @param key
   * @param data
   * @returns {string|*}
   */
  static translate(key, data) {
    return i18n.translate(key, data)
  }

  render() {
    return (
      <Provider
        value={{
          ...this.state,
          setLanguage: this.setLanguage,
          translate: LanguageProvider.translate
        }}
      >
        {this.props.children}
      </Provider>
    )
  }
}

export default LanguageProvider

LanguageProvider.propTypes = {
  children: PropTypes.any.isRequired,
  fallbackLanguage: PropTypes.string,
  language: PropTypes.string,
  languages: PropTypes.array,
  texts: PropTypes.object
}

LanguageProvider.defaultProps = {
  fallbackLanguage: "en",
  language: "no",
  languages: ["no", "en"]
}
