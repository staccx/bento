import React from "react"
import PropTypes from "prop-types"
import styled, { css } from "styled-components"
import withTheme from "../../../../utils/withTheme"
import {
  targetSize,
  spacing,
  borderRadius,
  font,
  color,
  themify
} from "@staccx/theme"

const Slider = ({
  disabled,
  max,
  min,
  name,
  onChange,
  percentage,
  step,
  value,
  variantStyle,
  themeVariant,
  ignoreBase,
  ...restProps
}) => {
  if (percentage === undefined) {
    console.warn(
      "Slider component needs to be told what percentage it is by its parent in order to show it’s progress visually in webkit browsers."
    )
  }
  return (
    <SliderInput
      percentage={percentage}
      variantStyle={variantStyle}
      themeVariant={themeVariant}
      ignoreBase={ignoreBase}
    >
      <input
        type="range"
        name={name}
        value={value && value}
        onChange={onChange}
        min={min}
        max={max}
        step={step}
        disabled={disabled}
        {...restProps}
      />
    </SliderInput>
  )
}

export const SLIDER_THUMB_STYLE = "SLIDER_THUMB_STYLE"
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
  ${themify(SLIDER_THUMB_STYLE)};
`

const SliderHiddenTrackStyle = css`
  width: 100%;
  cursor: pointer;
  background-color: transparent;
  border-color: transparent;
  color: transparent;
`

export const SLIDER_TRACK_STYLE = "SLIDER_TRACK_STYLE"
const SliderTrackStyle = css`
  width: 100%;
  height: 9px;
  cursor: pointer;
  border-radius: 4.5px;
  color: transparent;
  background-color: ${color.line};
  ${themify(SLIDER_TRACK_STYLE)};
`

export const SLIDER_INPUT = "SLIDER_INPUT"
const SliderInput = styled.div`
  position: relative;
  font-weight: bold;

  /* Make the default slider invisible */
  > input[type=range] {
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

  > input[type=range]::-webkit-slider-thumb {
    -webkit-appearance: none;
  }

  > input[type=range]::-ms-track {
    ${SliderHiddenTrackStyle}
  }

  > input[type=range]::-moz-range-track {
    ${SliderHiddenTrackStyle}
  }

  > input[type=range]:focus {
    outline: none;
  }

  > input[type=range]:active {
    outline: none;
  }

  >input[type=range]:-moz-focusring,
  >input[type=range]:focusring {
    outline: 1px solid white;
    outline-offset: -1px;
  }

  /* Style the thumb */
  > input[type=range]::-webkit-slider-thumb {
    ${SliderThumbStyle}
    margin-top: -3px;
  }

  > input[type=range]::-moz-range-thumb {
    ${SliderThumbStyle}
  }

  > input[type=range]::-ms-thumb {
    ${SliderThumbStyle}
  }

  /* Style the track for webkit */
  input[type=range]::-webkit-slider-runnable-track {
    ${SliderTrackStyle}
    background: linear-gradient(90deg,
      ${color.primary} 0%, ${color.primary}
      ${p => p.percentage}%, ${color.line}
      ${p => p.percentage + 0.0}%,
      ${color.line} 100%) 0 100% no-repeat content-box;
  }

  input[type=range]:focus::-webkit-slider-runnable-track {
  }

  /* Style the track for mozilla */
  input[type=range]::-moz-range-track {
    ${SliderTrackStyle}
  }

  input[type=range]::-moz-range-progress {
    background-color: ${color.primary};
    height: 9px;
    border-radius: 4.5px;
  }

  /* Style the track for MS */
  input[type=range]::-ms-track {
    ${SliderTrackStyle}
  }

  input[type=range]::-ms-fill-lower {
    background-color: ${color.primary};
  }

  input[type=range]:focus::-ms-fill-lower {
    background-color: ${color.white};
  }

  input[type=range]::-ms-fill-upper {
    background-color: ${color.white};
  }

  input[type=range]:focus::-ms-fill-upper {
    background-color: ${color.white};
  }

  ${themify(SLIDER_INPUT)};
`

Slider.defaultProps = {
  disabled: false,
  ignoreBase: null,
  max: 100,
  min: 0,
  step: 1,
  themeVariant: null,
  value: undefined,
  variantStyle: null
}

Slider.propTypes = {
  animationTicks: PropTypes.number,
  disabled: PropTypes.bool,
  ignoreBase: PropTypes.bool,
  max: PropTypes.number,
  min: PropTypes.number,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  percentage: PropTypes.number,
  step: PropTypes.any,
  themeVariant: PropTypes.string,
  value: PropTypes.any,
  variantStyle: PropTypes.func
}

export default withTheme(Slider)
