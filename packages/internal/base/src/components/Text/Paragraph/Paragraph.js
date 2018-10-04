import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { fontFamily, font, themify, themeProps } from "@staccx/theme"
import themePropTypes from "../../../constants/themePropTypes"

const Paragraph = ({ children, className, ...restProps }) => {
  return (
    <P className={className} {...restProps}>
      {children}
    </P>
  )
}

Paragraph.themeProps = {
  paragraph: {
    name: "paragraph",
    description: "",
    type: themePropTypes.style
  }
}

export const P = styled.p`
  font-family: ${fontFamily.body};
  line-height: ${font.lineHeight};
  ${themify(Paragraph.themeProps.paragraph)};
`

Paragraph.defaultProps = {
  className: null
}

Paragraph.propTypes = {
  children: themeProps.children.isRequired,
  className: PropTypes.string
}

export default Paragraph
