import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { spacing as space, themify } from "@staccx/theme"

const ItemGroup = ({ children, spacing }) => (
  <Wrap>
    <ItemGroupElement spacing={spacing}>{children}</ItemGroupElement>
  </Wrap>
)
export const ITEM_GROUP_WRAPPER = "ITEM_GROUP_WRAPPER"
const Wrap = styled.div`
  overflow: hidden;
  ${themify(ITEM_GROUP_WRAPPER)};
`

export const ITEM_GROUP = "ITEM_GROUP"
const ItemGroupElement = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 -${p => space(p.spacing)} -${p => p.spacing};
  & > * {
    margin: 0 ${p => space(p.spacing)} ${p => p.spacing};
  }
  ${themify(ITEM_GROUP)};
`

ItemGroup.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element,
    PropTypes.string,
    PropTypes.array
  ]).isRequired,
  spacing: PropTypes.oneOf([
    "micro",
    "tiny",
    "small",
    "medium",
    "mediumPlus",
    "large",
    "huge"
  ])
}

ItemGroup.defaultProps = {
  spacing: "tiny"
}

export default ItemGroup
