import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import {
  applyVariants,
  targetSize,
  fontWeight,
  fontFamily,
  font,
  color,
  commonPropTypes,
  hideVisually,
  borderRadius
} from "../../../theming"
import themeProps from "./RadioPill.item.themeProps"
import { componentCreateFactory } from "../../../theming/utils/createVariantsFunctionFactory"

/**
 * Radiopill
 */
const RadioPillItem = ({
  children,
  id,
  group,
  disabled,
  onChange,
  className,
  defaultChecked,
  value,
  variant,
  ...otherProps
}) => (
  <RadioWrapper className={className} variant={variant} {...otherProps}>
    <Radio
      id={id}
      disabled={disabled}
      type="radio"
      name={group}
      onChange={onChange}
      defaultChecked={defaultChecked}
      value={value}
      variant={variant}
    />
    <Label variant={variant} htmlFor={id}>
      {children}
    </Label>
  </RadioWrapper>
)

const Label = styled.label`
  position: relative;
  border: 1px solid ${color.line};
  cursor: pointer;
  font-family: ${fontFamily.body()};
  font-size: ${font.input};
  letter-spacing: normal;
  font-weight: ${fontWeight.normal};
  margin-right: -1px;
  background-color: ${color.white};
  display: flex;
  align-items: center;
  justify-content: center;
  height: ${targetSize.normal};
  ${applyVariants(themeProps.label)};
`

const Radio = styled.input`
  ${hideVisually};
  &:checked {
    ~ ${Label} {
      background-color: ${color.primary};
      color: ${color.white};
      z-index: 1;
      ${applyVariants(themeProps.checked)};
    }

    &:first-child ~ ${Label} {
      border-color: ${color.primary};
    }

    &:nth-child(2) ~ ${Label} {
      border-color: ${color.primary};
    }
  }
`

const RadioWrapper = styled.div`
  flex-grow: 1;

  &:first-child {
    ${Label} {
      border-top-left-radius: ${borderRadius};
      border-bottom-left-radius: ${borderRadius};
    }
  }

  &:last-child {
    ${Label} {
      border-top-right-radius: ${borderRadius};
      border-bottom-right-radius: ${borderRadius};
      border-right-width: 1px;
      margin-right: 0;
    }
  }

  &:hover,
  ${Radio}:focus ~ {
    ${Label} {
      z-index: 1;
      border-color: ${color.primary};
      ${applyVariants(themeProps.hover)};
    }
  }
  ${applyVariants(themeProps.wrapper)};
`

RadioPillItem.defaultProps = {
  disabled: false,
  input: {},
  onChange: null,
  value: "",
  defaultChecked: false
}

RadioPillItem.propTypes = {
  children: commonPropTypes.children.isRequired,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  group: PropTypes.string,
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  input: PropTypes.any,
  onChange: PropTypes.func,
  defaultChecked: PropTypes.bool,
  value: PropTypes.any
}
RadioPillItem.themeProps = themeProps
RadioPillItem.createVariants = componentCreateFactory(RadioPillItem)

export default RadioPillItem
