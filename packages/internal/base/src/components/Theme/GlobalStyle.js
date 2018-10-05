import { createGlobalStyle } from "styled-components"
import PropTypes from "prop-types"

const GlobalStyle = createGlobalStyle`
  ${({ name, theme }) => {
    if (!theme.hasOwnProperty(name)) {
      console.warn(
        "Cannot apply global style. not present in theme",
        theme,
        name
      )
      return null
    }
    return theme[name]
  }}
`

GlobalStyle.propTypes = {
  name: PropTypes.string
}

GlobalStyle.defaultProps = {
  name: "global"
}

export default GlobalStyle
