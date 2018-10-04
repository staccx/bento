import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import {
  commonPropTypes,
  themePropTypes
} from "../../../constants/themeContants"
import { targetSize, spacing, color, applyVariants } from "../../../theming"

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

Toggle.themeProps = {
  wrapper: {
    name: "TOGGLE",
    description: "Toggle style",
    type: themePropTypes.style
  },
  toggleElement: {
    name: "TOGGLE_ELEMENT",
    description: "Toggle element style",
    type: themePropTypes.style
  },
  input: {
    name: "TOGGLE_INPUT",
    description: "Toggle input style",
    type: themePropTypes.style
  },
  checked: {
    name: "  TOGGLE_ELEMENT_CHECKED",
    description: "Toggle element checked style",
    type: themePropTypes.style
  }
}

const ToggleWrapper = styled.label`
  min-height: ${targetSize.normal};
  padding-top: ${spacing.tiny};
  padding-bottom: ${spacing.tiny};
  display: block;
  ${applyVariants(Toggle.themeProps.wrapper)};
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
  ${applyVariants(Toggle.themeProps.toggleElement)};
`

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
    ${applyVariants(Toggle.themeProps.checked)};
  }
  ${applyVariants(Toggle.themeProps.input)};
`

Toggle.propTypes = {
  disabled: PropTypes.bool,
  group: PropTypes.string,
  id: PropTypes.string.isRequired,
  input: PropTypes.any,
  onChange: PropTypes.func,
  className: PropTypes.string,
  defaultChecked: PropTypes.bool,
  children: commonPropTypes.children
}

Toggle.defaultProps = {
  disabled: false,
  input: {},
  onChange: null,
  className: "",
  defaultChecked: false,
  children: ""
}

export default Toggle
