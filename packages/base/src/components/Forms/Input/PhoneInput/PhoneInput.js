import React from 'react'
import Input, { InputPropTypes } from '../Input'
import { phoneMasks } from '../masks'

const PhoneInput = ({mask, locale = 'nb', ...otherProps}) => (
  <Input type={'tel'} mask={phoneMasks[locale]} {...otherProps} />
)

PhoneInput.propTypes = InputPropTypes

export default PhoneInput