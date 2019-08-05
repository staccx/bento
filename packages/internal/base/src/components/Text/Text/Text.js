import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import {
  commonPropTypes,
  themePropTypes
} from "../../../constants/themeContants"
import { applyVariants } from "../../../theming"

const Text = ({ level, children, className, ...restProps }) => {
  return (
    <Span className={className} {...restProps}>
      {children}
    </Span>
  )
}

Text.themeProps = {
  text: {
    name: "text",
    description: "",
    type: themePropTypes.style
  }
}

export const TEXT = "text"

export const Span = styled.span`
  ${applyVariants(Text.themeProps.text)};
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

export default Text
