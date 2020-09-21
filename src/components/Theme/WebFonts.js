import { withTheme } from "styled-components"

const WebFonts = ({ theme }) => {
  /**
   * We need to check whether window is available
   * @type {null|Window}
   */
  const w = typeof window === "undefined" ? null : window
  if (theme.webfonts && w) {
    const WebFont = require("webfontloader")
    WebFont.load(theme.webfonts)
  }
  return null
}
export default withTheme(WebFonts)
