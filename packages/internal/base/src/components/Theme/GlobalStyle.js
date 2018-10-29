import { createGlobalStyle } from "styled-components"
import flattenGlobals from "../../theming/utils/flattenGlobals"

const GlobalStyle = createGlobalStyle`
  ${({ theme }) => flattenGlobals(theme)}
`

export default GlobalStyle
