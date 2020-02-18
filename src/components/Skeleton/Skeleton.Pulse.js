import React from "react"
import PropTypes from "prop-types"
import styled, { keyframes } from "styled-components"
import { applyVariants, themePropTypes } from "../../theming"

const SkeletonPulse = ({ className, ...restProps }) => {
  return <PulseStyle className={className} {...restProps} />
}

SkeletonPulse.themeProps = {
  pulse: {
    name: "pulse",
    description: "The pulse animation",
    type: themePropTypes.style
  }
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

  ${applyVariants(SkeletonPulse.themeProps.pulse)};
`

SkeletonPulse.defaultProps = {
  className: null
}

SkeletonPulse.propTypes = {
  className: PropTypes.string
}

export default SkeletonPulse
