import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import withTheme from "../../../utils/withTheme"
import hideVisually from "../../../Styles/hideVisually"
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
    const {
      number,
      speed,
      size,
      separatorSteps,
      themeVariant,
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
        <OdometerContainer key={`digit-${i}`} themeVariant={themeVariant}>
          <Digit
            size={size}
            digit={digit}
            single={single}
            speed={speed}
            themeVariant={themeVariant}
          />
        </OdometerContainer>
      ))
    return (
      <OdometerWrapper size={size} themeVariant={themeVariant} {...restProps}>
        <OdometerStatic isAnimating={isAnimating} themeVariant={themeVariant}>
          {renderDigits(number, true, speed)}
        </OdometerStatic>
        <OdometerAnimating
          isAnimating={isAnimating}
          themeVariant={themeVariant}
        >
          {renderDigits(number, false, speed)}
        </OdometerAnimating>
      </OdometerWrapper>
    )
  }
}

const OdometerAnimating = withTheme(
  styled.div`
    ${p => (!p.isAnimating ? hideVisually : "display: flex;")};
    ${props => props.variantStyle(props)};
  `,
  "Odometer.OdometerAnimating"
)

const OdometerStatic = withTheme(
  styled.div`
    ${p => (p.isAnimating ? hideVisually : "display: flex;")};
    ${props => props.variantStyle(props)};
  `,
  "Odometer.OdometerStatic"
)

const OdometerContainer = withTheme(
  styled.div`
    position: relative;
    ${props => props.variantStyle(props)};
  `,
  "Odometer.OdometerContainer"
)

const OdometerWrapper = withTheme(
  styled.div`
    font-size: ${p => p.size}px;
    line-height: 1;
    display: inline-block;
    ${props => props.variantStyle(props)};
  `,
  "Odometer.OdometerWrapper"
)

// TODO: Add support for strings?
Odometer.propTypes = {
  number: PropTypes.number.isRequired,
  separatorSteps: PropTypes.number,
  speed: PropTypes.number,
  size: PropTypes.number.isRequired,
  themeVariant: PropTypes.string
}

Odometer.defaultProps = {
  separatorSteps: 3,
  speed: 500,
  themeVariant: null,
  ignoreBase: null
}

export default Odometer
