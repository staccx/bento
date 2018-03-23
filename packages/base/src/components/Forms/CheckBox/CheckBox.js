import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import Check from "../../Icons/Check"
import withTheme from "../../../utils/withTheme"
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
  ...otherProps
}) => {
  const Icon = checkIcon || IconCheck
  return (
    <CheckWrapper>
      <InputCheck
        className={className}
        id={id}
        disabled={disabled}
        type="checkbox"
        name={group}
        onChange={onChange}
        defaultChecked={defaultChecked}
        {...otherProps}
      />

      <Label htmlFor={id}>
        <Icon />
        {children}
      </Label>
    </CheckWrapper>
  )
}

const CheckWrapper = withTheme(
  styled.div`
    ${props => props.themeStyle(props)};
  `,
  "Checkbox.CheckWrapper"
)

export const IconCheck = withTheme(
  styled(Check)`
    ${props => props.themeStyle(props)};
  `,
  "Checkbox.IconCheck"
)

const InputCheck = withTheme(
  styled.input`
    ${props => props.themeStyle(props)};
  `,
  "Checkbox.InputCheck"
)

const Label = withTheme(
  styled.label`
    ${props => props.themeStyle(props)};
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
  defaultChecked: PropTypes.bool
}

CheckBox.defaultProps = {
  disabled: false,
  input: {},
  onChange: null,
  value: "",
  className: "",
  defaultChecked: false
}

export default CheckBox
