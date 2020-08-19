import React from "react"
import PropTypes from "prop-types"
import styled, { keyframes } from "styled-components"
import { applyVariants } from "../../theming"
import themeProps from "./Skeleton.Pulse.themeProps"
import { componentCreateFactory } from "../../theming/utils/createVariantsFunctionFactory"

/**
 * Skeleton is used as a placeholder and a illustrator that the page is loading components.
 * It is suppost to take the shape of the loading component and render a skeleton of that component,
 * also with a pulsing effect to illustrate loading.
 */
const SkeletonPulse = ({ className, ...restProps }) => {
  return <PulseStyle className={className} {...restProps} />
}

export const SKELETONPULSE = "skeletonpulse"

const pulseAnimation = keyframes`
  0% {
    background-position: 0% 0%;
  }
  100% {
    background-position: -135% 0%;
  }
`

export const PulseStyle = styled.div`
  display: inline-block;
  height: 100%;
  width: 100%;
  background-image: linear-gradient(
    -90deg,
    #f0f0f0 0%,
    #f8f8f8 50%,
    #f0f0f0 100%
  );
  background-size: 400% 400%;
  animation: ${pulseAnimation} 1.2s ease-in-out infinite;

  ${applyVariants(themeProps.pulse)};
`

SkeletonPulse.defaultProps = {
  className: null
}

SkeletonPulse.propTypes = {
  className: PropTypes.string
}
SkeletonPulse.themeProps = themeProps
SkeletonPulse.createVariants = componentCreateFactory(SkeletonPulse)

export default SkeletonPulse
