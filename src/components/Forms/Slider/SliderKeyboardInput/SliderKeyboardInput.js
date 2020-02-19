import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import { linear } from "easing-utils"
import { inverseLerp, clamp } from "../../../../math"
import Label from "../../Label/Label"
import Input from "../../Input/Input"
import Slider from "../Slider/Slider"
import {
  applyVariants,
  targetSize,
  fontFamily,
  font,
  color
} from "../../../../theming"
import themeProps from "./SliderKeyboardInput.themeProps"

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
      if (this.props.onBlur) {
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
      variant,
      showLabel
    } = this.props
    const { currentValue, percentage } = this.state
    return (
      <SliderWrapper
        className={className}
        variant={variant}
        ignoreBase={ignoreBase}
      >
        <Label htmlFor={name} variant={variant}>
          {label}
        </Label>
        <SliderInput
          type="text"
          name={`${name}-keyboard`}
          id={`${name}-keyboard`}
          value={currentValue}
          onChange={this.handleChange}
          onBlur={this.handleBlur}
          label={showLabel ? label : null}
          min={min}
          max={max}
          mask={mask || null}
          disabled={this.state.isAnimatingIn}
          variant={variant}
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
          variant={variant}
        />
      </SliderWrapper>
    )
  }
}

const SliderWrapper = styled.div`
  font-family: ${fontFamily.body};
  font-size: ${font.input};
  ${applyVariants(SliderKeyboardInput.themeProps.wrapper)};
`

const SliderInput = styled(Input)`
  background-color: transparent;
  border: 0;
  min-height: ${targetSize.normal};
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
  ${applyVariants(SliderKeyboardInput.themeProps.input)};
`

SliderKeyboardInput.defaultProps = {
  animationTicks: 50,
  className: "",
  easingFunction: linear,
  mask: null,
  max: 100,
  min: 0,
  onChange: null,
  step: 1,
  value: 0,
  showLabel: false
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
  variant: PropTypes.string,
  value: PropTypes.number,
  showLabel: PropTypes.bool
}
SliderKeyboardInput.themeProps = themeProps

export default SliderKeyboardInput
