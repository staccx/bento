import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { multiplyPixelValue } from "@staccx/math"
import Label from "../Label/Label"
import {
  targetSize,
  spacing,
  borderRadius,
  font,
  color,
  themify
} from "@staccx/theme"

const Caret = ({ className }) => (
  <svg className={className} viewBox="0 0 24 16">
    <path d="M3.81 0a.54.54 0 0 0-.38.16L.16 3.47a.56.56 0 0 0 0 .78l11.45 11.59a.54.54 0 0 0 .78 0L23.84 4.25a.56.56 0 0 0 0-.78L20.57.17a.54.54 0 0 0-.77 0L12 8.04 4.2.16A.54.54 0 0 0 3.81 0z" />
  </svg>
)
Caret.propTypes = { className: PropTypes.string }
Caret.defaultProps = { className: "" }

const SelectSimple = ({
  children,
  label,
  placeholder,
  className,
  id,
  ...rest
}) => (
  <SelectWrapper className={className}>
    {label && <Label htmlFor={id}>{label}</Label>}
    <Select id={id} defaultValue={placeholder || ""} {...rest}>
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

SelectSimple.defaultProps = {
  className: "",
  placeholder: "",
  label: null
}

SelectSimple.propTypes = {
  label: PropTypes.string,
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
  placeholder: PropTypes.string,
  id: PropTypes.string.isRequired,
  className: PropTypes.string
}

const SelectWrapper = styled.div`
  display: block;
  margin-bottom: 0;
  position: relative;
`

const SelectIcon = styled(Caret)`
  position: absolute;
  right: ${spacing.small()};
  bottom: ${p => multiplyPixelValue(targetSize.normal()(p), 0.5)};
  width: 12px;
  fill: ${color.gray};
  transform: translateY(50%);
  transition: fill 0.2s ease;
`

const Select = styled.select`
  width: 100%;
  min-height: ${targetSize.normal};
  font-size: ${font.input};
  padding: 10px ${spacing.medium()} 10px
    ${spacing.small()};
  box-shadow: none;
  border-radius: ${borderRadius};
  line-height: 1.4;
  border: 1px solid ${color.line};
  -webkit-appearance: none;
  appearance: none;
  cursor: pointer;

  &:focus,
  &:hover {
    color: ${color.blue};
    border-color: ${color.line};
    outline: none;

    ~ ${SelectIcon} {
      fill: ${color.primary};
    }
  }
`

export default SelectSimple
