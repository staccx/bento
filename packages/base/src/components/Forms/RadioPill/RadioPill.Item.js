import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import hideVisually from "../../../Styles/hideVisually"
import {
  targetSize,
  spacing,
  borderRadius,
  fontFamily,
  font,
  color,
  themify
} from "@staccx/theme"

const RadioPillItem = ({
  children,
  id,
  group,
  disabled,
  onChange,
  className,
  defaultChecked,
  value,
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
      value={value}
      {...otherProps}
    />
    <Label htmlFor={id}>{children}</Label>
  </RadioWrapper>
)

const borderRadiusRadioPill = "6px"

export const RADIO_PILL_ITEM_LABEL = "RADIO_PILL_ITEM_LABEL"
const Label = styled.label`
  position: relative;
  padding: ${spacing.tiny()} ${spacing.small()};
  border: 1px solid ${color.line};
  cursor: pointer;
  font-family: ${fontFamily.body()};
  font-size: ${font.input};
  letter-spacing: normal;
  font-weight: normal;
  margin-right: -1px;
  ${themify(RADIO_PILL_ITEM_LABEL)};
`

export const RADIO_PILL_ITEM_CHECKED = "RADIO_PILL_ITEM_CHECKED"
const Radio = styled.input`
  ${hideVisually};
  &:checked {
    ~ ${Label} {
      color: ${color.primary};
      z-index: 1;
    }

    &:first-child ~ ${Label} {
      border-color: ${color.primary};
    }

    &:nth-child(2) ~ ${Label} {
      border-color: ${color.primary};
    }
    ${themify(RADIO_PILL_ITEM_CHECKED)};
  }
`

export const RADIO_PILL_ITEM_WRAPPER = "RADIO_PILL_ITEM_WRAPPER"
export const RADIO_PILL_ITEM_HOVER = "RADIO_PILL_ITEM_HOVER"
const RadioWrapper = styled.div`
  display: inline-block;
  min-height: ${targetSize.normal};
  padding-top: ${spacing.small()};
  padding-bottom: ${spacing.small()};

  &:first-child {
    ${Label} {
      border-top-left-radius: ${borderRadiusRadioPill};
      border-bottom-left-radius: ${borderRadiusRadioPill};
    }
  }

  &:last-child {
    ${Label} {
      border-top-right-radius: ${borderRadiusRadioPill};
      border-bottom-right-radius: ${borderRadiusRadioPill};
      border-right-width: 1px;
      margin-right: 0;
    }
  }

  &:hover,
  ${Radio}:focus ~ {
    ${Label} {
      z-index: 1;
      border-color: ${color.primary};
      ${themify(RADIO_PILL_ITEM_HOVER)};
    }
  }
  ${themify(RADIO_PILL_ITEM_WRAPPER)};
`

RadioPillItem.defaultProps = {
  className: "",
  disabled: false,
  input: {},
  onChange: null,
  value: "",
  defaultChecked: false
}

RadioPillItem.propTypes = {
  children: PropTypes.string.isRequired,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  group: PropTypes.string,
  id: PropTypes.string.isRequired,
  input: PropTypes.any,
  onChange: PropTypes.func,
  defaultChecked: PropTypes.bool,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /** Only for documentation: */
  _themeVars: PropTypes.oneOf([
    RADIO_PILL_ITEM_CHECKED,
    RADIO_PILL_ITEM_HOVER,
    RADIO_PILL_ITEM_LABEL,
    RADIO_PILL_ITEM_WRAPPER
  ])
}

export default RadioPillItem
