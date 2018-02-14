import React from "react"
import PropTypes from "prop-types"
import styled, { css } from "styled-components"

const Slider = ({
  name,
  value,
  min,
  max,
  step,
  onChange,
  disabled,
  ...restProps
}) => (
  <SliderInput percentage={percentage}>
    <input
      type="range"
      name={name}
      value={value}
      onChange={onChange}
      min={min}
      max={max}
      step={step}
      disabled={disabled}
      {...restProps}
    />
  </SliderInput>
)

const SliderThumb = css`
  -webkit-appearance: none;
  border: 2px solid ${p => p.theme.color.line};
  height: 20px;
  width: 20px;
  transform: translateY(-2px);
  border-radius: 50%;
  background-color: ${p => p.theme.color.white};
  cursor: pointer;
  &:hover {
    background-color: ${p => p.theme.color.bg};
    border-color: ${p => p.theme.color.disabled};
  }
  &:active,
  &:focus {
    border-color: ${p => p.theme.color.white};
    background-color: ${p => p.theme.color.green};
  }
`

const SliderHiddenTrack = css`
  width: 100%;
  cursor: pointer;
  background-color: transparent;
  border-color: transparent;
  color: transparent;
`

const SliderTrack = css`
  width: 100%;
  height: 9px;
  cursor: pointer;
  border-radius: 4.5px;
  color: transparent;
  background-color: ${p => p.theme.color.line};

  &:focus {
  }
`

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
    ${SliderHiddenTrack}
  }

  > input[type=range]::-moz-range-track {
    ${SliderHiddenTrack}
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
    ${SliderThumb}
    margin-top: -3px;
  }

  > input[type=range]::-moz-range-thumb {
    ${SliderThumb}
  }

  > input[type=range]::-ms-thumb {
    ${SliderThumb}
  }

  /* Style the track */
  input[type=range]::-webkit-slider-runnable-track {
    ${SliderTrack}
    background: linear-gradient(90deg,
      ${p => p.theme.color.blue} 0%, ${p => p.theme.color.blue}
      ${p => p.percentage}%, ${p => p.theme.color.line}
      ${p => p.percentage + 0.1}%,
      ${p => p.theme.color.line} 100%) 0 100% no-repeat content-box;
  }


  input[type=range]:focus::-webkit-slider-runnable-track {
  }

  input[type=range]::-moz-range-track {
    ${SliderTrack}
  }

  input[type=range]::-moz-range-progress {
    background-color: ${p => p.theme.color.blue};
    height: 9px;
    border-radius: 4.5px;
  }

  input[type=range]::-ms-track {
    ${SliderTrack}
  }

  input[type=range]::-ms-fill-lower {
    background-color: ${p => p.theme.color.blue};
  }

  input[type=range]:focus::-ms-fill-lower {
    background-color: ${p => p.theme.color.white};
  }

  input[type=range]::-ms-fill-upper {
    background-color: ${p => p.theme.color.white};
  }

  input[type=range]:focus::-ms-fill-upper {
    background-color: ${p => p.theme.color.white};
  }
`

Slider.defaultProps = {
  value: 0,
  min: 0,
  max: 100,
  step: 1,
  animationTicks: 50
}

Slider.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.number,
  min: PropTypes.number,
  max: PropTypes.number,
  onChange: PropTypes.func,
  step: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  animationTicks: PropTypes.number
}

export default Slider
