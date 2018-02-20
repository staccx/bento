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
    <CheckWrapper htmlFor={id}>
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
      <ToggleElement>
        <span>{children}</span>
      </ToggleElement>
    </CheckWrapper>
  )
}

const CheckWrapper = styled.label`
  min-height: ${p => p.theme.targetSize.normal};
  padding-top: ${p => p.theme.spacing.tiny};
  padding-bottom: ${p => p.theme.spacing.tiny};
  display: block;
`

const ToggleElement = styled.div`
  background: ${p => p.theme.color.line};
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
    background: ${p => p.theme.color.white};
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
    background: ${p => p.theme.color.green};
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
