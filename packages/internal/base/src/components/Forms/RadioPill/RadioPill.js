import React from "react"
import PropTypes from "prop-types"
import styled, { css } from "styled-components"
import { themePropTypes } from "../../../constants/themeContants"
import { applyVariants } from "../../../theming"

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
    {React.Children.map(children, child => {
      if (child) {
        return React.cloneElement(child, {
          ...child.props,
          onChange: onChange,
          full: full,
          variant: variant,
          group
        })
      }
    })}
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
  ${applyVariants(RadioPill.themeProps.container)};
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
