import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import Check from "../../Icons/Check"
import withTheme from "../../../utils/withTheme"

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
    min-height: ${p => p.theme.globals.targetSize.normal};
    padding-top: ${p => p.theme.globals.spacing.small};
    padding-bottom: ${p => p.theme.globals.spacing.small};
    ${props => props.variantStyle(props)};
  `,
  "Checkbox.CheckWrapper"
)

export const IconCheck = withTheme(
  styled(Check)`
    position: absolute;
    left: 2px;
    top: 2px;
    display: block;
    height: 20px;
    width: 20px;
    transform: scale(0);
    transition: all 0.2s ease-in-out;
    color: ${p => p.theme.globals.color.primary};
    ${props => props.variantStyle(props)};
  `,
  "Checkbox.IconCheck"
)

const InputCheck = withTheme(
  styled.input`
    position: absolute;
    clip: rect(0, 0, 0, 0);
    clip: rect(0 0 0 0);

    &:checked ~ label {
      > svg {
        transform: scale(1);
      }
    }

    &:focus ~ label {
      &::before {
        border-color: ${p => p.theme.globals.color.primary};
      }
    }

    ${props => props.variantStyle(props)};
  `,
  "Checkbox.InputCheck"
)

const Label = withTheme(
  styled.label`
    padding: 0 0 0 ${p => p.theme.globals.spacing.mediumPlus};
    position: relative;
    font-weight: normal;
    letter-spacing: normal;
    width: auto;
    cursor: pointer;
    font-family: ${p => p.theme.globals.font.body};
    font-family: ${p => p.theme.globals.font.size.input};
    line-height: 1.6;
    display: inline-block;

    &::before {
      content: "";
      background: ${p => p.theme.globals.color.bg};
      border: 1px solid ${p => p.theme.globals.color.line};
      display: block;
      height: ${p => p.theme.globals.spacing.medium};
      left: 0;
      position: absolute;
      top: 0;
      width: ${p => p.theme.globals.spacing.medium};
    }

    &:hover {
      &::before {
        border-color: ${p => p.theme.globals.color.primary};
      }
    }
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
