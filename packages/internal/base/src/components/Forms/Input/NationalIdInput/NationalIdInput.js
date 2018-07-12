import React from "react"
import PropTypes from "prop-types"
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
/**
 * Input for National ID Numbers.
 */
const NationalIdInput = ({ mask, id, guide, locale = "nb", ...otherProps }) => (
  <Input
    type={"tel"}
    mask={masks[locale]}
    id={id}
    guide={guide}
    {...otherProps}
  />
)

NationalIdInput.propTypes = {
  ...InputPropTypes,
  locale: PropTypes.oneOf(["nb"]),
  id: PropTypes.string.isRequired,
  guide: PropTypes.bool
}

NationalIdInput.defaultProps = {
  locale: "nb",
  guide: true
}

export default NationalIdInput
