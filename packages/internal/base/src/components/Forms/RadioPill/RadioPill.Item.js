import React from "react"
import PropTypes from "prop-types"
import styled, { css } from "styled-components"
import hideVisually from "../../../Styles/hideVisually"
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

const RadioPillItem = ({
  children,
  id,
  group,
  disabled,
  onChange,
  className,
  defaultChecked,
  value,
  full,
  variant,
  ...otherProps
}) => (
  <RadioWrapper className={className} full={full}>
    <Radio
      id={id}
      disabled={disabled}
      type="radio"
      name={group}
      onChange={onChange}
      defaultChecked={defaultChecked}
      value={value}
      variant={variant}
      {...otherProps}
    />
    <Label htmlFor={id} full={full}>
      {children}
    </Label>
  </RadioWrapper>
)

export const RADIO_PILL_ITEM_LABEL = "RADIO_PILL_ITEM_LABEL"
const Label = styled.label`
  position: relative;
  padding: ${spacing.tiny()} ${spacing.small()};
  border: 1px solid ${color.line};
  cursor: pointer;
  font-family: ${fontFamily.body()};
  font-size: ${font.input};
  letter-spacing: normal;
  font-weight: ${fontWeight.normal};
  margin-right: -1px;
  background-color: ${color.white};
  ${themify(RADIO_PILL_ITEM_LABEL)};
  ${p =>
    p.full &&
    css`
      width: calc(100% + 1px);
      justify-content: center;
      display: flex;
      align-items: center;
    `};
`

export const RADIO_PILL_ITEM_CHECKED = "RADIO_PILL_ITEM_CHECKED"
const Radio = styled.input`
  ${hideVisually};
  &:checked {
    ~ ${Label} {
      background-color: ${color.primary};
      color: ${color.white};
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
  display: ${p => (p.full ? "flex" : "inline-block")};
  min-height: ${targetSize.normal};
  padding-top: ${p => (p.full ? null : spacing.small)};
  padding-bottom: ${p => (p.full ? null : spacing.small)};
  ${p => p.full && "flex-grow: 1"};

  &:first-child {
    ${Label} {
      border-top-left-radius: ${spacing.tiny};
      border-bottom-left-radius: ${spacing.tiny};
    }
  }

  &:last-child {
    ${Label} {
      border-top-right-radius: ${spacing.tiny};
      border-bottom-right-radius: ${spacing.tiny};
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
  children: themeProps.children.isRequired,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  group: PropTypes.string,
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  input: PropTypes.any,
  onChange: PropTypes.func,
  defaultChecked: PropTypes.bool,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

export default RadioPillItem
