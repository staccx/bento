import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"

const BankId = ({ className }) => (
  <SVG
    width="16"
    height="16"
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect y="3" width="5" height="2" />
    <rect x="11" y="3" width="5" height="2" />
    <rect x="11" y="6" width="5" height="2" />
    <rect x="6" y="6" width="4" height="2" />
    <rect y="9" width="5" height="2" />
    <rect x="6" y="9" width="4" height="2" />
    <rect y="12" width="5" height="2" />
    <rect x="11" y="12" width="5" height="2" />
  </SVG>
)

const SVG = styled.svg`
  fill: currentColor;
`

BankId.propTypes = {
  className: PropTypes.string
}

export default BankId
