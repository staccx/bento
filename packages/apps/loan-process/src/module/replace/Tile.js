import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { spacing, color, font } from "@staccx/theme"

export const TileHeading = styled.h2`
  padding: 0 ${spacing.medium} ${spacing.small};
  font-size: ${font.h4};
  font-weight: 300;
  color: ${color.blue};
`

const Tile = ({ children, className, ...otherProps }) => (
  <TileElement className={className} {...otherProps}>
    {children}
  </TileElement>
)

const TileElement = styled.div`
  background: ${color.white};
  box-shadow: rgba(0, 0, 75, 0.015) 0px 2px 2px,
    rgba(0, 0, 75, 0.015) 0px 4px 4px, rgba(0, 0, 75, 0.015) 0px 8px 8px,
    rgba(0, 0, 75, 0.015) 0px 16px 16px, rgba(0, 0, 75, 0.015) 0px 32px 32px,
    rgba(0, 0, 75, 0.015) 0px 64px 64px;
  border: 1px solid ${color.line};
  border-radius: 2px;
  padding: ${spacing.medium} 0;
  -webkit-column-break-inside: avoid;
  break-inside: avoid;
  page-break-inside: avoid;
`

Tile.defaultProps = {
  className: ""
}

Tile.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element,
    PropTypes.string,
    PropTypes.array
  ]).isRequired,
  className: PropTypes.string
}

export default Tile
