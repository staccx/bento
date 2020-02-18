import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { applyVariants, themePropTypes } from "../../../theming"

const InlineListItem = ({ className, children, ...rest }) => (
  <ListItem className={className} {...rest}>
    {children}
  </ListItem>
)

InlineListItem.themeProps = {
  listItem: {
    name: "INLINE_LIST_ITEM",
    description: "",
    type: themePropTypes.style
  }
}

const ListItem = styled.li`
  display: inline-block;
  ${applyVariants(InlineListItem.themeProps.listItem)};
`

InlineListItem.defaultProps = {
  className: ""
}

InlineListItem.propTypes = {
  children: PropTypes.any.isRequired,
  className: PropTypes.string
}

export default InlineListItem
