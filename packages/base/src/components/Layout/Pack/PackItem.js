import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

const PackItem = ({ className, children, ...rest }) => (
  <ListItem className={className} {...rest}>
    {children}
  </ListItem>
)

const ListItem = styled.li`
  display: inline-block;
  padding: ${p => p.theme.spacing.small};
`

PackItem.defaultProps = {
  className: ""
}

PackItem.propTypes = {
  children: PropTypes.any.isRequired,
  className: PropTypes.string
}

export default PackItem
