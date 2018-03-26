import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import withTheme from "../../../utils/withTheme"
import OdometerStyles from "./Odometer.styles"

const Digit = ({
  isAnimating,
  digit,
  speed,
  size,
  single,
  themeVariant,
  ignoreBase
}) => (
  <DigitWrapper
    isAnimating
    size={size}
    isEmpty={!digit}
    themeVariant={themeVariant}
    ignoreBase={ignoreBase}
  >
    <DigitContainer
      digit={digit}
      speed={speed}
      single={single}
      themeVariant={themeVariant}
      ignoreBase={ignoreBase}
    >
      {!digit ? "" : single ? digit : "0 1 2 3 4 5 6 7 8 9 0"}
    </DigitContainer>
  </DigitWrapper>
)

const DigitWrapper = withTheme(
  styled.div`
    ${props => (props.ignoreBase(props) ? null : OdometerStyles.DigitWrapper)};
    ${props => props.variantStyle(props)};
  `,
  "Odometer.DigitWrapper"
)

const DigitContainer = withTheme(
  styled.div`
    ${props =>
      props.ignoreBase(props) ? null : OdometerStyles.DigitContainer};
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
  themeVariant: PropTypes.string,
  ignoreBase: PropTypes.bool
}

export default Digit
