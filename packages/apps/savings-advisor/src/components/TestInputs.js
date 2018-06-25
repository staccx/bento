import React from "react"
import styled from "styled-components"
import CurrencyInputSteppers from "./CurrencyInputSteppers"

const inputs = [
  {
    id: "asdai8w23",
    label: "Første innskudd",
    defaultValue: 0,
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
              <CurrencyInputSteppers
                label={input.label}
                name={input.id}
                defaultValue={input.defaultValue}
                incrementBy={input.incrementBy}
                onIncrement={this.handleIncrement}
                onDecrement={this.handleIncrement}
                id={input.id}
              />
            </InputItem>
          ))}
        </InputsWrapper>
      </OuterWrapper>
    )
  }
}

const Heading = styled.h1`
  font-family: ${p => p.theme.font.body};
  font-size: ${font.h1};
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

export default TestInputs
