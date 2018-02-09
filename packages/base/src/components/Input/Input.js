/**
 * @class MaskedInput
 */

import React from 'react'
import PropTypes from 'prop-types'
import MaskedInput from './MaskedInput'
import styled from 'styled-components'
import Label from '../Label/Label'

class Input extends React.Component {
  constructor (props) {
    super(props)
    this.focus = this.focus.bind(this)
  }

  focus () {
    this.input.focus()
  }

  render () {
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
        {mask ? <InputWithMask
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
            {...otherProps} />
          : <InputNoMask
            autoFocus={autoFocus}
            defaultValue={value}
            disabled={disabled}
            id={id}
            name={name}
            onBlur={onBlur}
            onChange={onChange}
            onKeyDown={onKeyDown}
            placeholder={placeholder}
            type={type}
            {...otherProps}
          />}
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
`

const InputWithMask = styled(MaskedInput)`
${inputCss}
`

const InputNoMask = styled.input`
 ${inputCss}
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
  type: PropTypes.oneOf(['text', 'email', 'number', 'tel', 'url']),
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
  type: 'text',
  value: '',
  label: ''
}

Input.defaultProps = InputDefaultProps

export default Input
