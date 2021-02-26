import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { applyVariants, commonPropTypes } from "../../../theming"
import themeProps from "./Text.themeProps"
import { componentCreateFactory } from "../../../theming/utils/createVariantsFunctionFactory"

/**
 * Text is is like a span tag, but it also takes inn i18n (translation) as props
 */
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
Text.createVariants = componentCreateFactory(Text)

export default Text
