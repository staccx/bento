/**
 * @class Button
 */
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import withTheme from "../../utils/withTheme"
const tinycolor = require("tinycolor2")

const Button = ({ children, ...rest }) => (
  <StyledButton {...rest}>{children}</StyledButton>
)

const StyledButton = styled.button`
  background-color: ${p => p.theme.globals.color.primary};
  color: ${p =>
    tinycolor
      .mostReadable(p.theme.globals.color.primary, ["#fff"], {
        includeFallbackColors: true,
        level: "AA",
        size: "large"
      })
      .toString()};
  border-width: 0;
  border-radius: ${p => p.theme.globals.borderRadius};
  padding: ${p => p.theme.globals.spacing.tiny}
    ${p => p.theme.globals.spacing.medium};
  cursor: pointer;
  min-height: ${p => p.theme.globals.targetSize.normal};
  text-decoration: none;
  text-align: center;
  display: inline-block;
  font-size: ${p => p.theme.globals.font.size.base};
  font-family: ${p => p.theme.globals.font.body};
  line-height: 32px;
  font-weight: 600;
  white-space: nowrap;
  justify-content: center;
  align-items: center;
  margin-right: ${p => p.theme.globals.spacing.small};
  margin-bottom: ${p => p.theme.globals.spacing.small};
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  &:hover,
  &:focus {
    outline: none;
    background-color: ${p =>
      tinycolor(p.theme.globals.color.primary)
        .darken(5)
        .toString()};
    color: ${p =>
      tinycolor
        .mostReadable(
          tinycolor(p.theme.globals.color.primary).darken(5),
          ["#fff"],
          {
            includeFallbackColors: true,
            level: "AA",
            size: "large"
          }
        )
        .toString()};
  }

  &:last-child,
  &:last-of-type {
    margin-right: 0;
  }

  &:last-child:first-child {
    margin-bottom: 0;
  }

  ${props => props.variantStyle(props)};
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
export default withTheme(Button)
