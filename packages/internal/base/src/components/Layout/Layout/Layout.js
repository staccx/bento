import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { themify, spacing, grid } from "@staccx/theme"

const Layout = ({ grid, children, className, variant, columnGap, rowGap }) => (
  <LayoutContainer
    className={className}
    grid={grid}
    variant={variant}
    columnGap={columnGap}
    rowGap={rowGap}
  >
    {children}
  </LayoutContainer>
)

export const LAYOUT = "LAYOUT"

export const LayoutContainer = styled.div`
  display: grid;
  grid-row-gap: ${p => (p.rowGap === "flush" ? 0 : spacing(p.rowGap))};
  grid-column-gap: ${p => (p.columnGap === "flush" ? 0 : spacing(p.columnGap))};
  ${p => p.grid && grid};
  ${themify(LAYOUT)};
`

Layout.defaultProps = {
  className: "",
  grid: null,
  columnGap: "medium",
  rowGap: "medium"
}

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element
  ]).isRequired,
  className: PropTypes.string,
  grid: PropTypes.string,
  columnGap: PropTypes.oneOf([
    "huge",
    "large",
    "mediumPlus",
    "medium",
    "small",
    "tiny",
    "micro",
    "flush"
  ]),
  rowGap: PropTypes.oneOf([
    "huge",
    "large",
    "mediumPlus",
    "medium",
    "small",
    "tiny",
    "micro",
    "flush"
  ])
}

export default Layout
