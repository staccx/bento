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
      texts: props.texts
    }

    this.i18n = i18n
    this.i18n.init(props)

    this.setLanguage = this.setLanguage.bind(this)
    LanguageProvider.translate = LanguageProvider.translate.bind(this)
  }

  /**
   * Set language. Keep the language in state to allow for updating
   * @param language
   */
  setLanguage(language) {
    if (this.state.languages.indexOf(language) !== -1) {
      i18n.setLanguage(language)
      this.setState({ language })
    }
  }

  static translate(key) {
    return i18n.translate(key)
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
