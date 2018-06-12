import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { themify, themeProps } from "@staccx/theme"

const LayoutItem = ({ area, children, className, variant, ...rest }) => (
  <LayoutItemContainer
    className={className}
    area={area}
    variant={variant}
    {...rest}
  >
    {children}
  </LayoutItemContainer>
)

export const LAYOUT_ITEM = "LAYOUT_ITEM"

export const LayoutItemContainer = styled.div`
  grid-area: ${props => props.area};
  ${themify(LAYOUT_ITEM)};
`

LayoutItem.defaultProps = {
  className: "",
  area: "",
  variant: ""
}

LayoutItem.propTypes = {
  children: themeProps.children.isRequired,
  className: PropTypes.string,
  area: PropTypes.string,
  variant: PropTypes.string
}

export default LayoutItem
