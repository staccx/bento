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
  themify
} from "@staccx/theme"

export const RADIO_BUTTON_RADIO = "RADIO_BUTTON_RADIO"
const Radio = styled.input`
  position: absolute;
  clip: rect(0, 0, 0, 0);
  clip: rect(0 0 0 0);

  &:checked ~ label::after {
    transform: scale(1);
  }
  ${themify(RADIO_BUTTON_RADIO)};
`

export const RADIO_BUTTON_LABEL = "RADIO_BUTTON_LABEL"
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

  ${themify(RADIO_BUTTON_LABEL)};
`

export const RADIO_BUTTON_WRAPPER = "RADIO_BUTTON_WRAPPER"
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
  ${themify(RADIO_BUTTON_WRAPPER)};
`

const RadioButton = ({
  children,
  id,
  group,
  disabled,
  onChange,
  className,
  defaultChecked,
  ...otherProps
}) => (
  <RadioWrapper className={className}>
    <Radio
      id={id}
      disabled={disabled}
      type="radio"
      name={group}
      onChange={onChange}
      defaultChecked={defaultChecked}
      {...otherProps}
    />
    <Label htmlFor={id}>{children}</Label>
  </RadioWrapper>
)

RadioButton.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.object])
    .isRequired,
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
  ]),
  /** Only for documentation: */
  _themeVars: PropTypes.oneOf([
    RADIO_BUTTON_LABEL,
    RADIO_BUTTON_RADIO,
    RADIO_BUTTON_WRAPPER
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

export default RadioButton
