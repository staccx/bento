import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { applyVariants } from "../../../theming"
import themeProps from "./RadioPill.themeProps"
import { componentCreateFactory } from "../../../theming/utils/createVariantsFunctionFactory"
import { addVariablesFactory } from "../../../theming/utils/addVariablesFactory"
import { applyVariables } from "../../../theming/utils/applyVariables"

const RadioPill = ({
  children,
  group,
  onChange,
  className,
  full,
  variant,
  ...restProps
}) => (
  <RadioPillContainer className={className} variant={variant} {...restProps}>
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

const RadioPillContainer = styled.div`
  ${applyVariables(RadioPill.name)};
  border: 0;
  margin: 0;
  padding: 0;
  outline: 0;
  display: flex;
  flex-direction: row;
  ${applyVariants(themeProps.container)};
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
RadioPill.themeProps = themeProps
RadioPill.createVariants = componentCreateFactory(RadioPill)
RadioPill.addVariables = addVariablesFactory(RadioPill)

export default RadioPill
