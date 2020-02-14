import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { CurrencyInput, Button, theming } from "@staccx/base"
import { multiplyPixelValue } from "@staccx/math"

const CurrencyInputSteppers = ({
  label,
  id,
  value,
  onIncrement,
  onDecrement,
  onChange,
  ...restProps
}) => {
  return (
    <Outer {...restProps}>
      <Input
        label={label}
        name={id}
        value={value}
        id={id}
        suffix={""}
        onChange={onChange}
        guide={false}
      />
      <Buttons>
        <StepperButton onClick={onIncrement} primary>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <g fillRule="evenodd">
              <g fillRule="nonzero">
                <polygon points="9 0 9 9 0 9 0 11 9 11 9 20 11 20 11 11 20 11 20 9 11 9 11 0" />
              </g>
            </g>
          </svg>
        </StepperButton>
        <StepperButton onClick={onDecrement}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 2">
            <g fillRule="evenodd">
              <g fillRule="nonzero">
                <polygon points="0 0 0 2 20 2 20 0" />
              </g>
            </g>
          </svg>
        </StepperButton>
      </Buttons>
    </Outer>
  )
}

const Outer = styled.div`
  position: relative;
  min-width: 200px;
  max-width: 250px;
`

const Input = styled(CurrencyInput)`
  > label {
    color: ${theming.color.gray};
    font-weight: normal;
  }

  > input {
    min-height: ${theming.targetSize.large};
    border-radius: 0;
    border-width: 0;
    border-bottom: 2px solid ${theming.color.secondary};
    font-size: ${theming.font.h1};
    background-color: transparent;
    transition: border-color 0.2s ease;

    &:hover,
    &:active,
    &:focus {
      background-color: transparent;
      border-color: ${theming.color.primary};
    }
  }
`

const Buttons = styled.div`
  position: absolute;
  right: 0;
  bottom: ${p => multiplyPixelValue(theming.targetSize.normal()(p), 0.5)};
  transform: translateY(50%);
`

const StepperButton = styled(Button)`
  margin-bottom: 0;
  border-radius: 50%;
  min-width: ${theming.targetSize.small};
  min-height: ${theming.targetSize.small};
  padding: 0;
  color: ${({ primary }) =>
    primary ? theming.color.white : theming.color.text};
  background-color: ${({ primary }) =>
    primary ? theming.color.grayDark : theming.color.grayLight};
  transition: background 0.2s ease;

  &:hover,
  &:active,
  &:focus {
    background-color: ${({ primary }) =>
      primary ? theming.color.primary : theming.color.primary};
  }

  > svg {
    width: 20px;
    vertical-align: middle;
    fill: currentColor;
  }
`

CurrencyInputSteppers.propTypes = {
  label: PropTypes.string,
  id: PropTypes.string,
  value: PropTypes.number,
  onIncrement: PropTypes.func,
  onDecrement: PropTypes.func
}

export default CurrencyInputSteppers