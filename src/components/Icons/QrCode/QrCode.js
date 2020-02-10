import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"

const QrCode = ({ className }) => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect x="10" y="9" width="1" height="1" />
    <rect x="13" y="9" width="1" height="1" />
    <rect x="9" y="10" width="1" height="1" />
    <rect x="10" y="11" width="1" height="1" />
    <rect x="10" y="13" width="1" height="1" />
    <rect x="11" y="10" width="1" height="3" />
    <rect x="12" y="9" width="1" height="2" />
    <rect x="13" y="11" width="1" height="2" />
    <rect x="12" y="13" width="1" height="1" />
    <rect x="9" y="12" width="1" height="2" />
    <rect x="4" y="4" width="1" height="1" />
    <rect x="4" y="11" width="1" height="1" />
    <rect x="11" y="4" width="1" height="1" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6 3H3V6H6V3ZM2 2V7H7V2H2Z"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6 10H3V13H6V10ZM2 9V14H7V9H2Z"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13 3H10V6H13V3ZM9 2V7H14V2H9Z"
    />
  </svg>
)

const svg = styled.svg`
  fill: currentColor;
`

QrCode.propTypes = {
  /**
   * This is the selection of a class to style the QrCode icon.
   */
  className: PropTypes.string
}

export default QrCode
