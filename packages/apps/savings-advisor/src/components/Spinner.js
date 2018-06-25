import React from "react"
import PropTypes from "prop-types"
import styled, { keyframes } from "styled-components"

const Spinner = ({ className }) => <SignalSpinner className={className} />

const spinnerBubble1 = keyframes`
    0% {
      color: #5D3B9F;
      transform: translate(-50%, -50%) scale(1);
      opacity: .4;
    }
    100% {
      color:  #2D9CDB;
      transform: translate(-50%, -50%) scale(4.8);
      opacity: 0;
    }
`

const spinnerBubble2 = keyframes`
    0% {
      color: #CF27AA;
      transform: translate(-50%, -50%) scale(1);
      opacity: .8;
    }
    100% {
      color: #E32367;
      transform: translate(-50%, -50%) scale(4.8);
      opacity: 0;
    }
`

const SignalSpinner = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: block;
  width: 100%;
  height: ${p => p.theme.spacing.large};
  color: ${p => p.theme.color.primary};

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
`

Spinner.propTypes = { className: PropTypes.string }

export default Spinner
