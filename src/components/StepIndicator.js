import React from "react"
import styled from "styled-components"
import {inject, observer} from 'mobx-react'

@inject('uiStore') @observer
class StepIndicator extends React.Component {
  render() {
    const { uiStore } = this.props
    const {maxStep, currentStep, steps, setStep} = uiStore
    const progress = (currentStep) / steps.length
    return (
      <StepperOuter progress={progress * 100 + "%"}>
        {steps.map((step, index) => {
          if (index <= maxStep) {
            return (
              <StepLink
                key={step.name}
                id={`step-${index}`}
                current={index === currentStep}
                onClick={() => setStep(index)}
              >
                {step.name}
              </StepLink>
            )
          }
          return (
            <Step
              key={step.name}
              id={`step-${index}`}
              current={index === currentStep}
            >
              {step.name}
            </Step>
          )
        })}
      </StepperOuter>
    )
  }
}
const StepperOuter = styled.ol`
  position: relative;
  display: grid;
  grid-auto-flow: column;
  grid-gap: 10px;
  max-width: none;
  padding: ${p => p.theme.spacing.small} ${p => p.theme.spacing.large};

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 1px;
    background-color: ${p => p.theme.gradient.galaxy[0]};
    background-image: linear-gradient(
      to right,
      ${p => p.theme.gradient.galaxy[0]} 0%,
      ${p => p.theme.gradient.galaxy[1]} ${p => p.progress},
      ${p => p.theme.color.grayLight} ${p => p.progress},
      ${p => p.theme.color.grayLight} 100%
    );
  }
`

const Step = styled.li`
  text-align: center;
  font-size: ${p => p.theme.font.size.small};
  color: ${p => (p.current ? p.theme.color.text : p.theme.color.grayLight)};
`

const StepLink = Step.withComponent("a").extend`
  text-decoration: none;
  
  cursor: pointer;
  &:hover,
  &:active,
  &:focus {
    color: ${p => p.theme.color.primary};
  }
`

export default StepIndicator
