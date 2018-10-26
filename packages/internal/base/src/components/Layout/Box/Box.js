import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { applyVariants, spacing } from "../../../theming"
import {
  commonPropTypes,
  themePropTypes
} from "../../../constants/themeContants"

const Box = ({ children, className, size, ...otherProps }) => (
  <Boxing className={className} size={size} {...otherProps}>
    {children}
  </Boxing>
)

Box.themeProps = {
  box: {
    name: "BOX",
    description: "Box style",
    type: themePropTypes.style
  }
}

export const Boxing = styled.div`
  ${p => p.size && `padding: ${spacing(p.size)}`};
  ${applyVariants(Box.themeProps.box)};
`

Box.defaultProps = {
  className: ""
}

Box.propTypes = {
  children: commonPropTypes.children,
  className: PropTypes.string,
  size: commonPropTypes.spacing
}

export default Box
