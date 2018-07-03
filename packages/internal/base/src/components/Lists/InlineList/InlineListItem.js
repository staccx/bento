import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { themify } from "@staccx/theme"
import themePropTypes from "../../constants/themePropTypes"

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
  ${themify(InlineListItem.themeProps.listItem)};
`

InlineListItem.defaultProps = {
  className: ""
}

InlineListItem.propTypes = {
  children: PropTypes.any.isRequired,
  className: PropTypes.string
}

export default InlineListItem
