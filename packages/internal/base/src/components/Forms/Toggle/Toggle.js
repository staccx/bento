import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import {
  targetSize,
  spacing,
  borderRadius,
  fontFamily,
  font,
  color,
  themify
} from "@staccx/theme"

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
    <ToggleWrapper htmlFor={id} className={className}>
      <ToggleInput
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
    </ToggleWrapper>
  )
}

export const TOGGLE = "TOGGLE"
const ToggleWrapper = styled.label`
  min-height: ${targetSize.normal};
  padding-top: ${spacing.tiny()};
  padding-bottom: ${spacing.tiny()};
  display: block;
  ${themify(TOGGLE)};
`

export const TOGGLE_ELEMENT = "TOGGLE_ELEMENT"
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
  ${themify(TOGGLE_ELEMENT)};
`

export const TOGGLE_INPUT = "TOGGLE_INPUT"
export const TOGGLE_ELEMENT_CHECKED = "TOGGLE_ELEMENT_CHECKED"
const ToggleInput = styled.input`
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
     {
      /* TODO: Burde dette vært flyttet inn i Toggle-element over?*/
    }
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
    ${themify(TOGGLE_ELEMENT_CHECKED)};
  }
  ${themify(TOGGLE_INPUT)};
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
