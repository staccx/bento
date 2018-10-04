import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { applyVariants, spacing, borderRadius } from "../../../theming"
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
  padding: ${p => (p.size === "flush" ? 0 : spacing(p.size))};
  border-radius: ${borderRadius};
  ${applyVariants(Box.themeProps.box)};
`

Box.defaultProps = {
  className: "",
  size: "medium"
}

Box.propTypes = {
  children: commonPropTypes.children,
  className: PropTypes.string,
  size: commonPropTypes.spacing
}

export default Box
