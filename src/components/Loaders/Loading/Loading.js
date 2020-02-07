import React from "react"
import PropTypes from "prop-types"
import styled, { keyframes } from "styled-components"
import { themePropTypes } from "../../../constants/themeContants"
import ThemeComponent from "../../Theme/ThemeComponent"
import { applyVariants, color, spacing } from "../../../theming"
import useTimer from "../../../hooks/useTimer"

const DefaultLoading = ({ className, variant, ...rest }) => (
  <SignalSpinner className={className} variant={variant} {...rest} />
)

export const COMPONENT_LOADING = "COMPONENT_LOADING"

const themeProps = {
  component: {
    name: "COMPONENT_LOADING",
    description: "Component for loading",
    type: themePropTypes.component
  },
  loading: {
    name: "LOADING",
    description: "Loading style",
    type: themePropTypes.style
  }
}

const Loading = ({ className, idleTime, ...rest }) => {
  const isReady = useTimer(idleTime)

  // Wait before rendering
  if (!isReady) {
    return null
  }
  return (
    <ThemeComponent
      tagName={themeProps.component.name}
      fallback={DefaultLoading}
      {...rest}
    />
  )
}

const spinnerBubble1 = keyframes`
  0% {
    color: ${color.primary};
    transform: translate(-50%, -50%) scale(1);
    opacity: 1;
  }
  100% {
    color:  ${color.secondary};
    transform: translate(-50%, -50%) scale(4.8);
    opacity: 0;
  }
`

const spinnerBubble2 = keyframes`
  0% {
    color: ${color.secondary};
    transform: translate(-50%, -50%) scale(1);
    opacity: 1;
  }
  100% {
    color: ${color.primary};
    transform: translate(-50%, -50%) scale(4.8);
    opacity: 0;
  }
`

const SignalSpinner = styled.div`
  position: relative;
  display: block;
  width: ${spacing.large};
  height: ${spacing.large};
  color: ${color.primary};

  &::before,
  &::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    width: 10px;
    height: 10px;
    opacity: 0;
    box-shadow: 0 0 0 1px;
    border-radius: 50%;
    transform: translate(-50%, -50%) scale(1);
    transform-origin: center;
  }

  &::before {
    animation: ${spinnerBubble1} 2.6s ease-out 1.3s infinite;
  }

  &::after {
    animation: ${spinnerBubble2} 2.6s ease-out 0s infinite;
  }
  ${applyVariants(themeProps.loading.name)};
`

Loading.propTypes = {
  className: PropTypes.string,
  /**
   * Allows different styles
   */
  variant: PropTypes.string
}
Loading.themeProps = themeProps

export default Loading
