import React from "react"
import PropTypes from "prop-types"
import Input, { InputPropTypes } from "../Input"
import { phoneMasks } from "../masks"

/**
 * Input for Phone-numbers.
 */
const PhoneInput = ({ mask, locale = "nb", guide, ...otherProps }) => (
  <Input type={"tel"} mask={phoneMasks[locale]} guide={guide} {...otherProps} />
)

PhoneInput.propTypes = {
  ...InputPropTypes,
  locale: PropTypes.oneOf(["nb"]),
  onChange: PropTypes.func,
  guide: PropTypes.bool,
  id: PropTypes.string.isRequired
}

PhoneInput.defaultProps = {
  locale: "nb",
  guide: false
}

export default PhoneInput
