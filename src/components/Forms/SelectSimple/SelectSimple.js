import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { multiplyPixelValue } from "../../../math"
import Label from "../Label/Label"
import Caret from "../../Icons/Caret/Caret"
import {
  applyVariants,
  borderRadius,
  color,
  font,
  spacing,
  targetSize,
  commonPropTypes
} from "../../../theming"
import ThemeComponent from "../../Theme/ThemeComponent/ThemeComponent"
import themeProps from "./SelectSimple.themeProps"
import { componentCreateFactory } from "../../../theming/utils/createVariantsFunctionFactory"

const IconComponent = ({ ...props }) => (
  <ThemeComponent
    tagName={themeProps.iconComponent}
    fallback={Caret}
    {...props}
  />
)

/**
 * A Component that makes it easy to create a selector. it contains a selector and its options.
 */
const SelectSimple = ({ children, label, className, id, variant, ...rest }) => (
  <SelectWrapper className={className} variant={variant}>
    {label && (
      <Label htmlFor={id} variant={variant}>
        {label}
      </Label>
    )}
    <Select id={id} variant={variant} {...rest}>
      {children}
    </Select>
    <SelectIcon variant={variant} />
  </SelectWrapper>
)

const SelectWrapper = styled.div`
  display: block;
  margin-bottom: 0;
  position: relative;
  ${applyVariants(themeProps.wrapper)};
`

const SelectIcon = styled(IconComponent)`
  position: absolute;
  top: 37px;
  right: ${spacing.small};
  bottom: ${p => {
    const value = targetSize.normal()(p)
    return multiplyPixelValue(value, 0.5)
  }};
  width: 12px;
  fill: ${color.gray};
  transform: translateY(50%);
  transition: fill 0.2s ease;
  pointer-events: none;
  ${applyVariants(themeProps.icon)};
`

const Select = styled.select`
  width: 100%;
  min-height: ${targetSize.normal};
  font-size: ${font.input};
  padding: 10px ${spacing.medium} 10px ${spacing.small};
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
  ${applyVariants(themeProps.select)};
`

SelectSimple.defaulthemeProps = {
  className: "",
  label: null
}

SelectSimple.propTypes = {
  label: PropTypes.string,
  children: commonPropTypes.children.isRequired,
  id: PropTypes.string.isRequired,
  className: PropTypes.string
}

SelectSimple.themeProps = themeProps
SelectSimple.createVariants = componentCreateFactory(SelectSimple)

export default SelectSimple
