import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import hideVisually from "../../../Styles/hideVisually"
import Digit from "./Digit"
import { themify } from "@staccx/theme"
import themePropTypes from "../../constants/themePropTypes"

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

Odometer.themeProps = {
  animating: {
    name: "odometer_animating",
    description: "Style for the animating odometer",
    type: themePropTypes.style
  },
  static: {
    name: "odometer_static",
    description: "Style for the static odometer",
    type: themePropTypes.style
  },
  container: {
    name: "odometer_container",
    description: "Style for the container",
    type: themePropTypes.style
  },
  wrapper: {
    name: "odometer_wrapper",
    description: "Style for the wrapper",
    type: themePropTypes.style
  }
}

const OdometerAnimating = styled.div`
  ${p => (!p.isAnimating ? hideVisually : "display: flex;")};
  ${themify(Odometer.themeProps.animating)};
`

const OdometerStatic = styled.div`
  ${p => (p.isAnimating ? hideVisually : "display: flex;")};
  ${themify(Odometer.themeProps.static)};
`

const OdometerContainer = styled.div`
  position: relative;
  ${themify(Odometer.themeProps.container)};
`

const OdometerWrapper = styled.div`
  font-size: ${p => p.size}px;
  line-height: 1;
  display: inline-block;
  ${themify(Odometer.themeProps.wrapper)};
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
  variant: null
}

export default Odometer
