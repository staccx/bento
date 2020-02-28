/**
 * @class Slider2Handle
 */

import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { applyVariants, color, spacing } from "../../../../theming"
import themeProps from "./Slider2.Handle.themeProps"
import { componentCreateFactory } from "../../../../theming/utils/createVariantsFunctionFactory"

const Slider2Handle = ({
  className,
  domain: [min, max],
  handle: { id, value, percent },
  ...restProps
}) => (
  <HandleButton
    type="button"
    role="slider"
    className={className}
    aria-valuemin={min}
    aria-valuemax={max}
    aria-valuenow={value}
    percent={percent}
    {...restProps}
  />
)

const HandleButton = styled.button`
  position: absolute;
  left: ${p => p.percent}%;
  margin-left: -11px;
  margin-top: -6px;
  z-index: 2;
  width: ${spacing.medium};
  height: ${spacing.medium};
  cursor: pointer;
  border: 0;
  border-radius: 50%;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.15);
  background-color: ${color.white};
  border: 1px solid ${color.line};
  transition: box-shadow 0.2s ease;

  &:focus,
  &:active,
  &:hover {
    outline: 0;
    box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.15);
  }

  ${applyVariants(Slider2Handle.themeProps.handle)};
`

Slider2Handle.defaultProps = {
  className: ""
}

Slider2Handle.propTypes = {
  className: PropTypes.string,
  domain: PropTypes.array.isRequired,
  handle: PropTypes.shape({
    id: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired,
    percent: PropTypes.number.isRequired
  }).isRequired,
  getHandleProps: PropTypes.func.isRequired
}
Slider2Handle.themeProps = themeProps
Slider2Handle.createVariants = componentCreateFactory(Slider2Handle)

/** @component */
export default Slider2Handle
