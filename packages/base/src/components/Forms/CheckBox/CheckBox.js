import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

// const debug = require('debug')('CheckBox');

const CheckBox = ({
  children,
  id,
  group,
  disabled,
  onChange,
  className,
  defaultChecked,
  ...otherProps
}) => {
  return (
    <CheckWrapper>
      <Check
        className={className}
        id={id}
        disabled={disabled}
        type="checkbox"
        name={group}
        onChange={onChange}
        defaultChecked={defaultChecked}
        {...otherProps}
      />
      <Label htmlFor={id}>{children}</Label>
    </CheckWrapper>
  )
}

const CheckWrapper = styled.div`
  min-height: ${p => p.theme.targetSize.normal};
  padding-top: ${p => p.theme.spacing.small};
  padding-bottom: ${p => p.theme.spacing.small};
`

const Check = styled.input`
  position: absolute;
  clip: rect(0, 0, 0, 0);
  clip: rect(0 0 0 0);

  &:checked ~ label::after {
    transform: scale(1);
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

  &::after {
    content: "";
    background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 26 26' width='26px' height='26px'%3e%3cpath fill='${p =>
      p.theme.color.primary.replace(
        /#/i,
        "%23"
      )}' d='M 22.566406 4.730469 L 20.773438 3.511719 C 20.277344 3.175781 19.597656 3.304688 19.265625 3.796875 L 10.476563 16.757813 L 6.4375 12.71875 C 6.015625 12.296875 5.328125 12.296875 4.90625 12.71875 L 3.371094 14.253906 C 2.949219 14.675781 2.949219 15.363281 3.371094 15.789063 L 9.582031 22 C 9.929688 22.347656 10.476563 22.613281 10.96875 22.613281 C 11.460938 22.613281 11.957031 22.304688 12.277344 21.839844 L 22.855469 6.234375 C 23.191406 5.742188 23.0625 5.066406 22.566406 4.730469 Z '/%3e%3c/svg%3e ");
    background-repeat: no-repeat;
    background-size: cover;
    display: block;
    height: 24px;
    width: 24px;
    left: 0px;
    line-height: 20px;
    position: absolute;
    top: 0px;
    transform: scale(0);
    transition: all 0.2s ease-in-out;
  }

  &:hover {
    &::before {
      border-color: ${p => p.theme.color.primary};
    }
  }
`

CheckBox.propTypes = {
  children: PropTypes.string.isRequired,
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
