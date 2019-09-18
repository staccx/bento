import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"

const BankIdMobile = ({ className }) => (
  <SVG
    width="16"
    height="16"
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="16" height="16" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5 0C4.44772 0 4 0.447715 4 1V15C4 15.5523 4.44772 16 5 16H11C11.5523 16 12 15.5523 12 15V1C12 0.447715 11.5523 0 11 0H5ZM5 2C5 1.44772 5.44772 1 6 1V2H10V1C10.5523 1 11 1.44772 11 2V14C11 14.5523 10.5523 15 10 15H6C5.44772 15 5 14.5523 5 14V2Z"
    />
  </SVG>
)

const SVG = styled.svg`
  fill: currentColor;
`

BankIdMobile.propTypes = {
  className: PropTypes.string
}

export default BankIdMobile
