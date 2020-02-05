import { withTheme } from "styled-components"

const WebFonts = ({ theme }) => {
  if (theme.webfonts) {
    const WebFont = require("webfontloader")
    WebFont.load(theme.webfonts)
  }
  return null
}
export default withTheme(WebFonts)
