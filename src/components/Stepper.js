import React from "react"
import styled from "styled-components"

const steps = [
  {
    stepNumber: 1,
    stepTitle: "Start"
  },
  {
    stepNumber: 2,
    stepTitle: "Experience"
  },
  {
    stepNumber: 3,
    stepTitle: "Purpose"
  },
  {
    stepNumber: 4,
    stepTitle: "Risk"
  },
  {
    stepNumber: 5,
    stepTitle: "Theme"
  },
  {
    stepNumber: 6,
    stepTitle: "Investments"
  },
  {
    stepNumber: 7,
    stepTitle: "Portfolio"
  }
]

const Stepper = ({ current }) => (
  <StepperOuter progress={current / steps.length * 100 + "%"}>
    {steps.map(step => {
      if (step.stepNumber < current) {
        return (
          <StepLink
            key={step.stepNumber}
            id={`step-${step.stepNumber}`}
            current={step.stepNumber === current}
            href="#yo"
          >
            {step.stepTitle}
          </StepLink>
        )
      }
      return (
        <Step
          key={step.stepNumber}
          id={`step-${step.stepNumber}`}
          current={step.stepNumber === current}
        >
          {step.stepTitle}
        </Step>
      )
    })}
  </StepperOuter>
)

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

  &:hover,
  &:active,
  &:focus {
    color: ${p => p.theme.color.primary};
  }
`

export default Stepper
