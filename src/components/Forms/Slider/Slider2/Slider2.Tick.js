/**
 * @class Slider2
 */

import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { applyVariants, color, font, themePropTypes } from "../../../../theming"

const Slider2Tick = ({ tick, count, format, className, ...restProps }) => (
  <div>
    <StartTick className={className} tick={tick} />
    <EndTick className={className} tick={tick} />
    {format(tick.value)}
  </div>
)

Slider2Tick.themeProps = {
  startTick: {
    name: "SLIDER2_START_TICK",
    description: "Tick style",
    type: themePropTypes.style
  },
  endTick: {
    name: "SLIDER2_END_TICK",
    description: "Tick style",
    type: themePropTypes.style
  }
}

const StartTick = styled.button`
  position: absolute;
  left: ${p => p.tick.percent}%;
  margin-top: 14px;
  width: 1px;
  height: 5px;
  background-color: ${color.gray};
  ${applyVariants(Slider2Tick.themeProps.startTick)};
`
const EndTick = styled.button`
  position: absolute;
  left: ${p => p.tick.percent}%;
  margin-top: 22px;
  width: ${p => 100 / p.count};
  text-align: center;
  font-size: ${font.small};
  background-color: ${color.gray};
  ${applyVariants(Slider2Tick.themeProps.endTick)};
`

Slider2Tick.defaultProps = {
  className: ""
}

Slider2Tick.propTypes = {
  className: PropTypes.string,
  domain: PropTypes.array.isRequired,
  handle: PropTypes.shape({
    id: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired,
    percent: PropTypes.number.isRequired
  }).isRequired,
  getHandleProps: PropTypes.func.isRequired
}

/** @component */
export default Slider2Tick
