import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { themify, themeProps } from "@staccx/theme"

const Text = ({ level, children, className, ...restProps }) => {
  return (
    <Span className={className} {...restProps}>
      {children}
    </Span>
  )
}

export const TEXT = "text"

export const Span = styled.span`
  ${themify(TEXT)};
`

Text.defaultProps = {
  className: null
}

Text.propTypes = {
  children: themeProps.children.isRequired,
  className: PropTypes.string
}

export default Text
