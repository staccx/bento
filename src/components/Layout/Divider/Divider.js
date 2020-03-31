import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { applyVariants, color } from "../../../theming"
import themeProps from "./Divider.themeProps"
import { componentCreateFactory } from "../../../theming/utils/createVariantsFunctionFactory"

const Divider = ({ level, className, height, ...restProps }) => {
  return <Rule className={className} height={height} {...restProps} />
}

export const Rule = styled.hr`
  height: ${p => p.height}px;
  width: 100%;
  min-width: 100px;
  border: none;
  background-color: ${color.line};
  ${applyVariants(themeProps.rule)};
`

Divider.defaultProps = {
  className: null,
  height: 1
}

Divider.propTypes = {
  /**
   * The component can be assigned a class to set the styling.
   */
  className: PropTypes.string,
  /**
   * The height of the Divider.
   */
  height: PropTypes.number
}
Divider.themeProps = themeProps
Divider.createVariants = componentCreateFactory(Divider)

export default Divider
