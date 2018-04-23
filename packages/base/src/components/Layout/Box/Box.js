import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

const Box = ({ children, className, size, ...otherProps }) => (
  <Boxing className={className} size={size} {...otherProps}>
    {children}
  </Boxing>
)

const Boxing = styled.div`
  padding: ${spacing[p.size]};
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
