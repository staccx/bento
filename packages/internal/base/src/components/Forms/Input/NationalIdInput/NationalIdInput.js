import React from "react"
import Input, { InputPropTypes } from "../Input"

const masks = {
  nb: [
    /[0-9]/,
    /[0-9]/,
    /[0-1]/,
    /[0-9]/,
    /[0-9]/,
    /[0-9]/,
    " ",
    /\d/,
    /\d/,
    /\d/,
    /\d/,
    /\d/
  ]
}

const NationalIdInput = ({ mask, locale = "nb", ...otherProps }) => (
  <Input type={"tel"} mask={masks[locale]} {...otherProps} />
)

NationalIdInput.propTypes = InputPropTypes

export default NationalIdInput
