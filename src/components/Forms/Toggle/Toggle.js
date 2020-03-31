import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import {
  targetSize,
  spacing,
  color,
  applyVariants,
  commonPropTypes
} from "../../../theming"
import themeProps from "./Toggle.themeProps"
import { componentCreateFactory } from "../../../theming/utils/createVariantsFunctionFactory"

const Toggle = ({
  children,
  id,
  group,
  disabled,
  onChange,
  className,
  defaultChecked,
  variant,
  ...otherProps
}) => {
  return (
    <ToggleWrapper htmlFor={id} className={className} variant={variant}>
      <ToggleInput
        id={id}
        disabled={disabled}
        type="checkbox"
        name={group}
        onChange={onChange}
        defaultChecked={defaultChecked}
        variant={variant}
        {...otherProps}
      />
      <ToggleElement variant={variant}>
        <span>{children}</span>
      </ToggleElement>
    </ToggleWrapper>
  )
}

const ToggleWrapper = styled.label`
  min-height: ${targetSize.normal};
  padding-top: ${spacing.tiny};
  padding-bottom: ${spacing.tiny};
  display: block;
  ${applyVariants(themeProps.wrapper)};
`

const ToggleElement = styled.div`
  background-color: ${color.line};
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
  ${applyVariants(themeProps.toggleElement)};
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
    ${applyVariants(themeProps.checked)};
  }
  ${applyVariants(themeProps.input)};
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
Toggle.themeProps = themeProps
Toggle.createVariants = componentCreateFactory(Toggle)

export default Toggle
