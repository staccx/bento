import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { spacing, themify } from "@staccx/theme"

const PackItem = ({ className, children, ...rest }) => (
  <ListItem className={className} {...rest}>
    {children}
  </ListItem>
)

export const PACK_ITEM = "PACK_ITEM"
const ListItem = styled.li`
  display: inline-block;
  padding: ${spacing.small()};
  ${themify(PACK_ITEM)};
`

PackItem.defaultProps = {
  className: ""
}

PackItem.propTypes = {
  children: PropTypes.any.isRequired,
  className: PropTypes.string
}

export default PackItem
