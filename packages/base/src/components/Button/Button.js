/**
 * @class Button
 */
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import {
  targetSize,
  spacing,
  borderRadius,
  font,
  color,
  themify
} from "@staccx/theme"
const tinycolor = require("tinycolor2")

export const BUTTON = "Button"
export const ButtonStyle = css`
  background-color: ${color("primary")};
  color: ${p =>
    tinycolor
      .mostReadable(color("primary")(p), ["#fff"], {
        includeFallbackColors: true,
        level: "AA",
        size: "large"
      })
      .toString()};
  border-width: 0;
  border-radius: ${borderRadius()};
  padding: ${spacing("tiny")} ${spacing("medium")};
  cursor: pointer;
  min-height: ${targetSize()};
  text-decoration: none;
  text-align: center;
  display: inline-block;
  font-size: ${font("base")};
  font-family: ${font("body", "type")};
  line-height: 32px;
  font-weight: 600;
  white-space: nowrap;
  justify-content: center;
  align-items: center;
  margin-right: ${spacing("small")};
  margin-bottom: ${spacing("small")};
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  &:hover,
  &:focus {
    outline: none;
    background-color: ${p =>
      tinycolor(color("primary")(p))
        .darken(5)
        .toString()};
    color: ${p =>
      tinycolor
        .mostReadable(tinycolor(color("primary")(p)).darken(5), ["#fff"], {
          includeFallbackColors: true,
          level: "AA",
          size: "large"
        })
        .toString()};
  }

  &:last-child,
  &:last-of-type {
    margin-right: 0;
  }

  &:last-child:first-child {
    margin-bottom: 0;
  }

  ${themify(BUTTON)};
`
const Button = styled.button`
  ${ButtonStyle};
`

const defaultProps = {
  onClick: null,
  to: "#",
  className: ""
}

const propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element,
    PropTypes.string,
    PropTypes.array
  ]).isRequired,
  onClick: PropTypes.func,
  className: PropTypes.string,
  to: PropTypes.string
}

Button.defaultProps = defaultProps
Button.propTypes = propTypes

/** @component */
export default Button
