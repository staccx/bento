import React from "react"
import { number, string } from "prop-types"
import styled from "styled-components"

const Digit = ({ isAnimating, digit, speed, size }) => {
  return (
    <DigitWrapper isAnimating size={size}>
      <DigitContainer digit={digit} speed={speed}>
        0 1 2 3 4 5 6 7 8 9 0
      </DigitContainer>
    </DigitWrapper>
  )
}

export const DigitWrapper = styled.div`
  height: ${p => p.size}px;
  width: ${p => p.size / 1.5}px;
  overflow: hidden;
`

const DigitContainer = styled.div`
  font-size: ${p => p.size}px;
  animationname: slide${p => p.digit};
  transform: translateY(-${p => p.digit}em);
  transition: transform ${p => p.speed}ms cubic-bezier(0, 0, 0.2, 1);
`

Digit.propTypes = {
  digit: string.isRequired,
  speed: number.isRequired,
  size: number.isRequired
}

export default Digit
