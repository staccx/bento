import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { multiplyPixelValue } from "@staccx/math"
import Label from "../Label/Label"
import Caret from "../../Icons/Caret"
import {
  borderRadius,
  color,
  font,
  spacing,
  targetSize,
  themify,
  ThemeComponent,
  themeProps
} from "@staccx/theme"

export const COMPONENT_SELECT_SIMPLE_ICON = "COMPONENT_SELECT_SIMPLE_ICON"
const IconComponent = ({ ...props }) => (
  <ThemeComponent
    tagName={COMPONENT_SELECT_SIMPLE_ICON}
    fallback={Caret}
    {...props}
  />
)

const SelectSimple = ({
  children,
  label,
  placeholder,
  className,
  id,
  variant,
  ...rest
}) => (
  <SelectWrapper className={className} variant={variant}>
    {label && (
      <Label htmlFor={id} variant={variant}>
        {label}
      </Label>
    )}
    <Select
      id={id}
      defaultValue={placeholder || ""}
      variant={variant}
      {...rest}
    >
      {placeholder && (
        <option disabled value={placeholder}>
          {placeholder}
        </option>
      )}
      {children}
    </Select>
    <SelectIcon />
  </SelectWrapper>
)

export const SELECT_SIMPLE_WRAPPER = "SELECT_SIMPLE_WRAPPER"
const SelectWrapper = styled.div`
  display: block;
  margin-bottom: 0;
  position: relative;
  ${themify(SELECT_SIMPLE_WRAPPER)};
`

export const SELECT_SIMPLE_ICON = "SELECT_SIMPLE_ICON"
const SelectIcon = styled(IconComponent)`
  position: absolute;
  right: ${spacing.small()};
  bottom: ${p => {
    const value = targetSize.normal()(p)
    return multiplyPixelValue(value, 0.5)
  }};
  width: 12px;
  fill: ${color.gray};
  transform: translateY(50%);
  transition: fill 0.2s ease;
  ${themify(SELECT_SIMPLE_ICON)};
`

export const SELECT_SIMPLE_SELECT = "SELECT_SIMPLE_SELECT"
const Select = styled.select`
  width: 100%;
  min-height: ${targetSize.normal};
  font-size: ${font.input};
  padding: 10px ${spacing.medium()} 10px ${spacing.small()};
  box-shadow: none;
  border-radius: ${borderRadius};
  line-height: 1.4;
  border: 1px solid ${color.line};
  -webkit-appearance: none;
  appearance: none;
  cursor: pointer;

  &:focus,
  &:hover {
    color: ${color.primary};
    border-color: ${color.line};
    outline: none;

    ~ ${SelectIcon} {
      fill: ${color.primary};
    }
  }
  ${themify(SELECT_SIMPLE_SELECT)};
`

SelectSimple.defaultProps = {
  className: "",
  placeholder: "",
  label: null
}

SelectSimple.propTypes = {
  label: PropTypes.string,
  children: themeProps.children.isRequired,
  placeholder: PropTypes.string,
  id: PropTypes.string.isRequired,
  className: PropTypes.string
}

export default SelectSimple
