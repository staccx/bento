import React, { Component } from "react"
import PropTypes from "prop-types"
import { Button, Layout, ItemGroup } from "@staccx/base"
import StepIndicator from "./StepIndicator"

class OnboardingWrapper extends Component {
  render() {
    const {
      children,
      nextStep,
      nextStepText,
      previousStep,
      previous,
      history,
      goto
    } = this.props
    return (
      <Layout>
        <StepIndicator
          totalSteps={this.props.totalSteps}
          currentStep={this.props.currentStep}
        />
        {children}
        <ItemGroup>
          <Button
            onClick={
              goto
                ? () =>
                    history.push({
                      pathname: goto
                    })
                : nextStep
            }
          >
            {nextStepText}
          </Button>
          {previous && (
            <Button onClick={previousStep} variant="secondary">
              Tilbake {/* TODO: Sanitytext */}
            </Button>
          )}
        </ItemGroup>
      </Layout>
    )
  }
}

OnboardingWrapper.propTypes = {
  children: PropTypes.any,
  previous: PropTypes.bool,
  previousStep: PropTypes.func,
  nextStep: PropTypes.func,
  nextStepText: PropTypes.string
}

OnboardingWrapper.defaultProps = {
  previous: false,
  nextStepText: "Gå videre"
}

export default OnboardingWrapper
