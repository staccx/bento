import React from "react"
import Input, { InputDefaultProps, InputPropTypes } from "../Input"
import {
  createCurrencyMask,
  currencyMaskOptions
} from "../../../../functions/Currency/currency"

const CurrencyInput = ({ ...props }) => {
  const mask = createCurrencyMask({ ...props })
  Object.keys(currencyMaskOptions).forEach(key => {
    delete props[key]
  })
  delete props["mask"]
  return <Input type="number" mask={mask} {...props} />
}

CurrencyInput.propTypes = InputPropTypes
CurrencyInput.defaultProps = {
  ...InputDefaultProps
}

export default CurrencyInput
