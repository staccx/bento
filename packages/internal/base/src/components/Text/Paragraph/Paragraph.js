import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { fontFamily, font, themify, themeProps } from "@staccx/theme"

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
  children: themeProps.children.isRequired,
  className: PropTypes.string
}

export default Paragraph
