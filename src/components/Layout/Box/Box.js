import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { applyVariants, spacing, commonPropTypes } from "../../../theming"
import themeProps from "./Box.themeProps"
import { componentCreateFactory } from "../../../theming/utils/createVariantsFunctionFactory"

const Box = ({ children, className, size, ...otherProps }) => (
  <Boxing className={className} size={size} {...otherProps}>
    {children}
  </Boxing>
)

export const Boxing = styled.div`
  ${p => p.size && `padding: ${spacing(p.size)(p)}`};
  ${applyVariants(themeProps.box)};
`

Box.defaultProps = {
  className: "",
  size: ""
}

Box.propTypes = {
  /**
   * The component can be nested.
   */
  children: commonPropTypes.children,
  /**
   * The class that can be assigned to the Box component.
   */
  className: PropTypes.string,
  /**
   * The size of the box.
   */
  size: commonPropTypes.spacing
}
Box.themeProps = themeProps
Box.createVariants = componentCreateFactory(Box)

export default Box
