import React from "react"
import PropTypes from "prop-types"
import Input, { InputPropTypes } from "../Input"
/**
 * Input for numbers and Currencies with possibilities to add prefix/suffix and optional thousand-seperators.
 */
const CurrencyInput = React.forwardRef(
  ({ prefix = null, delimiter = " ", options = {}, ...props }, ref) => {
    return (
      <Input
        type="tel"
        options={{ ...options, numeral: true, delimiter, prefix }}
        ref={ref}
        {...props}
      />
    )
  }
)

/* TODO: Should have a pattern so that we get number-keyboard: added this: https://stackoverflow.com/questions/6178556/phone-numeric-keyboard-for-text-input */

CurrencyInput.propTypes = {
  ...InputPropTypes,
  id: PropTypes.string.isRequired,
  suffix: PropTypes.string,
  prefix: PropTypes.string,
  thousandsSeparatorSymbol: PropTypes.string
}

CurrencyInput.defaultProps = {
  suffix: "",
  prefix: "",
  thousandsSeparatorSymbol: " "
}

export default CurrencyInput
