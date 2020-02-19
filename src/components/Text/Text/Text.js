import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { applyVariants, commonPropTypes } from "../../../theming"
import themeProps from "./Text.themeProps"

const Text = ({ level, children, className, ...restProps }) => {
  return (
    <Span className={className} {...restProps}>
      {children}
    </Span>
  )
}

export const TEXT = "text"

export const Span = styled.span`
  ${applyVariants(themeProps.text)};
`

Text.defaultProps = {
  className: null
}

Text.propTypes = {
  children: commonPropTypes.children.isRequired,
  /**
   * Will translate text given context and language.
   * Ignore is not set
   */
  i18n: PropTypes.string,
  className: PropTypes.string
}
Text.themeProps = themeProps

export default Text
