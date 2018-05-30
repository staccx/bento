import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { spacing, borderRadius, themify, themeProps } from "@staccx/theme"

const Box = ({ children, className, size, ...otherProps }) => (
  <Boxing className={className} size={size} {...otherProps}>
    {children}
  </Boxing>
)

export const BOX = "BOX"

export const Boxing = styled.div`
  padding: ${p => (p.size === "flush" ? 0 : spacing(p.size))};
  border-radius: ${borderRadius};
  ${themify(BOX)};
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
