import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import Label from "./../Label/Label"

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
    <Select className={className} id={id}>
      {placeholder && (
        <option disabled selected>
          {placeholder}
        </option>
      )}
      {options.map(option => (
        <option value={option} key={option}>
          {option}
        </option>
      ))}
    </Select>
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

const Select = styled.select`
  background: transparent;
  font-size: ${p => p.theme.font.size.input};
  box-shadow: none;
  padding-top: 0;
  padding-left: ${p => p.theme.spacing.small};
  padding-right: ${p => p.theme.spacing.medium};
  min-height: ${p => p.theme.targetSize.normal};
  border-radius: ${p => p.theme.borderRadius};
  line-height: 1.4;
  border: 1px solid ${p => p.theme.color.line};
  -webkit-appearance: none;
  appearance: none;
  width: 100%;
  cursor: pointer;
  background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 5' width='14' height='8'%3e%3cpath fill='%237D7D91' d='M7.4 1.1l-1-1-2.3 2.3L1.8.1l-1 1 3.3 3.3z'/%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-position: right 7px top 55%;
  font-size: 16px;

  &:focus,
  &:hover {
    background-color: ${p => p.theme.color.subtleHover};
    color: ${p => p.theme.color.blue};
    border-color: ${p => p.theme.color.line};
    outline: none;
  }
`

export default SelectSimple
