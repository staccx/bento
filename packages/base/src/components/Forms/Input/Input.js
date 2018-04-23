/**
 * @class Input
 */

import React from "react"
import PropTypes from "prop-types"
import MaskedInput from "./MaskedInput"
import styled, { css } from "styled-components"
import Label from "../Label/Label"
import {
  themify,
  color,
  spacing,
  borderRadius,
  font,
  targetSize
} from "@staccx/theme"

export const INPUT = "INPUT"
export const INPUT_LABEL = "INPUT_LABEL"
export const INPUT_WRAPPER = "INPUT_WRAPPER"

class Input extends React.Component {
  constructor(props) {
    super(props)
    this.focus = this.focus.bind(this)
  }

  focus() {
    this.input.focus()
  }

  render() {
    const {
      autoFocus,
      className,
      disabled,
      id,
      name,
      onBlur,
      onChange,
      onKeyDown,
      placeholder,
      type,
      value,
      label,
      mask,
      themeVariant,
      ...otherProps
    } = this.props
    return (
      <InputWrapper className={className} themeVariant={themeVariant}>
        {label && (
          <InputLabel themeVariant={themeVariant} htmlFor={id}>
            {label}
          </InputLabel>
        )}
        {mask ? (
          <InputWithMask
            mask={mask}
            autoFocus={autoFocus}
            value={value}
            disabled={disabled}
            id={id}
            name={name}
            onBlur={onBlur}
            onChange={onChange}
            onKeyDown={onKeyDown}
            placeholder={placeholder}
            themeVariant={themeVariant}
            type={type}
            {...otherProps}
          />
        ) : (
          <InputNoMask
            autoFocus={autoFocus}
            value={value}
            disabled={disabled}
            id={id}
            name={name}
            onBlur={onBlur}
            onChange={onChange}
            onKeyDown={onKeyDown}
            placeholder={placeholder}
            themeVariant={themeVariant}
            type={type}
            {...otherProps}
          />
        )}
      </InputWrapper>
    )
  }
}

const InputLabel = styled(Label)`
  ${themify(INPUT_LABEL)};
`

export const InputWrapper = styled.div`
  display: block;
  margin-bottom: 0;
  position: relative;
  ${themify(INPUT_WRAPPER)};
`

export const inputCss = css`
  display: block;
  width: 100%;
  min-height: ${targetSize()};
  margin: 0 auto;
  border: 1px solid ${color("line")};
  border-radius: ${borderRadius()};
  padding-left: ${spacing("small")};
  padding-right: ${spacing("small")};
  font-family: ${font("body", "type")};
  font-size: ${font("input")};
  transition: border-color 0.2s ease-out;
  -webkit-appearance: none;
  appearance: none;
  -moz-appearance: textfield;

  &::-webkit-input-placeholder {
    /* WebKit browsers */
    color: ${color("line")};
  }
  &:-moz-placeholder {
    /* Mozilla Firefox 4 to 18 */
    color: ${color("line")};
  }
  &::-moz-placeholder {
    /* Mozilla Firefox 19+ */
    color: ${color("line")};
  }
  &:-ms-input-placeholder {
    /* Internet Explorer 10+ */
    color: ${color("line")};
  }
  &:-webkit-autofill {
    background-color: ${color("bg")};
  }

  &:hover,
  &:focus,
  &:active {
    outline: none;
    background-color: ${color("subtleHover")};
  }

  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  ${themify(INPUT)};
`

const InputWithMask = styled(MaskedInput)`
  ${inputCss};
`

const InputNoMask = styled.input`
  ${inputCss};
`

export const InputPropTypes = {
  autoFocus: PropTypes.bool,
  callback: PropTypes.func,
  disabled: PropTypes.bool,
  hidden: PropTypes.bool,
  id: PropTypes.string.isRequired,
  name: PropTypes.string,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  onKeyDown: PropTypes.func,
  placeholder: PropTypes.string,
  style: PropTypes.object,
  type: PropTypes.oneOf(["text", "email", "number", "tel", "url"]),
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  label: PropTypes.string,
  className: PropTypes.string,
  mask: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.func,
    PropTypes.bool,
    PropTypes.shape({
      mask: PropTypes.oneOfType([PropTypes.array, PropTypes.func]),
      pipe: PropTypes.func
    })
  ])
}

Input.propTypes = InputPropTypes

export const InputDefaultProps = {
  autoFocus: null,
  callback: null,
  disabled: false,
  hidden: false,
  name: null,
  onBlur: null,
  onChange: null,
  onKeyDown: null,
  placeholder: null,
  style: null,
  type: "text",
  value: undefined,
  label: "",
  mask: null
}

Input.defaultProps = InputDefaultProps
/** @component */
export default Input
