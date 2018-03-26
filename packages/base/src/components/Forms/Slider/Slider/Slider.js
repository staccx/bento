import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import withTheme from "../../../../utils/withTheme"
import SliderStyles from "./Slider.styles"

const SliderInput = styled.div`
  ${props => (props.ignoreBase(props) ? null : SliderStyles)};
  ${props => props.variantStyle(props)};
`

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

Slider.defaultProps = {
  value: undefined,
  min: 0,
  max: 100,
  step: 1,
  disabled: false,
  variantStyle: null,
  themeVariant: null,
  ignoreBase: null
}

Slider.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  min: PropTypes.number,
  max: PropTypes.number,
  onChange: PropTypes.func,
  step: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  animationTicks: PropTypes.number,
  disabled: PropTypes.bool,
  percentage: PropTypes.number,
  variantStyle: PropTypes.func,
  themeVariant: PropTypes.string,
  ignoreBase: PropTypes.func
}

export default withTheme(Slider)
