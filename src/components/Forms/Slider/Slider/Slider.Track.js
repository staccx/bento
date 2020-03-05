/**
 * @class Slider
 */

import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { applyVariants, color } from "../../../../theming"
import themeProps from "./Slider.Track.themeProps"
import { componentCreateFactory } from "../../../../theming/utils/createVariantsFunctionFactory"

const SliderTrack = ({
  source,
  target,
  getTrackProps,
  className,
  ...restProps
}) => (
  <Track
    className={className}
    source={source}
    target={target}
    {...restProps}
    {...getTrackProps()}
  />
)

const Track = styled.div`
  position: absolute;
  left: ${p => p.source.percent}%;
  z-index: 1;
  width: ${p => p.target.percent - p.source.percent}%;
  height: 14px;
  cursor: pointer;
  border: 0;
  border-radius: 7px;
  background-color: ${color.primary};
  ${applyVariants(themeProps.track)};
`

SliderTrack.defaultProps = {
  className: ""
}

SliderTrack.propTypes = {
  className: PropTypes.string,
  source: PropTypes.shape({
    id: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired,
    percent: PropTypes.number.isRequired
  }).isRequired,
  target: PropTypes.shape({
    id: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired,
    percent: PropTypes.number.isRequired
  }).isRequired,
  getTrackProps: PropTypes.func.isRequired
}
SliderTrack.themeProps = themeProps
SliderTrack.createVariants = componentCreateFactory(SliderTrack)
/** @component */
export default SliderTrack
