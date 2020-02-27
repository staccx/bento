import React from "react"
import { ThemeProvider as StyledThemeProvider } from "styled-components"
import PropTypes from "prop-types"
import WebFonts from "../WebFonts"
import GlobalStyle from "../GlobalStyle"
import { theme as instance } from "../../../theming"

/**
 * ThemeProvider is used to wrap you app. It will provide children with correct context
 * It also ensures usage of GlobalStyle and WebFonts
 * @param children
 * @param theme (optional)
 * @return {*}
 * @constructor
 */
const ThemeProvider = ({ children, theme }) => {
  return (
    <StyledThemeProvider theme={theme ?? instance}>
      <>
        <GlobalStyle />
        <WebFonts />
        {children}
      </>
    </StyledThemeProvider>
  )
}

ThemeProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element,
    PropTypes.func,
    PropTypes.string
  ]).isRequired,
  /**
   * Theme to override instance
   */
  theme: PropTypes.object
}
ThemeProvider.defaultProps = {
  theme: instance
}

export default ThemeProvider
