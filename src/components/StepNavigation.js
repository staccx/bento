import React, { Component } from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { inject, observer } from "mobx-react"
import { Button } from "@staccx/base"

@inject("uiStore")
@observer
class StepNavigation extends Component {
  static propTypes = {
    uiStore: PropTypes.object
  }

  render() {
    const { currentStep, steps, setStep } = this.props.uiStore
    const previous = currentStep > 0 ? steps[currentStep - 1] : null
    const next = currentStep < steps.length - 1 ? steps[currentStep + 1] : null
    return (
      <Center>
        {next && (
          <Next onClick={() => setStep(currentStep + 1)}>
            Next{" "}
            <svg width="16" height="10" viewBox="0 0 16 10">
              <path
                transform="translate(.5 .1)"
                fill="currentColor"
                d="M10.896 0L9.888.864l2.288 2.496c.448.496.56.64 1.024.928H0v1.184h13.2c-.384.256-.704.576-1.024.928L9.888 8.896l1.008.864 4.336-4.88L10.896 0z"
              />
            </svg>
          </Next>
        )}
        {previous && (
          <Previous onClick={() => setStep(currentStep - 1)}>Back</Previous>
        )}
      </Center>
    )
  }
}

const Center = styled.div`
  text-align: center;
  margin-top: ${p => p.theme.spacing.large};
  @media (max-width: ${p => p.theme.wrapper.medium}) {
    margin-top: ${p => p.theme.spacing.large};
  }
`

const Next = styled(Button)`
  color: ${p => p.theme.color.btnColor};
  border: 2px solid ${p => p.theme.color.btnColor};
  border-radius: 15px;
  background-color: transparent;
  transition: color 0.2s ease;

  &:hover,
  &:focus,
  &:active {
    background-color: transparent;
    color: ${p => p.theme.color.secondary};
  }
`

const Previous = styled(Button)`
  border: 2px solid transparent;
  border-radius: 15px;
  color: ${p => p.theme.color.wcag};
  background-color: transparent;

  &:hover,
  &:focus,
  &:active {
    background-color: transparent;
    color: ${p => p.theme.color.black};
  }
`

export default StepNavigation
