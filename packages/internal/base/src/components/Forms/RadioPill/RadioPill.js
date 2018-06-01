import React from "react"
import PropTypes from "prop-types"
import styled, { css } from "styled-components"
import { themify } from "@staccx/theme"

const RadioPill = ({
  children,
  group,
  onChange,
  className,
  full,
  variant,
  ...restProps
}) => (
  <RadioPillContainer className={className} full={full} variant={variant}>
    {children.map(child =>
      React.cloneElement(child, {
        ...child.props,
        onChange: onChange,
        full: full,
        variant: variant,
        group
      })
    )}
  </RadioPillContainer>
)

const Full = css`
  display: flex;
  width: 100%;
`

export const RADIO_PILL = "RADIO_PILL"
const RadioPillContainer = styled.div`
  border: 0;
  margin: 0;
  padding: 0;
  outline: 0;
  ${p => p.full && Full};
  ${themify(RADIO_PILL)};
`

RadioPill.defaultProps = {
  onChange: null
}

RadioPill.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
  className: PropTypes.string,
  group: PropTypes.string.isRequired,
  onChange: PropTypes.func
}

export default RadioPill
