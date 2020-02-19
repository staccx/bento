import React from "react"
import PropTypes from "prop-types"
import styled, { css } from "styled-components"
import {
  applyVariants,
  targetSize,
  spacing,
  fontWeight,
  fontFamily,
  font,
  color,
  commonPropTypes,
  hideVisually
} from "../../../theming"
import themeProps from "./RadioPill.item.themeProps"

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
  <RadioWrapper
    className={className}
    full={full}
    variant={variant}
    {...otherProps}
  >
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
    <Label variant={variant} htmlFor={id} full={full}>
      {children}
    </Label>
  </RadioWrapper>
)

const Label = styled.label`
  position: relative;
  padding: ${spacing.tiny} ${spacing.small};
  border: 1px solid ${color.line};
  cursor: pointer;
  font-family: ${fontFamily.body()};
  font-size: ${font.input};
  letter-spacing: normal;
  font-weight: ${fontWeight.normal};
  margin-right: -1px;
  background-color: ${color.white};
  ${applyVariants(themeProps.label)};
  ${p =>
    p.full &&
    css`
      width: calc(100% + 1px);
      justify-content: center;
      display: flex;
      align-items: center;
    `};
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
  defaultChecked: false,
  full: false
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
  value: PropTypes.any,
  full: PropTypes.bool
}
RadioPillItem.themeProps = themeProps

export default RadioPillItem
