import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { themify, spacing, grid } from "@staccx/theme"

const Layout = ({ grid, children, className }) => (
  <LayoutContainer className={className} grid={grid}>
    {children}
  </LayoutContainer>
)

export const LAYOUT = "LAYOUT"

export const LayoutContainer = styled.div`
  display: grid;
  grid-row-gap: ${spacing.medium};
  grid-column-gap: ${spacing.medium};
  ${grid};
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
