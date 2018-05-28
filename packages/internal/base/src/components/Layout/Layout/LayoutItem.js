import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { themify } from "@staccx/theme"

const LayoutItem = ({ area, children, className }) => (
  <LayoutItemContainer className={className} area={area}>
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
  grid: "stonehenge"
}

LayoutItem.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element,
    PropTypes.string,
    PropTypes.array
  ]).isRequired,
  className: PropTypes.string,
  grid: PropTypes.string
}

export default LayoutItem
