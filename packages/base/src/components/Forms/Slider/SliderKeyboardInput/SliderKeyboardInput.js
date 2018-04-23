import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import { linear } from "easing-utils"
import { inverseLerp, clamp } from "@staccx/math"
import withTheme from "../../../../utils/withTheme"
import Input from "../../Input/Input"
import Slider from "../Slider/Slider"

const removeSpaces = value => value.replace(/\s/g, "")

class SliderKeyboardInput extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isAnimatingIn: false,
      currentValue: 0,
      percentage: 0
    }
    this.handleBlur = this.handleBlur.bind(this)
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
          currentValue: Math.floor(value),
          percentage:
            inverseLerp(
              this.props.min,
              this.props.max,
              clamp(this.props.min, this.props.max, Math.ceil(value))
            ) * 100,
          ...options
        },
        resolve
      )
    })
  }

  handleChange(event) {
    const value = event.target.value
    this.updateState(parseInt(removeSpaces(value), 10)).then(() => {
      if (this.props.onChange) {
        this.props.onChange(this.state.currentValue)
      }
    })
  }

  handleBlur(event) {
    const value = event.target.value
    const valueInt = parseInt(removeSpaces(value), 10)
    const parsed = clamp(this.props.min, this.props.max, valueInt)
    this.updateState(parsed).then(() => {
      if (this.props.onChange) {
        this.props.onBlur(this.state.currentValue)
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
      ignoreBase,
      themeVariant
    } = this.props
    const { currentValue, percentage } = this.state
    return (
      <SliderWrapper
        className={className}
        themeVariant={themeVariant}
        ignoreBase={ignoreBase}
      >
        <HiddenLabel htmlFor={name} themeVariant={themeVariant}>
          {label}
        </HiddenLabel>
        <SliderInput
          type="text"
          name={`${name}-keyboard`}
          id={`${name}-keyboard`}
          value={currentValue}
          onChange={this.handleChange}
          onBlur={this.handleBlur}
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

const SliderWrapper = withTheme(
  styled.div`
    font-family: ${fontFamily.body};
    font-size: ${font.input};
    ${props => props.variantStyle(props)};
  `,
  "SliderKeyboardInput.SliderWrapper"
)

const HiddenLabel = withTheme(
  styled.label`
    border: 0 !important;
    clip: rect(0 0 0 0) !important;
    height: 1px !important;
    margin: -1px !important;
    overflow: hidden !important;
    padding: 0 !important;
    position: absolute !important;
    width: 1px !important;
    ${props => props.variantStyle(props)};
  `,
  "SliderKeyboardInput.HiddenLabel"
)

const SliderInput = withTheme(
  styled(Input)`
    background-color: transparent;
    border: 0;
    min-height: ${targetSize.normal};
    margin-bottom: ${spacing.medium};
    max-width: 100%;
    -moz-appearance: textfield;
    outline: none;

    &::-webkit-inner-spin-button,
    &::-webkit-outer-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }

    &:hover,
    &:active,
    &:focus,
    &:-moz-ui-invalid,
    &:invalid {
      outline: none;
      box-shadow: none;
    }

    &:disabled {
      color: ${color.text};
    }
    ${props => props.variantStyle(props)};
  `,
  "SliderKeyboardInput.SliderInput"
)

SliderKeyboardInput.defaultProps = {
  animationTicks: 50,
  className: "",
  easingFunction: linear,
  mask: null,
  max: 100,
  min: 0,
  onChange: null,
  step: 1,
  themeVariant: null,
  value: 0
}

SliderKeyboardInput.propTypes = {
  animationTicks: PropTypes.number,
  className: PropTypes.string,
  easingFunction: PropTypes.func,
  ignoreBase: PropTypes.bool,
  label: PropTypes.string.isRequired,
  mask: PropTypes.func,
  max: PropTypes.number,
  min: PropTypes.number,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  step: PropTypes.number,
  themeVariant: PropTypes.string,
  value: PropTypes.number
}

export default withTheme(SliderKeyboardInput)
