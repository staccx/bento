import React, { useRef } from "react"
import PropTypes from "prop-types"
import Input, { InputPropTypes } from "../Input"
import { accountMasks } from "../masks"

const AccountInput = React.forwardRef(
  ({ mask, locale = "nb", ...otherProps }, ref) => {
    const inputRef = useRef(ref)
    return (
      <Input
        type="tel"
        ref={inputRef}
        options={accountMasks[locale]}
        {...otherProps}
      />
    )
  }
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
