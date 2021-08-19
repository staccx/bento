import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import {
  color,
  borderRadius,
  spacing,
  targetSize,
  font,
  fontFamily,
  fontWeight,
  applyVariants,
  commonPropTypes
} from "../../theming"
import themeProps from "./Button.themeProps"
import { componentCreateFactory } from "../../theming/utils/createVariantsFunctionFactory"

const ButtonComp = styled.button`
  background-color: ${color.primary};
  color: ${color.white};
  border-width: 0;
  border-radius: ${borderRadius};
  padding: ${spacing.tiny} ${spacing.medium};
  cursor: pointer;
  min-height: ${targetSize.normal};
  text-decoration: none;
  text-align: center;
  display: inline-block;
  font-size: ${font.base};
  font-family: ${fontFamily.body};
  line-height: 32px;
  font-weight: ${fontWeight.bold};
  white-space: nowrap;
  justify-content: center;
  align-items: center;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  transition: background 0.2s ease;

  &:hover,
  &:focus {
    outline: none;
    background-color: ${color.primary};
    color: ${color.white};
  }

  ${applyVariants(themeProps.button)};
`
/**
 * Button component
 */
const Button = React.forwardRef((props, ref) => (
  <ButtonComp ref={ref} {...props} />
))

const defaultProps = {
  children: "button",
  onClick: null
}

const propTypes = {
  children: commonPropTypes.children.isRequired,
  /**
   * Click callback. Lets you do stuff onClick
   * @export
   */
  onClick: PropTypes.func
}

Button.defaultProps = defaultProps
Button.propTypes = propTypes
Button.themeProps = themeProps
Button.createVariants = componentCreateFactory(Button)
Button.displayName = "Button"

export default Button
