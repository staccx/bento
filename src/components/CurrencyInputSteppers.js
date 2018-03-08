import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { CurrencyInput, Button, multiplyPixelValue } from "@staccx/base"

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
    color: ${p => p.theme.color.gray};
    font-weight: normal;
  }

  > input {
    min-height: ${p => p.theme.targetSize.large};
    border-radius: 0;
    border-width: 0;
    border-bottom: 2px solid ${p => p.theme.color.line};
    font-size: ${p => p.theme.font.size.h1};
    background-color: transparent;
    transition: border 0.2s ease;

    &:hover,
    &:active,
    &:focus {
      background-color: transparent;
      border-color: ${p => p.theme.color.secondary};
    }
  }
`

const Buttons = styled.div`
  position: absolute;
  right: 0;
  bottom: ${p => multiplyPixelValue(p.theme.targetSize.large, 0.5)};
  transform: translateY(50%);
`

const StepperButton = styled(Button)`
  margin-bottom: 0;
  border-radius: 50%;
  min-width: ${p => p.theme.targetSize.small};
  min-height: ${p => p.theme.targetSize.small};
  padding: 0;
  color: ${p => (p.primary ? p.theme.color.white : p.theme.color.text)};
  background-color: ${p =>
    p.primary ? p.theme.color.grayDark : p.theme.color.grayLight};
  transition: background 0.2s ease;

  &:hover,
  &:active,
  &:focus {
    background-color: ${p => p.theme.color.secondary};
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
