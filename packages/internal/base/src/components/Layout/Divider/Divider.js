import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { color, themify } from "@staccx/theme"

const Divider = ({ level, className, height, ...restProps }) => {
  return <Rule className={className} height={height} {...restProps} />
}

export const DIVIDER = "divider"

export const Rule = styled.hr`
  height: ${p => p.height}px;
  width: 100%;
  border: none;
  background-color: ${color.line};
  ${themify(DIVIDER)};
`

Divider.defaultProps = {
  className: null,
  height: 1
}

Divider.propTypes = {
  className: PropTypes.string,
  height: PropTypes.number
}

export default Divider
