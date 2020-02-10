import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"

const CodeCard = ({ className }) => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M1 3C0.447715 3 0 3.44772 0 4V11C0 11.5523 0.447715 12 1 12H15C15.5523 12 16 11.5523 16 11V4C16 3.44772 15.5523 3 15 3H1ZM3 5H5V6H3V5ZM7 5H9V6H7V5ZM13 5H11V6H13V5ZM3 7H5V8H3V7ZM9 7H7V8H9V7ZM11 7H13V8H11V7ZM5 9H3V10H5V9ZM7 9H9V10H7V9ZM13 9H11V10H13V9Z"
    />
  </svg>
)

const svg = styled.svg`
  fill: currentColor;
`

CodeCard.propTypes = {
  /**
   * This is the selection of a class to style the CodeCard icon.
   */
  className: PropTypes.string
}

export default CodeCard
