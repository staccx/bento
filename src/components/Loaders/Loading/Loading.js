import React from "react"
import PropTypes from "prop-types"
import styled, { keyframes } from "styled-components"
import ThemeComponent from "../../Theme/ThemeComponent/ThemeComponent"
import { applyVariants, color, spacing } from "../../../theming"
import useTimer from "../../../hooks/useTimer"
import themeProps from "./Loading.themeProps"
import { componentCreateFactory } from "../../../theming/utils/createVariantsFunctionFactory"

const DefaultLoading = ({ className, variant, ...rest }) => (
  <SignalSpinner className={className} variant={variant} {...rest} />
)

export const COMPONENT_LOADING = "COMPONENT_LOADING"

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
    transform: translate(-50%, -50%) scale(0.2);
    opacity: 1;
  }
  100% {
    color:  ${color.secondary};
    transform: translate(-50%, -50%) scale(1);
    opacity: 0;
  }
`

const spinnerBubble2 = keyframes`
  0% {
    color: ${color.secondary};
    transform: translate(-50%, -50%) scale(0.2);
    opacity: 1;
  }
  100% {
    color: ${color.primary};
    transform: translate(-50%, -50%) scale(1);
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
    width: 40px;
    height: 40px;
    opacity: 0;
    border: 4px solid currentColor;
    border-radius: 50%;
    transform: translate(-50%, -50%) scale(0.2);
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
Loading.createVariants = componentCreateFactory(Loading)

export default Loading
