import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { applyVariants, commonPropTypes } from "../../theming"
import themeProps from "./anchor.themeProps"
import { componentCreateFactory } from "../../theming/utils/createVariantsFunctionFactory"

const Anchor = ({ children, className, ...restProps }) => (
  <AComponent className={className} {...restProps}>
    {children}
  </AComponent>
)

export const AComponent = styled.a`
  text-decoration: none;
  color: currentColor;

  &:hover,
  &:active,
  &:focus {
    text-decoration: none;
    color: currentColor;
    outline: none;
  }

  ${applyVariants(themeProps.anchor)};
`

Anchor.defaultProps = {
  className: "",
  href: ""
}

Anchor.propTypes = {
  children: commonPropTypes.children.isRequired,
  /**
   * URL prop
   */
  href: PropTypes.string,
  className: PropTypes.string
}
Anchor.themeProps = themeProps
Anchor.createVariants = componentCreateFactory(Anchor)

export default Anchor
