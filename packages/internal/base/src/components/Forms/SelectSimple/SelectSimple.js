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
import themePropTypes from "../../../constants/themePropTypes"

const tProps = {
  iconComponent: {
    name: "COMPONENT_SELECT_SIMPLE_ICON",
    description: "Icon component",
    type: themePropTypes.component
  },
  wrapper: {
    name: "SELECT_SIMPLE_WRAPPER",
    description: "Wrapper style",
    type: themePropTypes.style
  },
  icon: {
    name: "SELECT_SIMPLE_ICON",
    description: "Icon style",
    type: themePropTypes.style
  },
  select: {
    name: "SELECT_SIMPLE_SELECT",
    description: "Icon style",
    type: themePropTypes.style
  }
}
const IconComponent = ({ ...props }) => (
  <ThemeComponent tagName={tProps.iconComponent} fallback={Caret} {...props} />
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

const SelectWrapper = styled.div`
  display: block;
  margin-bottom: 0;
  position: relative;
  ${themify(tProps.wrapper)};
`

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
  ${themify(tProps.icon)};
`

const Select = styled.select`
  width: 100%;
  min-height: ${targetSize.normal};
  font-size: ${font.input};
  padding: 10px ${spacing.medium()} 10px ${spacing.small()};
  box-shadow: none;
  border-radius: ${borderRadius};
  line-height: 1.4;
  border: 1px solid ${color.line};
  background-color: ${color.white};
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
  ${themify(tProps.select)};
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

SelectSimple.themeProps = tProps

export default SelectSimple
