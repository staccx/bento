/**
 * @class Slider2
 */

import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { applyVariants, color } from "../../../../theming"
import themeProps from "./Slider2.Track.themeProps"
import { componentCreateFactory } from "../../../../theming/utils/createVariantsFunctionFactory"

const Slider2Track = ({
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
  ${applyVariants(Slider2Track.themeProps.track)};
`

Slider2Track.defaultProps = {
  className: ""
}

Slider2Track.propTypes = {
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
Slider2Track.themeProps = themeProps
Slider2Track.createVariants = componentCreateFactory(Slider2Track)
/** @component */
export default Slider2Track
