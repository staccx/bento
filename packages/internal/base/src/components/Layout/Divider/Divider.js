import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { color, themify } from "@staccx/theme"

const Divider = ({ level, className, ...restProps }) => {
  return <Rule className={className} {...restProps} />
}

export const DIVIDER = "divider"

export const Rule = styled.hr`
  height: 1px;
  width: 100%;
  border-width: 0;
  background-color: ${color.line};
  ${themify(DIVIDER)};
`

Divider.defaultProps = {
  className: null
}

Divider.propTypes = {
  className: PropTypes.string
}

export default Divider
