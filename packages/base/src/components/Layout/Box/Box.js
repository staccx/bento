import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { spacing, borderRadius, themify } from "@staccx/theme"
const Box = ({ children, className, size, ...otherProps }) => (
  <Boxing className={className} size={size} {...otherProps}>
    {children}
  </Boxing>
)

export const BOX = "BOX"

export const Boxing = styled.div`
  padding: ${p => spacing(p.size)};
  border-radius: ${borderRadius};
  ${themify(BOX)};
`

Box.defaultProps = {
  className: "",
  size: "medium"
}

Box.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element,
    PropTypes.string,
    PropTypes.array
  ]),
  className: PropTypes.string,
  size: PropTypes.oneOf([
    "huge",
    "large",
    "mediumPlus",
    "medium",
    "small",
    "tiny",
    "micro"
  ])
}

export default Box
