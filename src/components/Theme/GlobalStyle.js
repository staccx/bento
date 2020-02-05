import { createGlobalStyle } from "styled-components"
import flattenGlobals from "../../theming/utils/flattenGlobals"

const GlobalStyle = createGlobalStyle`
  ${props => {
    return flattenGlobals(props.theme)
  }}
`

export default GlobalStyle
