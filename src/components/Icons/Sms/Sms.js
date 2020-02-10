import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"

const Sms = ({ className }) => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect y="3" width="16" height="8" rx="2" />
    <path d="M0 9H4L0 15V9Z" />
  </svg>
)

const svg = styled.svg`
  fill: currentColor;
`

Sms.propTypes = {
  /**
   * This is the selection of a class to style the SMS icon.
   */
  className: PropTypes.string
}

export default Sms
