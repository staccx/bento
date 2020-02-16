import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { applyVariants, commonPropTypes, themePropTypes } from "../../theming"

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
  ${applyVariants(List.themeProps.list)};
`

export const ListOl = ListUl.withComponent("ol")

List.defaultProps = {
  className: "",
  ordered: false
}

List.propTypes = {
  children: commonPropTypes.children.isRequired,
  className: PropTypes.string,
  /**
   * Prop to set ordered or unordered List (ul/ol)
   */
  ordered: PropTypes.bool
}

export default List
