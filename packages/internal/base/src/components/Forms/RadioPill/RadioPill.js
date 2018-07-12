import React from "react"
import PropTypes from "prop-types"
import styled, { css } from "styled-components"
import { themify } from "@staccx/theme"
import themePropTypes from "../../constants/themePropTypes"

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

RadioPill.themeProps = {
  container: {
    name: "RADIO_PILL",
    description: "Container style",
    type: themePropTypes.style
  }
}

const Full = css`
  display: flex;
  width: 100%;
`

const RadioPillContainer = styled.div`
  border: 0;
  margin: 0;
  padding: 0;
  outline: 0;
  ${p => p.full && Full};
  ${themify(RadioPill.themeProps.container)};
`

RadioPill.defaultProps = {
  onChange: null,
  full: false
}

RadioPill.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
  className: PropTypes.string,
  group: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  full: PropTypes.bool
}

export default RadioPill
