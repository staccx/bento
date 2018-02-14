/**
 * @class MaskedInput
 */

import React from "react"
import PropTypes from "prop-types"
import MaskedInput from "./MaskedInput"
import styled, { css } from "styled-components"
import Label from "../Label/Label"

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
      ...otherProps
    } = this.props

    return (
      <InputWrapper className={className}>
        <Label htmlFor={id}>{label}</Label>
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
            type={type}
            {...otherProps}
          />
        )}
      </InputWrapper>
    )
  }
}

export const InputWrapper = styled.div`
  display: block;
  margin-bottom: 0;
  position: relative;
`

export const inputCss = css`
  display: block;
  width: 100%;
  margin: 0 auto;
  min-height: ${p => p.theme.targetSize.normal};
  border-width: 0;
  border-radius: ${p => p.theme.borderRadius};
  padding-left: ${p => p.theme.spacing.small};
  padding-right: ${p => p.theme.spacing.small};
  font-family: ${p => p.theme.font.body};
  transition: border-color 0.2s ease-out;
  font-size: ${p => p.theme.font.size.input};
  -webkit-appearance: none;
  appearance: none;
  -moz-appearance: textfield;
  border: 1px solid ${p => p.theme.color.line};

  &::-webkit-input-placeholder {
    /* WebKit browsers */
    color: ${p => p.theme.color.line};
  }
  &:-moz-placeholder {
    /* Mozilla Firefox 4 to 18 */
    color: ${p => p.theme.color.line};
  }
  &::-moz-placeholder {
    /* Mozilla Firefox 19+ */
    color: ${p => p.theme.color.line};
  }
  &:-ms-input-placeholder {
    /* Internet Explorer 10+ */
    color: ${p => p.theme.color.line};
  }
  &:-webkit-autofill {
    background-color: ${p => p.theme.color.bg};
  }

  &:hover,
  &:focus,
  &:active {
    outline: none;
    background-color: ${p => p.theme.color.subtleHover};
  }

  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
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
  label: PropTypes.string
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
  label: ""
}

Input.defaultProps = InputDefaultProps
/** @component */
export default Input
