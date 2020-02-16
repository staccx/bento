import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import {
  fontFamily,
  font,
  applyVariants,
  commonPropTypes,
  themePropTypes
} from "../../../theming"

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
  ${applyVariants(Paragraph.themeProps.paragraph)};
`

Paragraph.defaultProps = {
  className: null
}

Paragraph.propTypes = {
  children: commonPropTypes.children.isRequired,
  className: PropTypes.string
}

export default Paragraph
