import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import {
  targetSize,
  spacing,
  borderRadius,
  fontFamily,
  fontWeight,
  font,
  color,
  themify
} from "@staccx/theme"
import themePropTypes from "../constants/themePropTypes"
const tinycolor = require("tinycolor2")

const tProps = {
  button: {
    name: "Button",
    description: "Button styles",
    type: themePropTypes.style
  }
}

const ButtonComp = styled.button`
  background-color: ${color.primary};
  color: ${p =>
    tinycolor
      .mostReadable(color.primary()(p), ["#fff"], {
        includeFallbackColors: true,
        level: "AA",
        size: "large"
      })
      .toString()};
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
    background-color: ${p =>
      tinycolor(color.primary()(p))
        .darken(5)
        .toString()};
    color: ${p =>
      tinycolor
        .mostReadable(tinycolor(color.primary()(p)).darken(5), ["#fff"], {
          includeFallbackColors: true,
          level: "AA",
          size: "large"
        })
        .toString()};
  }

  ${themify(tProps.button.name)};
`
/**
 * Button component. Use to click stuff
 */
const Button = props => <ButtonComp {...props} />

const defaultProps = {
  onClick: null,
  to: "#",
  className: ""
}

const propTypes = {
  /**
   * The children of the lamb
   */
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element,
    PropTypes.string,
    PropTypes.number,
    PropTypes.array
  ]).isRequired,
  onClick: PropTypes.func,
  className: PropTypes.string,
  to: PropTypes.string,
  test: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

Button.defaultProps = defaultProps
Button.propTypes = propTypes
Button.themeProps = tProps

export default Button
