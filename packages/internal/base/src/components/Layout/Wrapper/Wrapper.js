import React from "react"
import PropTypes from "prop-types"
import styled, { css } from "styled-components"
import { spacing, wrapper, themify, themeProps } from "@staccx/theme"

const Wrapper = ({ children, className, size, breakout, ...otherProps }) => (
  <Wrap breakout={breakout} className={className} size={size} {...otherProps}>
    {children}
  </Wrap>
)

export const WRAPPER = "WRAPPER"
const Wrap = styled.div`
  width: 100%;
  max-width: ${p => (p.size === "full" ? "none" : wrapper(p.size))};
  margin: 0 auto;
  padding-left: ${spacing.medium()};
  padding-right: ${spacing.medium()};

  & & {
    padding-left: 0;
    padding-right: 0;
  }

  ${p =>
    p.breakout &&
    css`
      @media (max-width: ${wrapper.breakout}) {
        padding-left: 0;
        padding-right: 0;
      }
    `};
  ${themify(WRAPPER)};
`

Wrapper.defaultProps = {
  className: "",
  size: "large",
  breakout: false
}

Wrapper.propTypes = {
  children: themeProps.children,
  className: PropTypes.string,
  size: PropTypes.oneOf(["small", "medium", "large", "full"]),
  breakout: PropTypes.bool
}

export default Wrapper
