/**
 * @class Legend
 */

import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import {
  applyVariants,
  font,
  spacing,
  fontFamily,
  fontWeight,
  commonPropTypes
} from "../../../theming"
import themeProps from "./Legend.themeProps"
import { componentCreateFactory } from "../../../theming/utils/createVariantsFunctionFactory"

const Legend = ({ className, children, ...rest }) => (
  <LegendElement className={className} {...rest}>
    {children}
  </LegendElement>
)

const LegendElement = styled.legend`
  font-weight: ${fontWeight.bold};
  font-family: ${fontFamily.body};
  font-size: ${font.h5};
  line-height: 1.2;
  padding-bottom: ${spacing.tiny};
  display: block;
  ${applyVariants(themeProps.legend)};
`

Legend.defaultProps = {
  className: ""
}

Legend.propTypes = {
  children: commonPropTypes.children.isRequired,
  className: PropTypes.string
}
Legend.themeProps = themeProps
Legend.createVariants = componentCreateFactory(Legend)

/** @component */
export default Legend
