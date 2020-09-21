import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import Check from "../../Icons/Check/Check"
import {
  color,
  font,
  spacing,
  fontFamily,
  fontWeight,
  applyVariants,
  targetSize,
  borderRadius,
  commonPropTypes
} from "../../../theming"
import ThemeComponent from "../../Theme/ThemeComponent/ThemeComponent"
import themeProps from "./CheckBox.themeProps"
import { componentCreateFactory } from "../../../theming/utils/createVariantsFunctionFactory"

/**
 * The Checkbox is shown as a square box that is checked when activated.
 Checkboxes are used to let a user select one or more options of a limited number of choices.
 */
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
  ${applyVariants(themeProps.wrapper)};
`

const IconComponent = ({ ...props }) => (
  <ThemeComponent
    tagName={themeProps.iconComponent}
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
  ${applyVariants(themeProps.icon)};
`

const InputCheck = styled.input`
  position: absolute;
  clip: rect(0, 0, 0, 0);
  clip: rect(0 0 0 0);

  &:checked ~ label {
    > svg {
      transform: scale(1);
    }
    ${applyVariants(themeProps.labelChecked)};
  }

  &:checked ~ label::before {
    ${applyVariants(themeProps.labelBeforeChecked)};
  }

  &:focus ~ label {
    &::before {
      border-color: ${color.primary};
    }
  }

  ${applyVariants(themeProps.input)};
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
    ${applyVariants(themeProps.labelBefore)};
  }

  &:hover,
  &:focus {
    &::before {
      border-color: ${color.primary};
    }
  }
  ${applyVariants(themeProps.label)};
`

CheckBox.propTypes = {
  children: commonPropTypes.children.isRequired,
  /**
   * If set to true, it cannot be checked
   */
  disabled: PropTypes.bool,
  /**
   * Used to group together multiple checkboxes
   */
  group: PropTypes.string,
  /**
   * Refers to the spesific checkbox, must be unique
   */
  id: PropTypes.string.isRequired,
  input: PropTypes.any,
  /**
   * allows you to preform an action when the component changes
   */
  onChange: PropTypes.func,
  className: PropTypes.string,
  /**
   * if set to true, the component wil render as checked
   */
  defaultChecked: PropTypes.bool,
  /**
   * Allows you to alter the checkmark
   */
  checkIcon: PropTypes.element,
  ignoreBase: PropTypes.func
}

CheckBox.defaultProps = {
  disabled: false,
  input: {},
  onChange: null,
  className: "",
  defaultChecked: false,
  checkIcon: null
}
CheckBox.themeProps = themeProps
CheckBox.createVariants = componentCreateFactory(CheckBox)

export default CheckBox
