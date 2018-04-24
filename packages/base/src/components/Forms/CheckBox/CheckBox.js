import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import Check from "../../Icons/Check"
import {
  themify,
  color,
  font,
  spacing,
  targetSize,
  fontFamily,
  ThemeComponent
} from "@staccx/theme"

export const CHECKBOX = "checkbox"
export const CHECKBOX_CHECKED_ICON = "checkbox_checked_icon"
export const CHECKBOX_LABEL = "checkbox_label"
export const CHECKBOX_INPUT = "checkbox_input"
export const COMPONENT_CHECKBOX_ICON = "COMPONENT_CHECKBOX_ICON"

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
  return (
    <CheckWrapper themeVariant={themeVariant}>
      <InputCheck
        className={className}
        id={id}
        disabled={disabled}
        type="checkbox"
        name={group}
        onChange={onChange}
        defaultChecked={defaultChecked}
        themeVariant={themeVariant}
        {...otherProps}
      />

      <Label htmlFor={id} themeVariant={themeVariant}>
        <Icon themeVariant={themeVariant} />
        {children}
      </Label>
    </CheckWrapper>
  )
}

const CheckWrapper = styled.div`
  min-height: ${targetSize};
  padding-top: ${spacing.small};
  padding-bottom: ${spacing.small};
  ${themify(CHECKBOX)};
`

const IconComponent = ({...props}) => (
  <ThemeComponent tagName={COMPONENT_CHECKBOX_ICON} fallback={Check} {...props} />
)

export const Icon = styled(IconComponent)`
  position: absolute;
  left: 2px;
  top: 2px;
  display: block;
  height: 20px;
  width: 20px;
  transform: scale(0);
  transition: all 0.2s ease-in-out;
  color: ${color.primary};
  ${themify(CHECKBOX_CHECKED_ICON)};
`

const InputCheck = styled.input`
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
      border-color: ${color.primary};
    }
  }

  ${themify(CHECKBOX_INPUT)};
`

const Label = styled.label`
  padding: 0 0 0 ${spacing.mediumPlus};
  position: relative;
  font-weight: normal;
  letter-spacing: normal;
  width: auto;
  cursor: pointer;
  font-family: ${fontFamily.body};
  font-size: ${font.input};
  line-height: 1.6;
  display: inline-block;

  &::before {
    content: "";
    background: ${color.bg};
    border: 1px solid ${color.line};
    display: block;
    height: ${spacing.medium};
    left: 0;
    position: absolute;
    top: 0;
    width: ${spacing.medium};
  }

  &:hover {
    &::before {
      border-color: ${color.primary};
    }
  }
  ${themify(CHECKBOX_LABEL)};
`

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
