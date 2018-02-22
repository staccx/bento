import React from "react"
import Input, { InputPropTypes } from "../Input"
import { accountMasks } from "../masks"

const AccountInput = ({ mask, locale = "nb", ...otherProps }) => (
  <Input type={"tel"} mask={accountMasks[locale]} {...otherProps} />
)

AccountInput.propTypes = InputPropTypes

export default AccountInput
