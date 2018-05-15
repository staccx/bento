import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { fontFamily, themify } from "@staccx/theme"

const Paragraph = ({ level, children, className }) => {
  return <P className={className}>{children}</P>
}

export const PARAGRAPH = "paragraph"

const P = styled.p`
  font-family: ${fontFamily.body};
  ${themify(PARAGRAPH)};
`

Paragraph.defaultProps = {
  className: null
}

Paragraph.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.string,
    PropTypes.number
  ]).isRequired,
  className: PropTypes.string
}

export default Paragraph
