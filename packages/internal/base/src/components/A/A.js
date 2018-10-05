import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { commonPropTypes, themePropTypes } from "../../constants/themeContants"
import { applyVariants } from "../../theming"

const A = ({ children, className, ...restProps }) => {
  return (
    <AComponent className={className} {...restProps}>
      {children}
    </AComponent>
  )
}

A.themeProps = {
  a: {
    name: "A",
    description: "Link",
    type: themePropTypes.style
  }
}

export const AComponent = styled.a`
  text-decoration: none;
  color: currentColor;

  &:hover,
  &:active,
  &:focus {
    text-decoration: none;
    color: currentColor;
  }

  ${applyVariants(A.themeProps.a)};
`

A.defaultProps = {
  className: ""
}

A.propTypes = {
  children: commonPropTypes.children.isRequired,
  className: PropTypes.string
}

export default A
