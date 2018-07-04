import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { themify, themeProps } from "@staccx/theme"
import themePropTypes from "../constants/themePropTypes"

const List = ({ children, className, ordered, ...restProps }) => {
  if (!ordered) {
    return (
      <ListUl className={className} {...restProps}>
        {children}
      </ListUl>
    )
  }
  return (
    <ListOl className={className} {...restProps}>
      {children}
    </ListOl>
  )
}

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

export const ListOl = ListUl.withComponent("ol")

List.defaultProps = {
  className: "",
  ordered: false
}

List.propTypes = {
  children: themeProps.children.isRequired,
  className: PropTypes.string,
  ordered: PropTypes.bool
}

export default List
