import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { color, themify } from "@staccx/theme"
import themePropTypes from "../../constants/themePropTypes"

const Donut = ({ progress, className, warningThreshold, ...rest }) => {
  const dash = 57
  const dashoffset = dash * progress - dash
  return (
    <Wrapper
      viewBox="0 0 24 24"
      width="24"
      height="24"
      className={className}
      {...rest}
    >
      <title>{progress * 100}%</title>
      <g fill="none" fillRule="evenodd" strokeWidth="6">
        <Bg cx="12" cy="12" r="9" />
        <Value
          cx="12"
          cy="12"
          r="9"
          transform="rotate(-90 12 12)"
          dash={dash}
          dashoffset={dashoffset}
          progress={progress}
          warningThreshold={warningThreshold}
        />
      </g>
    </Wrapper>
  )
}

Donut.themeProps = {
  donut: {
    name: "donut",
    description: "Wrapper style for donut",
    type: themePropTypes.style
  },
  donutBackground: {
    name: "donut_bg",
    description: "Circle style for donut background",
    type: themePropTypes.style
  },
  donutValue: {
    name: "donut_value",
    description: "Value style for donut",
    type: themePropTypes.style
  }
}

const Wrapper = styled.svg`
  transform: rotateY(180deg);
  ${themify(Donut.themeProps.donut.name)};
`

const Bg = styled.circle`
  stroke: ${color.line};
  ${themify(Donut.themeProps.donutBackground.name)};
`

const Value = styled.circle`
  stroke: ${p =>
    p.progress >= p.warningThreshold ? color.warning : color.primary};
  stroke-dasharray: ${p => p.dash};
  stroke-dashoffset: ${p => p.dashoffset};
  ${themify(Donut.themeProps.donutValue.name)};
`

Donut.defaultProps = {
  className: "",
  warningThreshold: 0.9
}

Donut.propTypes = {
  progress: PropTypes.number.isRequired,
  warningThreshold: PropTypes.number,
  className: PropTypes.string
}

export default Donut
