import React from "react"
import styled, { keyframes, css } from "styled-components"
import { inject, observer } from "mobx-react"
import { hideVisually, theming } from "@staccx/base"

@inject("uiStore")
@observer
class StepIndicator extends React.Component {
  componentWillUpdate() {
    this.flipIt = !this.flipIt
  }
  render() {
    const { uiStore } = this.props
    const {
      maxStep,
      currentStep,
      setStep,
      translate,
      cmsStart,
      cmsExperience,
      cmsRisk,
      cmsPurpose,
      cmsTheme,
      cmsSummary
    } = uiStore

    const steps = [
      cmsStart,
      cmsExperience,
      cmsPurpose,
      cmsRisk,
      cmsTheme,
      cmsSummary
    ]

    if (steps.some(s => !s)) {
      return null
    }
    const progress = (currentStep + 1) / steps.length

    return (
      <StepperOuter>
        {steps.map((step, index) => {
          if (index <= maxStep) {
            return (
              <Step
                key={translate(step.name)}
                current={index === currentStep}
                progress={progress}
              >
                <StepLink id={`step-${index}`} onClick={() => setStep(index)}>
                  <HideMobile current={index === currentStep}>
                    {translate(step.name)}
                  </HideMobile>
                </StepLink>
              </Step>
            )
          }
          return (
            <Step
              key={translate(step.name)}
              id={`step-${index}`}
              current={index === currentStep}
            >
              <StepNotLink>
                <HideMobile current={index === currentStep}>
                  {translate(step.name)}
                </HideMobile>
              </StepNotLink>
            </Step>
          )
        })}
        <StepBar progress={currentStep + 2} flipIt={this.flipIt} />
      </StepperOuter>
    )
  }
}

const rubberBand = keyframes`
  from {
    transform: scaleX(0.9) translateY(1px);
  }

  to {
    transform: scaleX(1) translateY(1px);
  }
`

const rubberBand2 = keyframes`
  from {
    transform: scaleX(0.89) translateY(1px);
  }

  to {
    transform: scaleX(1) translateY(1px);
  }
`

const StepNotLink = styled.span``

const HideMobile = styled.span`
  @media (max-width: ${theming.wrapper.medium}) {
    ${p => !p.current && hideVisually};
  }
`

const StepperOuter = styled.nav`
  position: relative;
  display: grid;
  grid-template-columns: repeat(6, auto);
  grid-template-rows: repeat(2, auto);
  max-width: none;
  border-bottom: 1px solid ${theming.color.grayLight};
  @media (max-width: ${theming.wrapper.medium}) {
    grid-template-columns: repeat(6, 1fr);
  }
`

const StepLink = styled.a`
  text-decoration: none;
  color: inherit;
  cursor: pointer;

  &:hover,
  &:active,
  &:focus {
    color: ${theming.color.primary};
  }
`

const Step = styled.div`
  padding-bottom: ${theming.spacing.small};
  text-align: center;
  font-size: ${theming.font.small};
  color: ${p => (p.current ? theming.color.text : theming.color.grayLight)};
  grid-row: 1;
  @media (max-width: ${theming.wrapper.medium}) {
    ${StepLink}::before, ${StepNotLink}::before {
      ${p => !p.current && 'content: ""'};
      width: 12px;
      height: 12px;
      display: inline-block;
      background-color: currentColor;
      border-radius: 50%;
    }
  }
`

const StepBar = styled.div`
  grid-row: 2;
  grid-column-start: 1;
  grid-column-end: ${p => p.progress};
  height: 1px;
  transform: translateY(1px);
  background-color: ${theming.getProp("gradient", "galaxyStart")};
  background-image: linear-gradient(
    to right,
    ${theming.getProp("gradient", "galaxyStart")} 0%,
    ${theming.getProp("gradient", "galaxyEnd")} 100%
  );
  transform-origin: left;
  ${p =>
    p.flipIt
      ? css`
          animation: ${rubberBand} 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55)
            forwards 1;
        `
      : css`
          animation: ${rubberBand2} 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55)
            forwards 1;
        `}
}
`

export default StepIndicator
