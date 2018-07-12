import React from "react"
import PropTypes from "prop-types"
import Input, { InputPropTypes } from "../Input"
import { accountMasks } from "../masks"

const AccountInput = ({ mask, locale = "nb", ...otherProps }) => (
  <Input type={"tel"} mask={accountMasks[locale]} {...otherProps} />
)

AccountInput.propTypes = {
  ...InputPropTypes,
  locale: PropTypes.oneOf(["nb"]),
  onChange: PropTypes.func,
  id: PropTypes.string.isRequired,
  guide: PropTypes.bool
}

AccountInput.defaultProps = {
  locale: "nb",
  guide: false
}

export default AccountInput
