import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

const Toggle = ({
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
    <CheckWrapper htmlFor={id} className={className}>
      <Check
        id={id}
        disabled={disabled}
        type="checkbox"
        name={group}
        onChange={onChange}
        defaultChecked={defaultChecked}
        {...otherProps}
      />
      <ToggleElement>
        <span>{children}</span>
      </ToggleElement>
    </CheckWrapper>
  )
}

const CheckWrapper = styled.label`
  min-height: ${targetSize.normal};
  padding-top: ${spacing.tiny};
  padding-bottom: ${spacing.tiny};
  display: block;
`

const ToggleElement = styled.div`
  background: ${color.line};
  border-radius: 2em;
  padding: 2px;
  transition: all 0.4s ease;
  span {
    position: absolute;
    clip: rect(0, 0, 0, 0);
    clip: rect(0 0 0 0);
  }
  &:after {
    border-radius: 50%;
    background: ${color.white};
    transition: all 0.2s ease;
  }
`

const Check = styled.input`
  position: absolute;
  clip: rect(0, 0, 0, 0);
  clip: rect(0 0 0 0);

  &,
  &:after,
  &:before,
  & *,
  & *:after,
  & *:before,
  & + ${ToggleElement} {
    box-sizing: border-box;
    &::selection {
      background: none;
    }
  }

  + ${ToggleElement} {
    outline: 0;
    display: block;
    width: 4em;
    height: 2em;
    position: relative;
    cursor: pointer;
    user-select: none;
    &:after,
    &:before {
      position: relative;
      display: block;
      content: "";
      width: 50%;
      height: 100%;
    }

    &:after {
      left: 0;
    }

    &:before {
      display: none;
    }
  }

  &:checked + ${ToggleElement} {
    background: ${color.green};
    &:after {
      transform: translateX(100%);
    }
  }
`

Toggle.propTypes = {
  disabled: PropTypes.bool,
  group: PropTypes.string,
  id: PropTypes.string.isRequired,
  input: PropTypes.any,
  onChange: PropTypes.func,
  className: PropTypes.string,
  defaultChecked: PropTypes.bool,
  children: PropTypes.any
}

Toggle.defaultProps = {
  disabled: false,
  input: {},
  onChange: null,
  value: "",
  className: "",
  defaultChecked: false,
  children: ""
}

export default Toggle
