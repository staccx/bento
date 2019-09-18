import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"

const Sms = ({ className }) => (
  <SVG
    width="16"
    height="16"
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect y="3" width="16" height="8" rx="2" />
    <path d="M0 9H4L0 15V9Z" />
  </SVG>
)

const SVG = styled.svg`
  fill: currentColor;
`

Sms.propTypes = {
  className: PropTypes.string
}

export default Sms
