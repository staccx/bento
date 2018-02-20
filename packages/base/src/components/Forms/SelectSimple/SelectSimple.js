import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import Label from "../Label/Label"
import multiplyPixelValue from "../../../functions/multiplyPixelValue"

const Caret = ({ className }) => (
  <svg className={className} viewBox="0 0 24 16">
    <path d="M3.81 0a.54.54 0 0 0-.38.16L.16 3.47a.56.56 0 0 0 0 .78l11.45 11.59a.54.54 0 0 0 .78 0L23.84 4.25a.56.56 0 0 0 0-.78L20.57.17a.54.54 0 0 0-.77 0L12 8.04 4.2.16A.54.54 0 0 0 3.81 0z" />
  </svg>
)
Caret.propTypes = { className: PropTypes.string }
Caret.defaultProps = { className: "" }

const SelectSimple = ({
  options,
  label,
  placeholder,
  className,
  id,
  ...rest
}) => (
  <SelectWrapper>
    <Label htmlFor={id}>{label}</Label>
    <Select className={className} id={id} defaultValue={placeholder || ""}>
      {placeholder && (
        <option disabled value={placeholder}>
          {placeholder}
        </option>
      )}
      {options.map(option => (
        <option value={option} key={option}>
          {option}
        </option>
      ))}
    </Select>
    <SelectIcon />
  </SelectWrapper>
)

SelectSimple.defaultProps = {
  className: "",
  placeholder: ""
}

SelectSimple.propTypes = {
  label: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
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
  right: ${p => p.theme.spacing.small};
  bottom: ${p => multiplyPixelValue(p.theme.targetSize.normal, 0.5)};
  width: 12px;
  fill: ${p => p.theme.color.gray};
  transform: translateY(50%);
  transition: fill 0.2s ease;
`

const Select = styled.select`
  width: 100%;
  min-height: ${p => p.theme.targetSize.normal};
  font-size: ${p => p.theme.font.size.input};
  padding: 10px ${p => p.theme.spacing.medium} 10px
    ${p => p.theme.spacing.small};
  box-shadow: none;
  border-radius: ${p => p.theme.borderRadius};
  line-height: 1.4;
  border: 1px solid ${p => p.theme.color.line};
  -webkit-appearance: none;
  appearance: none;
  cursor: pointer;

  &:focus,
  &:hover {
    color: ${p => p.theme.color.blue};
    border-color: ${p => p.theme.color.line};
    outline: none;

    ~ ${SelectIcon} {
      fill: ${p => p.theme.color.primary};
    }
  }
`

export default SelectSimple
