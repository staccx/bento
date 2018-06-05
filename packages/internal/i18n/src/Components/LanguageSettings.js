import PropTypes from "prop-types"
import React from "react"
import { SelectSimple } from "@staccx/base"
import { Consumer } from "./context"

class LanguageSettings extends React.Component {
  render() {
    if (this.props.children) {
      return <Consumer>{props => this.props.children(props)}</Consumer>
    }
    return (
      <Consumer>
        {({ setLanguage, language, languages }) => {
          return (
            <SelectSimple
              id={"languages"}
              onChange={setLanguage}
              defaultValue={language}
            >
              {languages.map(lang => <option value={lang}>{lang}</option>)}
            </SelectSimple>
          )
        }}
      </Consumer>
    )
  }
}

export default LanguageSettings

LanguageSettings.propTypes = {
  children: PropTypes.func
}
