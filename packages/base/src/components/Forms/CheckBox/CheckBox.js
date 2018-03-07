import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import Check from "../../Icons/Check"
// const debug = require('debug')('CheckBox');

const CheckBox = ({
  children,
  id,
  group,
  disabled,
  onChange,
  className,
  defaultChecked,
  checkIcon,
  ...otherProps
}) => {
  const Icon = checkIcon || IconCheck
  return (
    <CheckWrapper>
      <InputCheck
        className={className}
        id={id}
        disabled={disabled}
        type="checkbox"
        name={group}
        onChange={onChange}
        defaultChecked={defaultChecked}
        {...otherProps}
      />

      <Label htmlFor={id}>
        <Icon />
        {children}
      </Label>
    </CheckWrapper>
  )
}

const CheckWrapper = styled.div`
  min-height: ${p => p.theme.targetSize.normal};
  padding-top: ${p => p.theme.spacing.small};
  padding-bottom: ${p => p.theme.spacing.small};
`

const IconCheck = styled(Check)`
  position: absolute;
  left: 2px;
  top: 2px;
  display: block;
  height: 20px;
  width: 20px;
  transform: scale(0);
  transition: all 0.2s ease-in-out;
  color: ${p => p.theme.color.primary};
`

const InputCheck = styled.input`
  position: absolute;
  clip: rect(0, 0, 0, 0);
  clip: rect(0 0 0 0);

  &:checked ~ label {
    ${IconCheck} {
      transform: scale(1);
    }
  }

  &:focus ~ label {
    &::before {
      border-color: ${p => p.theme.color.primary};
    }
  }
`

const Label = styled.label`
  padding: 0 0 0 ${p => p.theme.spacing.mediumPlus};
  position: relative;
  font-weight: normal;
  letter-spacing: normal;
  width: auto;
  cursor: pointer;
  font-family: ${p => p.theme.font.body};
  font-family: ${p => p.theme.font.size.input};
  line-height: 1.6;
  display: inline-block;

  &::before {
    content: "";
    background: ${p => p.theme.color.bg};
    border: 1px solid ${p => p.theme.color.line};
    display: block;
    height: ${p => p.theme.spacing.medium};
    left: 0;
    position: absolute;
    top: 0;
    width: ${p => p.theme.spacing.medium};
  }

  &:hover {
    &::before {
      border-color: ${p => p.theme.color.primary};
    }
  }
`

CheckBox.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element
  ]).isRequired,
  disabled: PropTypes.bool,
  group: PropTypes.string,
  id: PropTypes.string.isRequired,
  input: PropTypes.any,
  onChange: PropTypes.func,
  className: PropTypes.string,
  defaultChecked: PropTypes.bool
}

CheckBox.defaultProps = {
  disabled: false,
  input: {},
  onChange: null,
  value: "",
  className: "",
  defaultChecked: false
}

export default CheckBox
