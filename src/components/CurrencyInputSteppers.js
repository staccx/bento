import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { CurrencyInput, Button } from "@staccx/base"

const CurrencyInputSteppers = ({
  label,
  id,
  defaultValue,
  onIncrement,
  onDecrement,
  ...restProps
}) => (
  <Outer {...restProps}>
    <Input label={label} name={id} defaultValue={defaultValue} id={id} />
    <Buttons>
      <StepperButton onChange={onIncrement} primary>
        +
      </StepperButton>
      <StepperButton onChange={onDecrement}>-</StepperButton>
    </Buttons>
  </Outer>
)

const Outer = styled.div`
  position: relative;
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

    &:hover,
    &:active,
    &:focus {
      background-color: ${p => p.theme.color.grayXLight};
    }
  }
`

const Buttons = styled.div`
  position: absolute;
  right: 0;
  top: 50%;
`

const StepperButton = styled(Button)`
  border-radius: 50%;
  min-width: ${p => p.theme.targetSize.small};
  min-height: ${p => p.theme.targetSize.small};
  padding: 0;
  background-color: ${p => (p.primary ? p.theme.grayDark : p.theme.grayLight)};
`

CurrencyInputSteppers.propTypes = {
  label: PropTypes.string,
  id: PropTypes.string,
  defaultValue: PropTypes.number,
  onIncrement: PropTypes.func,
  onDecrement: PropTypes.func
}

export default CurrencyInputSteppers
