import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { applyVariants } from "../../../theming"
import themeProps from "./InlineList.themeProps"
import { componentCreateFactory } from "../../../theming/utils/createVariantsFunctionFactory"

/**
 * InlineList wil render the elements inside the list inline.
 */
const InlineListItem = ({ className, children, ...rest }) => (
  <ListItem className={className} {...rest}>
    {children}
  </ListItem>
)

const ListItem = styled.li`
  display: inline-block;
  ${applyVariants(themeProps.listItem)};
`

InlineListItem.defaultProps = {
  className: ""
}

InlineListItem.propTypes = {
  children: PropTypes.any.isRequired,
  className: PropTypes.string
}
InlineListItem.themeProps = themeProps
InlineListItem.createVariants = componentCreateFactory(InlineListItem)

export default InlineListItem
