import PropTypes from "prop-types"
import React from "react"
import { Box } from "@staccx/base"

const Calculator = ({ defaultValue }) => {
  return <Box variant="actionBox">{defaultValue}</Box>
}

export default Calculator

Calculator.propTypes = {
  defaultValue: PropTypes.number.isRequired
}

Calculator.defaultProps = {
  defaultValue: 250000
}
