import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { spacing, borderRadius, themify, themeProps } from "@staccx/theme"
import themePropTypes from "../../../constants/themePropTypes"

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
  ${themify(Box.themeProps.box)};
`

Box.defaultProps = {
  className: "",
  size: "medium"
}

Box.propTypes = {
  children: themeProps.children,
  className: PropTypes.string,
  size: themeProps.spacing
}

export default Box
