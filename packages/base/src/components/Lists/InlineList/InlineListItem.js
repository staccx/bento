import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

const InlineListItem = ({ className, children, ...rest }) => (
  <ListItem className={className} {...rest}>
    {children}
  </ListItem>
)

const ListItem = styled.li`
  display: inline-block;
`

InlineListItem.defaultProps = {
  className: ""
}

InlineListItem.propTypes = {
  children: PropTypes.any.isRequired,
  className: PropTypes.string
}

export default InlineListItem
