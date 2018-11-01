import React from "react"
import PropTypes from "prop-types"
import Input, { InputPropTypes } from "../Input"
import "cleave.js/dist/addons/cleave-phone.no.js"
/**
 * Input for Phone-numbers.
 */
const PhoneInput = ({ locale, ...otherProps }) => (
  <Input
    type={"tel"}
    options={{
      phone: true,
      phoneRegionCode: locale
    }}
    {...otherProps}
  />
)

PhoneInput.propTypes = {
  ...InputPropTypes,
  locale: PropTypes.oneOf(["no"]),
  onChange: PropTypes.func,
  guide: PropTypes.bool,
  id: PropTypes.string.isRequired
}

PhoneInput.defaultProps = {
  locale: "no",
  guide: false
}

export default PhoneInput
