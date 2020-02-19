import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import Digit from "./Digit"
import { applyVariants, hideVisually } from "../../../theming"
import themeProps from "./Odometer.themeProps"

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

const OdometerAnimating = styled.div`
  ${p => (!p.isAnimating ? hideVisually : "display: flex;")};
  ${applyVariants(themeProps.animating)};
`

const OdometerStatic = styled.div`
  ${p => (p.isAnimating ? hideVisually : "display: flex;")};
  ${applyVariants(themeProps.static)};
`

const OdometerContainer = styled.div`
  position: relative;
  ${applyVariants(themeProps.container)};
`

const OdometerWrapper = styled.div`
  font-size: ${p => p.size}px;
  line-height: 1;
  display: inline-block;
  ${applyVariants(themeProps.wrapper)};
`

// TODO: Add support for strings?
Odometer.propTypes = {
  /**
   * The value it rolls to
   */
  number: PropTypes.number.isRequired,
  /**
   * Number seperator, normaly used as thousand seperator
   */
  separatorSteps: PropTypes.number,
  /**
   * Speed of the rolling numbers
   */
  speed: PropTypes.number,
  /**
   * Size of the number displayed
   */
  size: PropTypes.number.isRequired
}

Odometer.defaultProps = {
  number: 0,
  separatorSteps: 3,
  size: 32,
  speed: 500
}

Odometer.themeProps = themeProps

export default Odometer
