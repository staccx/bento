import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import Check from "../../Icons/Check"
import withTheme from "../../../utils/withTheme"
import CheckboxStyles from "./Checkbox.styles"
// const debug = require('debug')('CheckBox');

const CheckBox = ({
  children,
  id,
  group,
  disabled,
  onChange,
  className,
  defaultChecked,
  checkIcon,
  ignoreBase,
  themeVariant,
  ...otherProps
}) => {
  const Icon = checkIcon || IconCheck
  return (
    <CheckWrapper themeVariant={themeVariant} ignoreBase={ignoreBase}>
      <InputCheck
        className={className}
        id={id}
        disabled={disabled}
        type="checkbox"
        name={group}
        onChange={onChange}
        defaultChecked={defaultChecked}
        themeVariant={themeVariant}
        ignoreBase={ignoreBase}
        {...otherProps}
      />

      <Label htmlFor={id} themeVariant={themeVariant} ignoreBase={ignoreBase}>
        <Icon themeVariant={themeVariant} ignoreBase={ignoreBase} />
        {children}
      </Label>
    </CheckWrapper>
  )
}

const CheckWrapper = withTheme(
  styled.div`
    ${CheckboxStyles.CheckWrapper};
    ${props => props.variantStyle(props)};
  `,
  "Checkbox.CheckWrapper"
)

export const IconCheck = withTheme(
  styled(Check)`
    ${CheckboxStyles.IconCheck};
    ${props => props.variantStyle(props)};
  `,
  "Checkbox.IconCheck"
)

const InputCheck = withTheme(
  styled.input`
    ${CheckboxStyles.InputCheck};
    ${props => props.variantStyle(props)};
  `,
  "Checkbox.InputCheck"
)

const Label = withTheme(
  styled.label`
    ${CheckboxStyles.Label};
    ${props => props.variantStyle(props)};
  `,
  "Checkbox.Label"
)

CheckBox.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element
  ]).isRequired,
  disabled: PropTypes.bool,
  group: PropTypes.string,
  id: PropTypes.string.isRequired,
  input: PropTypes.any,
  onChange: PropTypes.func,
  className: PropTypes.string,
  defaultChecked: PropTypes.bool,
  checkIcon: PropTypes.element,
  ignoreBase: PropTypes.func,
  themeVariant: PropTypes.string
}

CheckBox.defaultProps = {
  disabled: false,
  input: {},
  onChange: null,
  value: "",
  className: "",
  defaultChecked: false,
  checkIcon: null,
  ignoreBase: null,
  themeVariant: null
}

export default CheckBox
