import React from "react"
import PropTypes from "prop-types"
import styled, { css } from "styled-components"
import { themify, spacing, grid, themeProps } from "@staccx/theme"
import themePropTypes from "../../constants/themePropTypes"

const Layout = ({
  grid,
  children,
  className,
  variant,
  columnGap,
  rowGap,
  paddingTop,
  paddingBottom,
  ...restProps
}) => (
  <LayoutContainer
    className={className}
    grid={grid}
    variant={variant}
    columnGap={columnGap}
    rowGap={rowGap}
    paddingTop={paddingTop}
    paddingBottom={paddingBottom}
    {...restProps}
  >
    {children}
  </LayoutContainer>
)

Layout.themeProps = {
  container: {
    name: "LAYOUT",
    description: "",
    type: themePropTypes.style
  }
}

const isNotFlush = space => {
  switch (space) {
    case "flush":
      return false
    default:
      return true
  }
}

export const LayoutContainer = styled.div`
  display: grid;
  ${p =>
    isNotFlush(p.rowGap) &&
    css`
      grid-row-gap: ${spacing(p.rowGap)};
    `};
  ${p =>
    isNotFlush(p.columnGap) &&
    css`
      grid-column-gap: ${spacing(p.columnGap)};
    `};
  ${p =>
    isNotFlush(p.paddingBottom) &&
    css`
      padding-bottom: ${spacing(p.paddingBottom)};
    `};
  ${p =>
    isNotFlush(p.paddingTop) &&
    css`
      padding-top: ${spacing(p.paddingTop)};
    `};
  ${p => p.grid && grid};
  ${themify(Layout.themeProps.container)};
`

Layout.defaultProps = {
  className: "",
  grid: null,
  columnGap: "medium",
  rowGap: "medium",
  paddingBottom: "flush",
  paddingTop: "flush"
}

Layout.propTypes = {
  children: themeProps.children.isRequired,
  className: PropTypes.string,
  grid: PropTypes.string,
  columnGap: themeProps.spacing,
  rowGap: themeProps.spacing,
  paddingBottom: themeProps.spacing,
  paddingTop: themeProps.spacing
}

export default Layout
