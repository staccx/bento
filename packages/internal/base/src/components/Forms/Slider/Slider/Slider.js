import React from "react"
import PropTypes from "prop-types"
import styled, { css } from "styled-components"
import { color, themify, fontWeight } from "@staccx/theme"
import themePropTypes from "../../../constants/themePropTypes"

class Slider extends React.PureComponent {
  constructor(props, context) {
    super(props, context)

    this.state = {
      percentage: props.value ? props.value / props.max : props.max * 0.5
    }

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e) {
    const { value } = e.target
    const percentage = value / this.props.max
    this.setState({ percentage })
    this.props.onChange(e)
  }

  render() {
    const {
      disabled,
      max,
      min,
      name,
      step,
      value,
      variantStyle,
      variant,
      ignoreBase,
      ...restProps
    } = this.props
    return (
      <SliderInput
        percentage={this.state.percentage}
        variant={variant}
        ignoreBase={ignoreBase}
      >
        <input
          type="range"
          name={name}
          defaultValue={value}
          min={min}
          max={max}
          step={step}
          disabled={disabled}
          {...restProps}
          onChange={this.handleChange}
        />
      </SliderInput>
    )
  }
}

Slider.themeProps = {
  thumb: {
    name: "SLIDER_THUMB_STYLE",
    description: "Thumb style",
    type: themePropTypes.style
  },
  track: {
    name: "SLIDER_TRACK_STYLE",
    description: "Track style",
    type: themePropTypes.style
  },
  input: {
    name: "SLIDER_INPUT",
    description: "Input style",
    type: themePropTypes.style
  }
}

const SliderThumbStyle = css`
  -webkit-appearance: none;
  border: 2px solid ${color.line};
  height: 20px;
  width: 20px;
  transform: translateY(-2px);
  border-radius: 50%;
  background-color: ${color.white};
  cursor: pointer;
  &:hover {
    background-color: ${color.bg};
    border-color: ${color.disabled};
  }
  &:active,
  &:focus {
    border-color: ${color.white};
    background-color: ${color.secondary};
  }
  ${themify(Slider.themeProps.thumb)};
`

const SliderHiddenTrackStyle = css`
  width: 100%;
  cursor: pointer;
  background-color: transparent;
  border-color: transparent;
  color: transparent;
`

const SliderTrackStyle = css`
  width: 100%;
  height: 9px;
  cursor: pointer;
  border-radius: 4.5px;
  color: transparent;
  background-color: ${color.line};
  ${themify(Slider.themeProps.track)};
`

const SliderInput = styled.div`
  position: relative;
  font-weight: ${fontWeight.bold};

  /* Make the default slider invisible */
  > input[type="range"] {
    -webkit-appearance: none;
    width: 100%;
    background-color: transparent;
    margin: 0;
    background-clip: content-box;
    border-top: 10px solid transparent;
    border-bottom: 10px solid transparent;
    border-radius: 6px;
    -webkit-tap-highlight-color: transparent;
  }

  > input[type="range"]::-webkit-slider-thumb {
    -webkit-appearance: none;
  }

  > input[type="range"]::-ms-track {
    ${SliderHiddenTrackStyle};
  }

  > input[type="range"]::-moz-range-track {
    ${SliderHiddenTrackStyle};
  }

  > input[type="range"]:focus {
    outline: none;
  }

  > input[type="range"]:active {
    outline: none;
  }

  > input[type="range"]:-moz-focusring,
  > input[type="range"]:focusring {
    outline: 1px solid white;
    outline-offset: -1px;
  }

  /* Style the thumb */
  > input[type="range"]::-webkit-slider-thumb {
    ${SliderThumbStyle} margin-top: -3px;
  }

  > input[type="range"]::-moz-range-thumb {
    ${SliderThumbStyle};
  }

  > input[type="range"]::-ms-thumb {
    ${SliderThumbStyle};
  }

  /* Style the track for webkit */
  input[type="range"]::-webkit-slider-runnable-track {
    background: linear-gradient(
        90deg,
        ${color.primary} 0%,
        ${color.primary} ${p => p.percentage * 100}%,
        ${color.line} ${p => p.percentage * 100 + 0.0}%,
        ${color.line} 100%
      )
      0 100% no-repeat content-box;
    ${SliderTrackStyle};
  }

  input[type="range"]:focus::-webkit-slider-runnable-track {
  }

  /* Style the track for mozilla */
  input[type="range"]::-moz-range-track {
    ${SliderTrackStyle};
  }

  input[type="range"]::-moz-range-progress {
    background-color: ${color.primary};
    height: 9px;
    border-radius: 4.5px;
  }

  /* Style the track for MS */
  input[type="range"]::-ms-track {
    ${SliderTrackStyle};
  }

  input[type="range"]::-ms-fill-lower {
    background-color: ${color.primary};
  }

  input[type="range"]:focus::-ms-fill-lower {
    background-color: ${color.white};
  }

  input[type="range"]::-ms-fill-upper {
    background-color: ${color.white};
  }

  input[type="range"]:focus::-ms-fill-upper {
    background-color: ${color.white};
  }

  ${themify(Slider.themeProps.input)};
`

Slider.defaultProps = {
  disabled: false,
  ignoreBase: null,
  max: 100,
  min: 0,
  step: 1,
  value: undefined
}

Slider.propTypes = {
  animationTicks: PropTypes.number,
  disabled: PropTypes.bool,
  ignoreBase: PropTypes.bool,
  max: PropTypes.number,
  min: PropTypes.number,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  step: PropTypes.any,
  variant: PropTypes.string,
  value: PropTypes.any
}

export default Slider
