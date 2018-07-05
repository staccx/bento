import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import {
  targetSize,
  spacing,
  fontWeight,
  fontFamily,
  font,
  color,
  themify,
  themeProps
} from "@staccx/theme"
import themePropTypes from "../../constants/themePropTypes"

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
  ${themify(tProps.radio)};
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

  ${themify(tProps.label)};
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
  ${themify(tProps.wrapper)};
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
  children: themeProps.children.isRequired,
  className: PropTypes.string,
  defaultChecked: PropTypes.bool,
  disabled: PropTypes.bool,
  group: PropTypes.string,
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
