import PropTypes from "prop-types"
import React from "react"
import { Provider } from "./context"

class LanguageProvider extends React.Component {
  render() {
    return (
      <Provider
        value={{
          languages: this.props.languages,
          language: this.props.language,
          setLanguage: this.props.setLanguage,
          texts: this.props.texts
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
  language: PropTypes.any.isRequired,
  languages: PropTypes.array.isRequired,
  setLanguage: PropTypes.func.isRequired,
  texts: PropTypes.object.isRequired
}
