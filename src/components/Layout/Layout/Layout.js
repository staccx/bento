import React from "react"
import PropTypes from "prop-types"
import styled, { css } from "styled-components"
import {
  spacing,
  grid,
  applyVariants,
  commonPropTypes,
  themePropTypes
} from "../../../theming"

/**
 * The default Layout-Component. Can be used with Both LayoutItem inside as well as other components.
 * Is very flexible. You can use some predefined grids with the grid-prop or you can use variants.
 * The default instance without props just add vertical spacing between items
 *
 */
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
  ${applyVariants(Layout.themeProps.container)};
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
  /**
   * The component must have a child to structure the layout.
   */
  children: commonPropTypes.children.isRequired,
  /**
   * This prop assign a class to the component to style it.
   */
  className: PropTypes.string,
  /**
   * The prop accept columns and rows.
   */
  grid: PropTypes.string,
  /**
   * The spacing between columns.
   */
  columnGap: PropTypes.string,
  /**
   * The spacing between rows.
   */
  rowGap: PropTypes.string,
  /**
   * The padding-bottom of the component.
   */
  paddingBottom: PropTypes.string,
  /**
   * The padding-top of the component.
   */
  paddingTop: PropTypes.string
}

export default Layout
