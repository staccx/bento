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
  fontWeight
} from "../../../theming"
import {
  commonPropTypes,
  themePropTypes
} from "../../../constants/themeContants"

const Legend = ({ className, children, ...rest }) => (
  <LegendElement className={className} {...rest}>
    {children}
  </LegendElement>
)

Legend.themeProps = {
  legend: {
    name: "LEGEND",
    description: "Legend style",
    type: themePropTypes.style
  }
}

const LegendElement = styled.legend`
  font-weight: ${fontWeight.bold};
  font-family: ${fontFamily.body};
  font-size: ${font.h5};
  line-height: 1.2;
  padding-bottom: ${spacing.tiny};
  display: block;
  ${applyVariants(Legend.themeProps.legend)};
`

Legend.defaultProps = {
  className: ""
}

Legend.propTypes = {
  children: commonPropTypes.children.isRequired,
  className: PropTypes.string
}

/** @component */
export default Legend