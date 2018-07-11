import React from "react"
import PropTypes from "prop-types"
import styled, { css } from "styled-components"
import { spacing, wrapper, themify, themeProps } from "@staccx/theme"
import themePropTypes from "../../constants/themePropTypes"

const Wrapper = ({ children, className, size, breakout, ...otherProps }) => (
  <Wrap breakout={breakout} className={className} size={size} {...otherProps}>
    {children}
  </Wrap>
)

Wrapper.themeProps = {
  wrapper: {
    name: "WRAPPER",
    description: "",
    type: themePropTypes.style
  }
}
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
  ${themify(Wrapper.themeProps.wrapper)};
`

Wrapper.defaultProps = {
  className: "",
  size: "large",
  breakout: false
}

Wrapper.propTypes = {
  /**
   * Content of wrapper
   * @export
   */
  children: themeProps.children,
  className: PropTypes.string,
  /**
   * Size of wrapper
   * @export
   */
  size: PropTypes.string,
  breakout: PropTypes.bool
}

export default Wrapper
