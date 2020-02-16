import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { applyVariants, spacing, commonPropTypes } from "../../../theming"

const PackItem = ({ className, children, ...rest }) => (
  <ListItem className={className} {...rest}>
    {children}
  </ListItem>
)

export const PACK_ITEM = "PACK_ITEM"
const ListItem = styled.li`
  display: inline-block;
  padding: ${spacing.small};
  ${applyVariants(PACK_ITEM)};
`

PackItem.defaultProps = {
  className: ""
}

PackItem.propTypes = {
  /**
   * The component require a child.
   */
  children: commonPropTypes.children.isRequired,
  /**
   * The component can be assigned a class.
   */
  className: PropTypes.string
}

export default PackItem
