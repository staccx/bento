import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import {
  applyVariants,
  targetSize,
  spacing,
  fontWeight,
  fontFamily,
  font,
  color,
  commonPropTypes,
  themePropTypes
} from "../../../theming"

const tProps = {
  radio: {
    name: "RADIO_BUTTON_RADIO",
    description: "Radio button style",
    type: themePropTypes.style
  },
  label: {
    name: "RADIO_BUTTON_LABEL",
    description: "Label style",
    type: themePropTypes.style
  },
  wrapper: {
    name: "RADIO_BUTTON_WRAPPER",
    description: "Wrapper style",
    type: themePropTypes.style
  }
}
const Radio = styled.input`
  position: absolute;
  clip: rect(0, 0, 0, 0);
  clip: rect(0 0 0 0);

  &:checked ~ label::after {
    transform: scale(1);
  }
  ${applyVariants(tProps.radio)};
`

const Label = styled.label`
  position: relative;
  padding: 0 0 0 ${spacing.mediumPlus};
  width: auto;
  letter-spacing: normal;
  font-family: ${fontFamily.body};
  font-size: ${font.base};
  font-weight: ${fontWeight.normal};
  cursor: pointer;

  &::before {
    content: "";
    position: absolute;
    top: -4px;
    left: 0;
    display: block;
    width: ${spacing.medium};
    height: ${spacing.medium};
    border: 1px solid ${color.line};
    border-radius: 50%;
    background: ${color.white};
  }

  &::after {
    content: "";
    position: absolute;
    top: 0px;
    left: 4px;
    display: block;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background-color: ${color.primary};
    line-height: 20px;
    transform: scale(0);
    transition: all 0.2s ease-in-out;
  }

  ${applyVariants(tProps.label)};
`

const RadioWrapper = styled.div`
  min-height: ${targetSize.normal};
  padding-top: ${spacing.small};
  padding-bottom: ${spacing.small};

  &:hover,
  ${Radio}:focus ~ {
    ${Label} {
      &::before {
        border-color: ${color.wcag};
      }
    }
  }
  ${applyVariants(tProps.wrapper)};
`

const RadioButton = ({
  children,
  id,
  group,
  disabled,
  onChange,
  className,
  defaultChecked,
  variant,
  ...otherProps
}) => (
  <RadioWrapper className={className} variant={variant}>
    <Radio
      id={id}
      disabled={disabled}
      type="radio"
      name={group}
      onChange={onChange}
      defaultChecked={defaultChecked}
      variant={variant}
      {...otherProps}
    />
    <Label htmlFor={id} variant={variant}>
      {children}
    </Label>
  </RadioWrapper>
)

RadioButton.propTypes = {
  children: commonPropTypes.children.isRequired,
  className: PropTypes.string,
  /**
   * Will render as checked
   */
  defaultChecked: PropTypes.bool,
  /**
   * Will disable the radioButton
   */
  disabled: PropTypes.bool,
  /**
   * Assigns multiple groups together
   */
  group: PropTypes.string,
  /**
   * Must be unique
   */
  id: PropTypes.string.isRequired,
  input: PropTypes.any,
  onChange: PropTypes.func,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.object
  ])
}

RadioButton.defaultProps = {
  className: "",
  defaultChecked: false,
  disabled: false,
  input: {},
  onChange: null,
  value: ""
}

RadioButton.themeProps = tProps

export default RadioButton
