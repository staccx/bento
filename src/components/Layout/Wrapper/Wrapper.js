import React from "react"
import PropTypes from "prop-types"
import styled, { css } from "styled-components"
import {
  spacing,
  wrapper,
  applyVariants,
  commonPropTypes
} from "../../../theming"
import themeProps from "./Wrapper.themeProps"

/**
 * A Wrapper components that centers content and add spacing on the sides
 */
const Wrapper = ({
  children,
  className,
  size,
  breakout,
  variant,
  ...otherProps
}) => (
  <Wrap
    breakout={breakout}
    className={className}
    size={size}
    variant={variant}
    {...otherProps}
  >
    {children}
  </Wrap>
)

const Wrap = styled.div`
  width: 100%;
  max-width: ${p => (p.size === "full" ? "none" : wrapper(p.size))};
  margin: 0 auto;
  padding-left: ${spacing.medium};
  padding-right: ${spacing.medium};

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
  ${applyVariants(themeProps.wrapper)};
`

Wrapper.defaultProps = {
  className: "",
  size: "large",
  breakout: false
}

Wrapper.propTypes = {
  /**
   * The component can have children, but is not required.
   */
  children: commonPropTypes.children,
  /**
   * The component can be assigned a class.
   */
  className: PropTypes.string,
  /**
   * The component accept the following sizes: small, medium and large.
   */
  size: PropTypes.string,
  /**
   * The component can set the padding left and right to 0px.
   */
  breakout: PropTypes.bool
}
Wrapper.themeProps = themeProps

export default Wrapper
