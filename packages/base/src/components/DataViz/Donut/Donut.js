import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import {
  color,
  themify
} from "@staccx/theme"

const Donut = ({ percentage, className, ...rest }) => {
  const dash = 57
  const dashoffset = 57 * percentage - 57
  return (
    <Wrapper
      viewBox="0 0 24 24"
      width="24"
      height="24"
      className={className}
      {...rest}
    >
      <title>{percentage * 100}%</title>
      <g fill="none" fillRule="evenodd" strokeWidth="6">
        <Bg cx="12" cy="12" r="9" />
        <Value
          cx="12"
          cy="12"
          r="9"
          transform="rotate(-90 12 12)"
          dash={dash}
          dashoffset={dashoffset}
        />
      </g>
    </Wrapper>
  )
}

export const DONUT = "donut"

const Wrapper = styled.svg`
  transform: rotateY(180deg);
  ${themify(DONUT)};
`

export const DONUT_BG = "donut_bg"

const Bg = styled.circle`
  stroke: ${color.line};
  ${themify(DONUT_BG)};
`

export const DONUT_VALUE = "donut_value"

const Value = styled.circle`
  stroke: ${color.primary};
  stroke-dasharray: ${p => p.dash};
  stroke-dashoffset: ${p => p.dashoffset};
  ${themify(DONUT_VALUE)};
`

Donut.defaultProps = {
  className: ""
}

Donut.propTypes = {
  percentage: PropTypes.number.isRequired,
  className: PropTypes.string
}

export default Donut
