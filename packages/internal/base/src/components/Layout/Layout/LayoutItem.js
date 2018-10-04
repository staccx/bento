import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { themify, themeProps } from "@staccx/theme"
import themePropTypes from "../../../constants/themePropTypes"

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

LayoutItem.themeProps = {
  container: {
    name: "LAYOUT_ITEM",
    description: "",
    type: themePropTypes.style
  }
}

export const LayoutItemContainer = styled.div`
  grid-area: ${props => props.area};
  ${themify(LayoutItem.themeProps.container)};
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
