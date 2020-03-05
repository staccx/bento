/**
 * @class Slider
 */

import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { applyVariants, color, font } from "../../../../theming"
import themeProps from "./Slider.Tick.themeProps"
import { componentCreateFactory } from "../../../../theming/utils/createVariantsFunctionFactory"

const SliderTick = ({ tick, count, format, className, ...restProps }) => (
  <div>
    <StartTick className={className} tick={tick} />
    <EndTick className={className} tick={tick} />
    {format(tick.value)}
  </div>
)

const StartTick = styled.button`
  position: absolute;
  left: ${p => p.tick.percent}%;
  margin-top: 14px;
  width: 1px;
  height: 5px;
  background-color: ${color.gray};
  ${applyVariants(themeProps.startTick)};
`
const EndTick = styled.button`
  position: absolute;
  left: ${p => p.tick.percent}%;
  margin-top: 22px;
  width: ${p => 100 / p.count};
  text-align: center;
  font-size: ${font.small};
  background-color: ${color.gray};
  ${applyVariants(themeProps.endTick)};
`

SliderTick.defaultProps = {
  className: ""
}

SliderTick.propTypes = {
  className: PropTypes.string,
  domain: PropTypes.array.isRequired,
  handle: PropTypes.shape({
    id: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired,
    percent: PropTypes.number.isRequired
  }).isRequired,
  getHandleProps: PropTypes.func.isRequired
}
SliderTick.themeProps = themeProps
SliderTick.createVariants = componentCreateFactory(SliderTick)

/** @component */
export default SliderTick
