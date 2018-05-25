import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { fontFamily, font, themify } from "@staccx/theme"

const Paragraph = ({ level, children, className, ...restProps }) => {
  return (
    <P className={className} {...restProps}>
      {children}
    </P>
  )
}

export const PARAGRAPH = "paragraph"

export const P = styled.p`
  font-family: ${fontFamily.body};
  line-height: ${font.lineHeight};
  ${themify(PARAGRAPH)};
`

Paragraph.defaultProps = {
  className: null
}

Paragraph.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.string,
    PropTypes.number,
    PropTypes.array
  ]).isRequired,
  className: PropTypes.string
}

export default Paragraph
