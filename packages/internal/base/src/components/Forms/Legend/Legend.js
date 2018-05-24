/**
 * @class Legend
 */

import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { themify, font, spacing, fontFamily, fontWeight } from "@staccx/theme"

export const LEGEND = "LEGEND"

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
  ${themify(LEGEND)};
`

Legend.defaultProps = {
  className: ""
}

Legend.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element,
    PropTypes.string,
    PropTypes.array
  ]).isRequired,
  className: PropTypes.string
}

/** @component */
export default Legend
