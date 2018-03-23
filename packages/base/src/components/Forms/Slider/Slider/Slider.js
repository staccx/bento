import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import withTheme from "../../../../utils/withTheme"

const SliderInput = styled.div`
  ${props => props.themeStyle(props)};
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
  themeStyle,
  themeVariant,
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
      themeStyle={themeStyle}
      themeVariant={themeVariant}
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
  disabled: false
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
  percentage: PropTypes.number
}

export default withTheme(Slider)
