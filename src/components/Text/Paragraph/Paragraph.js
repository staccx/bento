import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import {
  fontFamily,
  font,
  applyVariants,
  commonPropTypes
} from "../../../theming"
import themeProps from "./Paragraph.themeProps"

const Paragraph = ({ children, className, ...restProps }) => {
  return (
    <P className={className} {...restProps}>
      {children}
    </P>
  )
}

export const P = styled.p`
  font-family: ${fontFamily.body};
  line-height: ${font.lineHeight};
  ${applyVariants(themeProps.paragraph)};
`

Paragraph.defaultProps = {
  className: null
}

Paragraph.propTypes = {
  children: commonPropTypes.children.isRequired,
  className: PropTypes.string
}
Paragraph.themeProps = themeProps
export default Paragraph
