import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { themify } from "@staccx/theme"

const InlineListItem = ({ className, children, ...rest }) => (
  <ListItem className={className} {...rest}>
    {children}
  </ListItem>
)
export const INLINE_LIST_ITEM = "INLINE_LIST_ITEM"
const ListItem = styled.li`
  display: inline-block;
  ${themify(INLINE_LIST_ITEM)};
`

InlineListItem.defaultProps = {
  className: ""
}

InlineListItem.propTypes = {
  children: PropTypes.any.isRequired,
  className: PropTypes.string
}

export default InlineListItem
