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
  borderRadius,
  ThemeComponent,
  fontWeight,
  themeProps
} from "@staccx/theme"

export const CHECKBOX = "checkbox"
export const CHECKBOX_CHECKED_ICON = "checkbox_checked_icon"
export const CHECKBOX_LABEL = "checkbox_label"
export const CHECKBOX_LABEL_BEFORE = "CHECKBOX_LABEL_BEFORE"
export const CHECKBOX_LABEL_CHECKED = "CHECKBOX_LABEL_CHECKED"
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
  variant,
  ...otherProps
}) => {
  return (
    <CheckWrapper variant={variant}>
      <InputCheck
        className={className}
        id={id}
        disabled={disabled}
        type="checkbox"
        name={group}
        onChange={onChange}
        defaultChecked={defaultChecked}
        variant={variant}
        {...otherProps}
      />

      <Label htmlFor={id} variant={variant}>
        <Icon variant={variant} />
        {children}
      </Label>
    </CheckWrapper>
  )
}

const CheckWrapper = styled.div`
  ${themify(CHECKBOX)};
`

const IconComponent = ({ ...props }) => (
  <ThemeComponent
    tagName={COMPONENT_CHECKBOX_ICON}
    fallback={Check}
    {...props}
  />
)

export const Icon = styled(IconComponent)`
  position: absolute;
  left: 3px;
  top: 15px;
  display: block;
  height: 18px;
  width: 18px;
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
    ${themify(CHECKBOX_LABEL_CHECKED)};
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
  font-weight: ${fontWeight.normal};
  letter-spacing: normal;
  width: auto;
  cursor: pointer;
  font-family: ${fontFamily.body};
  font-size: ${font.base};
  line-height: 1.6;
  display: inline-block;
  min-height: ${targetSize.normal};
  padding-top: ${spacing.small};
  padding-bottom: ${spacing.small};

  &::before {
    content: "";
    background: ${color.white};
    border: 1px solid ${color.line};
    border-radius: ${borderRadius};
    display: block;
    height: ${spacing.medium};
    left: 0;
    position: absolute;
    top: ${spacing.small};
    width: ${spacing.medium};
    ${themify(CHECKBOX_LABEL_BEFORE)};
  }

  &:hover,
  &:focus {
    &::before {
      border-color: ${color.primary};
    }
  }
  ${themify(CHECKBOX_LABEL)};
`

CheckBox.propTypes = {
  children: themeProps.children.isRequired,
  disabled: PropTypes.bool,
  group: PropTypes.string,
  id: PropTypes.string.isRequired,
  input: PropTypes.any,
  onChange: PropTypes.func,
  className: PropTypes.string,
  defaultChecked: PropTypes.bool,
  checkIcon: PropTypes.element,
  ignoreBase: PropTypes.func,
  variant: PropTypes.string
}

CheckBox.defaultProps = {
  disabled: false,
  input: {},
  onChange: null,
  value: "",
  className: "",
  defaultChecked: false,
  checkIcon: null,
  ignoreBase: null
}

export default CheckBox
