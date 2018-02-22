import React from "react"
import Input, { InputDefaultProps, InputPropTypes } from "../Input"
import { createCurrencyMask } from '../../../../functions/Currency/currency'

const CurrencyInput = ({ ...props }) => {
  const mask = createCurrencyMask({...props})
  return <Input type="number" mask={mask} {...props} />
}

CurrencyInput.propTypes = InputPropTypes
CurrencyInput.defaultProps = {
  ...InputDefaultProps
}

export default CurrencyInput
