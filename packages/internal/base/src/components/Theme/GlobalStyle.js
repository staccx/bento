import { createGlobalStyle } from "styled-components"
import flattenGlobals from "../../theming/utils/flattenGlobals"

const GlobalStyle = createGlobalStyle`
  ${props => {
    console.log(props)
    return flattenGlobals(props.theme)
  }}
`

export default GlobalStyle
