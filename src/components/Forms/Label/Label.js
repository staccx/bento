/**
 * @class Label
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
import themeProps from "./Label.themeProps"
import { componentCreateFactory } from "../../../theming/utils/createVariantsFunctionFactory"

const Label = ({ className, children, ...rest }) => (
  <LabelElement className={className} {...rest}>
    {children}
  </LabelElement>
)

const LabelElement = styled.label`
  font-weight: ${fontWeight.bold};
  font-family: ${fontFamily.body};
  font-size: ${font.base};
  line-height: 1.2;
  padding-bottom: ${spacing.tiny};
  display: block;
  ${applyVariants(themeProps.label)};
`

Label.defaultProps = {
  className: ""
}

Label.propTypes = {
  children: commonPropTypes.children.isRequired,
  className: PropTypes.string
}
Label.themeProps = themeProps
Label.createVariants = componentCreateFactory(Label)

/** @component */
export default Label
