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
  fontWeight
} from "../../../theming"
import {
  commonPropTypes,
  themePropTypes
} from "../../../constants/themeContants"

const Label = ({ className, children, ...rest }) => (
  <LabelElement className={className} {...rest}>
    {children}
  </LabelElement>
)

Label.themeProps = {
  label: {
    name: "LABEL",
    description: "Label style",
    type: themePropTypes.style
  }
}

const LabelElement = styled.label`
  font-weight: ${fontWeight.bold};
  font-family: ${fontFamily.body};
  font-size: ${font.base};
  line-height: 1.2;
  padding-bottom: ${spacing.tiny};
  display: block;
  ${applyVariants(Label.themeProps.label)};
`

Label.defaultProps = {
  className: ""
}

Label.propTypes = {
  children: commonPropTypes.children.isRequired,
  className: PropTypes.string
}

/** @component */
export default Label
