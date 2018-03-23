import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import withTheme from "../../../utils/withTheme"

const Digit = ({ isAnimating, digit, speed, size, single }) => (
  <DigitWrapper isAnimating size={size} isEmpty={!digit}>
    <DigitContainer digit={digit} speed={speed} single={single}>
      {!digit ? "" : single ? digit : "0 1 2 3 4 5 6 7 8 9 0"}
    </DigitContainer>
  </DigitWrapper>
)

const DigitWrapper = withTheme(
  styled.div`
    ${props => props.themeStyle(props)};
  `,
  "Odometer.DigitWrapper"
)

const DigitContainer = withTheme(
  styled.div`
    ${props => props.themeStyle(props)};
  `,
  "Odometer.DigitContainer"
)

Digit.propTypes = {
  digit: PropTypes.string.isRequired,
  speed: PropTypes.number.isRequired,
  size: PropTypes.number.isRequired,
  isAnimating: PropTypes.bool,
  single: PropTypes.bool
}

export default Digit
