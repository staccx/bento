import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

const Donut = ({ percentage }) => {
  const dash = 57
  const dashoffset = 57 * percentage
  console.log(dashoffset)
  return (
    <Graph viewBox="0 0 24 24" width="24" height="24">
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
    </Graph>
  )
}

const Graph = styled.svg`
  transform: rotateY(180deg);
`

const Bg = styled.circle`
  stroke: ${p => p.theme.color.primary};
`

const Value = styled.circle`
  stroke: ${p => p.theme.color.line};
  stroke-dasharray: ${p => p.dash};
  stroke-dashoffset: ${p => p.dashoffset};
`

Donut.propTypes = {
  percentage: PropTypes.number.isRequired
}

export default Donut
