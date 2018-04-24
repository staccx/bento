/**
 * @class Label
 */

import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { themify, font, spacing, fontFamily } from "@staccx/theme"

export const LABEL = "LABEL"

const Label = ({ className, children, ...rest }) => (
  <LabelElement className={className} {...rest}>
    {children}
  </LabelElement>
)

const LabelElement = styled.label`
  font-weight: bold;
  font-family: ${fontFamily.body};
  font-size: ${font.base};
  line-height: 1.2;
  padding-bottom: ${spacing.tiny};
  display: block;
  ${themify(LABEL)};
`

Label.defaultProps = {
  className: ""
}

Label.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element,
    PropTypes.string,
    PropTypes.array
  ]).isRequired,
  className: PropTypes.string
}

/** @component */
export default Label
