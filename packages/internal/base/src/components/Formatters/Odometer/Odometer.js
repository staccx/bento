import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import hideVisually from "../../../Styles/hideVisually"
import Digit from "./Digit"
import { themify } from "@staccx/theme"

class Odometer extends React.PureComponent {
  constructor(...props) {
    super(...props)

    this.state = {
      isAnimating: false
    }

    this.timeout = null

    this.animate = this.animate.bind(this)
  }

  componentWillMount() {
    this.animate()
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.number !== nextProps.number) {
      this.animate()
    }
  }

  animate() {
    this.setState({ isAnimating: true })
    clearTimeout(this.timeout)
    this.timeout = setTimeout(() => {
      this.setState({ isAnimating: false })
    }, this.props.speed + 10)
  }

  render() {
    const {
      number,
      speed,
      size,
      separatorSteps,
      variant,
      ...restProps
    } = this.props
    const { isAnimating } = this.state
    const chars = parseInt(number, 10)
      .toString()
      .replace("-", "")
      .split("")
    const digitLength = chars.length
    const numSeparators = digitLength / separatorSteps
    for (let i = 0; i < numSeparators; i++) {
      // TODO: There HAS to be a smarter way of doing this. Brain is not working atm
      chars.splice(digitLength - separatorSteps * i, 0, "")
    }

    const renderDigits = (digit, single, speed) =>
      chars.map((digit, i) => (
        <OdometerContainer key={`digit-${i}`} variant={variant}>
          <Digit
            size={size}
            digit={digit}
            single={single}
            speed={speed}
            variant={variant}
          />
        </OdometerContainer>
      ))
    return (
      <OdometerWrapper size={size} variant={variant} {...restProps}>
        <OdometerStatic isAnimating={isAnimating} variant={variant}>
          {renderDigits(number, true, speed)}
        </OdometerStatic>
        <OdometerAnimating isAnimating={isAnimating} variant={variant}>
          {renderDigits(number, false, speed)}
        </OdometerAnimating>
      </OdometerWrapper>
    )
  }
}

export const ODOMETER_ANIMATING = "odometer_animating"
const OdometerAnimating = styled.div`
  ${p => (!p.isAnimating ? hideVisually : "display: flex;")};
  ${themify(ODOMETER_ANIMATING)};
`

export const ODOMETER_STATIC = "odometer_static"
const OdometerStatic = styled.div`
  ${p => (p.isAnimating ? hideVisually : "display: flex;")};
  ${themify(ODOMETER_STATIC)};
`

export const ODOMETER_CONTAINER = "odometer_container"
const OdometerContainer = styled.div`
  position: relative;
  ${themify(ODOMETER_CONTAINER)};
`

export const ODOMETER_WRAPPER = "odometer_wrapper"
const OdometerWrapper = styled.div`
  font-size: ${p => p.size}px;
  line-height: 1;
  display: inline-block;
  ${themify(ODOMETER_WRAPPER)};
`

// TODO: Add support for strings?
Odometer.propTypes = {
  number: PropTypes.number.isRequired,
  separatorSteps: PropTypes.number,
  speed: PropTypes.number,
  size: PropTypes.number.isRequired,
  variant: PropTypes.string
}

Odometer.defaultProps = {
  separatorSteps: 3,
  speed: 500,
  variant: null,
  ignoreBase: null
}

export default Odometer
