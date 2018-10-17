import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { commonPropTypes, themePropTypes } from "../../constants/themeContants"
import { applyVariants } from "../../theming"

const Anchor = ({ children, className, ...restProps }) => {
  return (
    <AComponent className={className} {...restProps}>
      {children}
    </AComponent>
  )
}

Anchor.themeProps = {
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

  ${applyVariants(Anchor.themeProps.a)};
`

Anchor.defaultProps = {
  className: ""
}

Anchor.propTypes = {
  children: commonPropTypes.children.isRequired,
  className: PropTypes.string
}

export default Anchor
