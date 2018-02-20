import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { linear } from 'easing-utils'
import inverseLerp from '../../../../functions/inverseLerp'
import Input from '../../Input/Input'
import Slider from '../Slider/Slider'
import clamp from '../../../../functions/clamp'

class SliderKeyboardInput extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      isAnimatingIn: false,
      currentValue: 0,
      percentage: 0
    }
    this.handleChange = this.handleChange.bind(this)
    this.countUp = this.countUp.bind(this)
    this.updateState = this.updateState.bind(this)
    this.tick = 0
  }

  componentDidMount () {
    if (this.props.easingFunction) {
      this.startCount()
    }
  }

  componentWillUnmount () {
    if (this.props.easingFunction) {
      this.stopCount()
    }
  }

  startCount () {
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

  countUp () {
    // perform loop work here
    if (this.tick < this.props.animationTicks && this.props.easingFunction) {
      const t = this.props.easingFunction(this.tick / this.props.animationTicks)
      const newValue = this.props.value * t

      this.updateState(newValue)
        .then(() => {
          this._frameId = window.requestAnimationFrame(this.countUp)
        })
    } else {
      this.updateState(this.props.value,
        {
          isAnimatingIn: false
        })
        .then(this.stopCount)
    }
    this.tick++
  }

  stopCount () {
    window.cancelAnimationFrame(this._frameId)
  }

  updateState (value, options = {}) {
    return new Promise(resolve => {
      this.setState({
        currentValue: clamp(this.props.min, this.props.max, Math.ceil(value)),
        percentage: inverseLerp(this.props.min, this.props.max, value) * 100,
        ...options
      }, resolve)
    })
  }

  handleChange (event) {
    const value = event.target.value
    this.updateState(value)
      .then(() => {
        if (this.props.onChange) {
          this.props.onChange(this.state.currentValue)
        }
      })
  }

  render () {
    const {
      label,
      name,
      min,
      max,
      step,
      mask
    } = this.props
    const {currentValue, percentage} = this.state
    return (
      <SliderWrapper>
        <HiddenLabel htmlFor={name}>{label}</HiddenLabel>
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

const SliderWrapper = styled.div`
  font-family: ${p => p.theme.font.body};
  font-size: ${p => p.theme.font.size.input};
`

const HiddenLabel = styled.label`
  border: 0 !important;
  clip: rect(0 0 0 0) !important;
  height: 1px !important;
  margin: -1px !important;
  overflow: hidden !important;
  padding: 0 !important;
  position: absolute !important;
  width: 1px !important;
`

const SliderInput = styled(Input)`
  background-color: transparent;
  border: 0;
  min-height: ${p => p.theme.targetSize.normal};
  margin-bottom: ${p => p.theme.spacing.medium};
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
    color: ${p => p.theme.color.text};
  }
`

SliderKeyboardInput.defaultProps = {
  value: 0,
  min: 0,
  max: 100,
  step: 1,
  animationTicks: 50,
  easingFunction: linear,
  onChange: null
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
  easingFunction: PropTypes.func
}

export default SliderKeyboardInput
