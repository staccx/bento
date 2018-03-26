import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import withTheme from "../../../utils/withTheme"

const Digit = ({ isAnimating, digit, speed, size, single, themeVariant }) => (
  <DigitWrapper
    isAnimating
    size={size}
    isEmpty={!digit}
    themeVariant={themeVariant}
  >
    <DigitContainer
      digit={digit}
      speed={speed}
      single={single}
      size={size}
      themeVariant={themeVariant}
    >
      {!digit ? "" : single ? digit : "0 1 2 3 4 5 6 7 8 9 0"}
    </DigitContainer>
  </DigitWrapper>
)

const DigitWrapper = withTheme(
  styled.div`
    height: ${p => p.size}px;
    width: ${p => (p.isEmpty ? p.size / 2 : p.size / 1.5)}px;
    overflow: hidden;
    ${props => props.variantStyle(props)};
  `,
  "Odometer.DigitWrapper"
)

const DigitContainer = withTheme(
  styled.div`
    font-size: ${p => p.size}px;
    ${p =>
      !p.single &&
      `
      animationname: slide${p.digit};
      transform: translateY(-${p.digit}em);
      transition: transform ${p.speed}ms cubic-bezier(0, 0, 0.2, 1);
      `};
    ${props => props.variantStyle(props)};
  `,
  "Odometer.DigitContainer"
)

Digit.propTypes = {
  digit: PropTypes.string.isRequired,
  speed: PropTypes.number.isRequired,
  size: PropTypes.number.isRequired,
  isAnimating: PropTypes.bool,
  single: PropTypes.bool,
  themeVariant: PropTypes.string
}

export default Digit
