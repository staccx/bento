import React from "react"
import Input, { InputDefaultProps, InputPropTypes } from "../Input"
import {
  createCurrencyMask,
  currencyMaskOptions
} from "../../../../functions/Currency/currency"

const CurrencyInput = ({ ...props }) => {
  const createMask = createCurrencyMask({ ...props })
  Object.keys(currencyMaskOptions).forEach(key => {
    delete props[key]
  })
  delete props["mask"]
  const value = props.value ? props.value.toString() : '0'
  const mask = createMask(value)
  return <Input type="number" mask={mask} {...props} />
}

CurrencyInput.propTypes = InputPropTypes
CurrencyInput.defaultProps = {
  ...InputDefaultProps
}

export default CurrencyInput
