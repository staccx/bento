import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { applyVariants, commonPropTypes } from "../../theming"
import { componentCreateFactory } from "../../theming/utils/createVariantsFunctionFactory"
import themeProps from "./List.themeProps"

/**
 * List is the base list component all the other lists are based on, without List as a wrapper they would not work as
 * intended
 */
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

export const ListUl = styled.ul`
  list-style-type: none;
  margin-left: 0;
  padding-left: 0;
  ${applyVariants(themeProps.list)};
`

export const ListOl = ListUl.withComponent("ol")

const defaultProps = {
  ordered: false
}

const propTypes = {
  children: commonPropTypes.children.isRequired,
  className: PropTypes.string,
  /**
   * Prop to set ordered or unordered List (ul/ol)
   */
  ordered: PropTypes.bool
}

List.defaultProps = defaultProps
List.propTypes = propTypes
List.themeProps = themeProps
List.createVariants = componentCreateFactory(List)

export default List
