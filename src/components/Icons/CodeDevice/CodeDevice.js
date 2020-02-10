import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"

const CodeDevice = ({ className }) => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3 4C1.34315 4 0 5.34315 0 7V8C0 9.65685 1.34315 11 3 11H13C14.6569 11 16 9.65685 16 8V7C16 5.34315 14.6569 4 13 4H3ZM13 6H5V9H13V6ZM3 7H2V8H3V7Z"
    />
  </svg>
)

const svg = styled.svg`
  fill: currentColor;
`

CodeDevice.propTypes = {
  /**
   * This is the selection of a class to style the CodeDevice icon.
   */
  className: PropTypes.string
}

export default CodeDevice
