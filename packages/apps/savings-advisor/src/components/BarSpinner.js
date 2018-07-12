import React from "react"
import PropTypes from "prop-types"
import styled, { keyframes } from "styled-components"

const BarSpinner = ({ className }) => (
  <Spinner className={className}>
    <Bar order={1} />
    <Bar order={2} />
    <Bar order={3} />
    <Bar order={4} />
    <Bar order={5} />
    <Bar order={6} />
    <Bar order={7} />
  </Spinner>
)

const BarWave = keyframes`
  0%, 40%, 100% {
    transform: scaleY(0.6);
    background-color: #C7C7C7;
  }
  20% {
    transform: scaleY(1.0);
    background-color: #CF27AA;
  }
`

const Spinner = styled.div`
  display: flex;
`

const Bar = styled.div`
  width: 2px;
  margin: 0 2px;
  height: ${spacing.large};
  background-color: red;
  animation: ${BarWave} 1.2s ease-in-out -${p => 1 - p.order * 0.1}s infinite;
`

BarSpinner.propTypes = { className: PropTypes.string }

export default BarSpinner
