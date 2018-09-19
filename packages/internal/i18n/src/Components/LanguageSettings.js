import PropTypes from "prop-types"
import React from "react"
import { Consumer } from "./context"

class LanguageSettings extends React.Component {
  render() {
    if (this.props.children) {
      return <Consumer>{props => this.props.children(props)}</Consumer>
    }
    return (
      <Consumer>
        {({ setLanguage, language, languages }) => (
          <select
            id={"languages"}
            onChange={e => setLanguage(e.target.value)}
            value={language}
          >
            {languages.map(lang => (
              <option key={lang} value={lang}>
                {lang}
              </option>
            ))}
          </select>
        )}
      </Consumer>
    )
  }
}

export default LanguageSettings

LanguageSettings.propTypes = {
  children: PropTypes.func
}
