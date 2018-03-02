import React from "react"
import styled from "styled-components"
import { rgba } from "polished"
import { CurrencyInput, Button } from "@staccx/base"

const inputs = [
  {
    id: "asdai8w23",
    label: "Første innskudd",
    defaultValue: "0",
    incrementBy: 5000
  },
  {
    id: "124i0hrq",
    label: "Månedlig innskudd",
    defaultValue: 2000,
    incrementBy: 1000
  }
]

class TestInputs extends React.Component {
  constructor(props, context) {
    super(props, context)
    this.handleIncrement = this.handleIncrement.bind(this)
  }

  handleIncrement = value => {
    console.log(value)
  }

  render() {
    return (
      <OuterWrapper>
        <Heading>Your portfolio</Heading>
        <InputsWrapper>
          {inputs.map(input => (
            <InputItem key={input.id}>
              <Input
                label={input.label}
                name={input.id}
                defaultValue={input.defaultValue}
                id={input.id}
              />
              <Buttons>
                <StepperButton primary={true}>+</StepperButton>
                <StepperButton>-</StepperButton>
              </Buttons>
            </InputItem>
          ))}
        </InputsWrapper>
      </OuterWrapper>
    )
  }
}

const Heading = styled.h1`
  font-family: ${p => p.theme.font.body};
  font-size: ${p => p.theme.font.size.h1};
  font-weight: normal;
  text-align: center;
  margin-bottom: ${p => p.theme.spacing.large};
`

const OuterWrapper = styled.div``

const InputsWrapper = styled.div`
  display: flex;
  max-width: 540px;
  margin: 0 auto;
`

const InputItem = styled.div`
  position: relative;
  margin-right: ${p => p.theme.spacing.small};

  &:last-child {
    margin-right: 0;
    margin-left: ${p => p.theme.spacing.small};
  }
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

export default TestInputs
