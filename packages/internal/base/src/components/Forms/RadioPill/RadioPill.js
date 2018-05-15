import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { themify } from "@staccx/theme"

const RadioPill = ({ children, group, onChange, className, ...restProps }) => (
  <RadioPillContainer className={className}>
    {children.map(child =>
      React.cloneElement(child, {
        ...child.props,
        onChange: onChange,
        group
      })
    )}
  </RadioPillContainer>
)

export const RADIO_PILL = "RADIO_PILL"
const RadioPillContainer = styled.fieldset`
  border: 0;
  margin: 0;
  padding: 0;
  outline: 0;
  ${themify(RADIO_PILL)};
`

RadioPill.defaultProps = {
  onChange: null
}

RadioPill.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
  className: PropTypes.string,
  group: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  /** Only for documentation: */
  _themeVars: PropTypes.oneOf([RADIO_PILL])
}

export default RadioPill
