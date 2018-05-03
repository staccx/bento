import React from "react"
import PropTypes from "prop-types"
import styled, { css } from "styled-components"
import { themify, spacing, wrapper } from "@staccx/theme"

const Layout = ({ grid, children, className }) => (
  <LayoutContainer className={className} grid={grid}>
    {children}
  </LayoutContainer>
)

export const LAYOUT = "LAYOUT"

const layoutStyle = layout => {
  switch (layout) {
    case "stonehenge":
      return css`
        grid-template-columns: 1fr minmax(320px, 1fr) minmax(320px, 1fr) 1fr;
        grid-template-areas:
          "header  header  header  header"
          ".  main  main  ."
          ".  body  aside  ."
          "footer  footer  footer  footer";
      `
    case "columnNarrow":
      return css`
        grid-template-columns: 1fr ${wrapper.small} 1fr;
        grid-template-areas:
          ".  header  ."
          ".  main  ."
          ".  body  ."
          ".  aside  ."
          ".  footer  .";
        grid-auto-flow: column;
      `
    default:
      break
  }
}

export const LayoutContainer = styled.div`
  display: grid;
  grid-row-gap: ${spacing.medium};
  grid-column-gap: ${spacing.medium};
  ${props => layoutStyle(props.grid)};
  ${themify(LAYOUT)};
`

Layout.defaultProps = {
  className: "",
  grid: "stonehenge"
}

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element
  ]).isRequired,
  className: PropTypes.string,
  grid: PropTypes.string
}

export default Layout
