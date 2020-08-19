import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { applyVariants, commonPropTypes } from "../../theming"
import themeProps from "./anchor.themeProps"
import { componentCreateFactory } from "../../theming/utils/createVariantsFunctionFactory"

/** Anchor
 Anchor is an HTML tag, that is used to define the beginning and end of a hypertext link.
 Anchor helps search engines to determine the subject matter of the destination URL.
 Users can click on the tag to react the link target, like with a normal `<a>` -tag
 **/
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
