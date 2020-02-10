import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

const CheckIcon = styled.svg`
  width: 12px;
  transition: fill 0.2s ease;
  fill: currentColor;
`

const Check = ({ className }) => (
  <CheckIcon className={className} viewBox="0 0 24 24">
    <path d="M23.43 1.75L21.27.23c-.6-.41-1.4-.25-1.8.36L8.9 16.72l-4.84-5.03a1.27 1.27 0 0 0-1.83 0l-1.85 1.9a1.4 1.4 0 0 0 0 1.92l7.46 7.73A2.5 2.5 0 0 0 9.5 24c.6 0 1.2-.37 1.57-.96L23.78 3.63a1.4 1.4 0 0 0-.36-1.88h.01z" />
  </CheckIcon>
)

Check.propTypes = {
  /**
   * This is the selection of a class to style the Check-icon.
   */
  className: PropTypes.string
}

export default Check
