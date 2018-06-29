import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { themify, themeProps } from "@staccx/theme"

const List = ({ children, className, ...restProps }) => (
  <ListUl className={className} {...restProps}>
    {children}
  </ListUl>
)

export const LIST = "LIST"

export const ListUl = styled.ul`
  list-style-type: none;
  margin-left: 0;
  padding-left: 0;
  ${themify(LIST)};
`

List.defaultProps = {
  className: ""
}

List.propTypes = {
  children: themeProps.children.isRequired,
  className: PropTypes.string
}

export default List
