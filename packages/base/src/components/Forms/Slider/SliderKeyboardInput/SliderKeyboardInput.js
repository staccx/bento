import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { linear } from "easing-utils"
import { inverseLerp, clamp } from "@staccx/math"
import withTheme from "../../../../utils/withTheme"
import Input from "../../Input/Input"
import Slider from "../Slider/Slider"

const SliderWrapper = withTheme(
  styled.div`
    ${props => props.themeStyle(props)};
  `,
  "SliderKeyboardInput.SliderWrapper"
)

const HiddenLabel = withTheme(
  styled.label`
    ${props => props.themeStyle(props)};
  `,
  "SliderKeyboardInput.HiddenLabel"
)

const SliderInput = withTheme(
  styled(Input)`
    ${props => props.themeStyle(props)};
  `,
  "SliderKeyboardInput.SliderInput"
)

class SliderKeyboardInput extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isAnimatingIn: false,
      currentValue: 0,
      percentage: 0
    }
    this.handleChange = this.handleChange.bind(this)
    this.countUp = this.countUp.bind(this)
    this.stopCount = this.stopCount.bind(this)
    this.updateState = this.updateState.bind(this)
    this.tick = 0
  }

  componentDidMount() {
    if (this.props.easingFunction) {
      this.startCount()
    }
  }

  componentWillUnmount() {
    if (this.props.easingFunction) {
      this.stopCount()
    }
  }

  startCount() {
    if (!this._frameId) {
      this.setState(
        {
          isAnimatingIn: true
        },
        () => {
          this._frameId = window.requestAnimationFrame(this.countUp)
        }
      )
    }
  }

  countUp() {
    // perform loop work here
    if (this.tick < this.props.animationTicks && this.props.easingFunction) {
      const t = this.props.easingFunction(this.tick / this.props.animationTicks)
      const newValue = this.props.value * t

      this.updateState(newValue).then(() => {
        this._frameId = window.requestAnimationFrame(this.countUp)
      })
    } else {
      this.updateState(this.props.value, {
        isAnimatingIn: false
      }).then(this.stopCount)
    }
    this.tick++
  }

  stopCount() {
    window.cancelAnimationFrame(this._frameId)
  }

  updateState(value, options = {}) {
    return new Promise(resolve => {
      this.setState(
        {
          currentValue: clamp(this.props.min, this.props.max, Math.ceil(value)),
          percentage: inverseLerp(this.props.min, this.props.max, value) * 100,
          ...options
        },
        resolve
      )
    })
  }

  handleChange(event) {
    const value = event.target.value
    this.updateState(value).then(() => {
      if (this.props.onChange) {
        this.props.onChange(this.state.currentValue)
      }
    })
  }

  render() {
    const {
      label,
      name,
      min,
      max,
      step,
      mask,
      className,
      themeVariant
    } = this.props
    const { currentValue, percentage } = this.state
    return (
      <SliderWrapper className={className} themeVariant={themeVariant}>
        <HiddenLabel htmlFor={name} themeVariant={themeVariant}>
          {label}
        </HiddenLabel>
        <SliderInput
          type="text"
          name={`${name}-keyboard`}
          id={`${name}-keyboard`}
          value={currentValue}
          onChange={this.handleChange}
          min={min}
          max={max}
          mask={mask || null}
          disabled={this.state.isAnimatingIn}
          themeVariant={themeVariant}
        />
        <Slider
          percentage={percentage}
          value={currentValue}
          name={name}
          id={name}
          step={step}
          min={min}
          max={max}
          onChange={this.handleChange}
        />
      </SliderWrapper>
    )
  }
}

SliderKeyboardInput.defaultProps = {
  value: 0,
  min: 0,
  max: 100,
  step: 1,
  animationTicks: 50,
  easingFunction: linear,
  onChange: null,
  mask: null,
  className: ""
}

SliderKeyboardInput.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.number,
  min: PropTypes.number,
  max: PropTypes.number,
  onChange: PropTypes.func,
  step: PropTypes.number,
  animationTicks: PropTypes.number,
  easingFunction: PropTypes.func,
  mask: PropTypes.array,
  className: PropTypes.string
}

export default withTheme(SliderKeyboardInput)
