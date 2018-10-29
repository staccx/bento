import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { themePropTypes } from "../../../constants/themeContants"
import { applyVariants, color } from "../../../theming"

const Divider = ({ level, className, height, ...restProps }) => {
  return <Rule className={className} height={height} {...restProps} />
}

Divider.themeProps = {
  rule: {
    name: "divider",
    description: "horizontal line style",
    type: themePropTypes.style
  }
}
export const Rule = styled.hr`
  height: ${p => p.height}px;
  width: 100%;
  min-width: 100px;
  border: none;
  background-color: ${color.line};
  ${applyVariants(Divider.themeProps.rule)};
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
