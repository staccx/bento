import React from "react"
import PropTypes from "prop-types"
import Input, { InputPropTypes } from "../Input"

const options = {
  nb: { blocks: [6, 5], numericOnly: true, delimiter: "·" }
}
/**
 * Input for National ID Numbers.
 */
const NationalIdInput = ({ mask, id, guide, locale = "nb", ...otherProps }) => (
  <Input type={"tel"} options={options[locale]} id={id} {...otherProps} />
)

NationalIdInput.propTypes = {
  ...InputPropTypes,
  locale: PropTypes.oneOf(["nb"]),
  id: PropTypes.string.isRequired,
  guide: PropTypes.bool
}

NationalIdInput.defaultProps = {
  locale: "nb",
  guide: false
}

export default NationalIdInput
