import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { themify } from "@staccx/theme"

const Text = ({ level, children, className }) => {
  return <Span className={className}>{children}</Span>
}

export const TEXT = "text"

const Span = styled.span`
  ${themify(TEXT)};
`

Text.defaultProps = {
  className: null
}

Text.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.string,
    PropTypes.number
  ]).isRequired,
  className: PropTypes.string
}

export default Text
