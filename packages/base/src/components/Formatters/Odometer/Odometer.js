import React from "react"
import { number } from "prop-types"
import styled from "styled-components"
import withTheme from "../../../utils/withTheme"
import Digit from "./Digit"

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
    const { number, speed, size, separatorSteps, ...restProps } = this.props
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
        <OdometerContainer key={`digit-${i}`}>
          <Digit size={size} digit={digit} single={single} speed={speed} />
        </OdometerContainer>
      ))

    return (
      <OdometerWrapper size={size} {...restProps}>
        <OdometerStatic isAnimating={isAnimating}>
          {renderDigits(number, true, speed)}
        </OdometerStatic>
        <OdometerAnimating isAnimating={isAnimating}>
          {renderDigits(number, false, speed)}
        </OdometerAnimating>
      </OdometerWrapper>
    )
  }
}

const OdometerAnimating = withTheme(
  styled.div`
    ${props => props.themeStyle(props)};
  `,
  "Odometer.OdomoterAnimating"
)

const OdometerStatic = withTheme(
  styled.div`
    ${props => props.themeStyle(props)};
  `,
  "Odometer.OdometerStatic"
)

const OdometerContainer = withTheme(
  styled.div`
    ${props => props.themeStyle(props)};
  `,
  "Odometer.OdometerContainer"
)

const OdometerWrapper = withTheme(
  styled.div`
    ${props => props.themeStyle(props)};
  `,
  "Odometer.OdometerWrapper"
)

// TODO: Add support for strings?
Odometer.propTypes = {
  number: number.isRequired,
  separatorSteps: number,
  speed: number,
  size: number.isRequired
}

Odometer.defaultProps = {
  separatorSteps: 3,
  speed: 500
}

export default Odometer
