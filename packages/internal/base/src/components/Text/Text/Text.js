import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { themify, themeProps } from "@staccx/theme"
import themePropTypes from "../../../constants/themePropTypes"

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
  ${themify(Text.themeProps.text)};
`

Text.defaultProps = {
  className: null
}

Text.propTypes = {
  children: themeProps.children.isRequired,
  className: PropTypes.string
}

export default Text
