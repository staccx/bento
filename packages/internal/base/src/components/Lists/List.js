import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { themify, themeProps } from "@staccx/theme"
import themePropTypes from "../constants/themePropTypes"

const List = ({ children, className, ...restProps }) => (
  <ListUl className={className} {...restProps}>
    {children}
  </ListUl>
)

List.themeProps = {
  list: {
    name: "LIST",
    description: "",
    type: themePropTypes.style
  }
}
export const ListUl = styled.ul`
  list-style-type: none;
  margin-left: 0;
  padding-left: 0;
  ${themify(List.themeProps.list)};
`

List.defaultProps = {
  className: ""
}

List.propTypes = {
  children: themeProps.children.isRequired,
  className: PropTypes.string
}

export default List
