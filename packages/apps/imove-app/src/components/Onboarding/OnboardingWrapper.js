import React, { Component } from "react"
import PropTypes from "prop-types"
import { Button, Layout, ItemGroup } from "@staccx/base"

class OnboardingWrapper extends Component {
  render() {
    const {
      children,
      nextStep,
      nextStepText,
      previousStep,
      previous
    } = this.props
    return (
      <Layout>
        <h2>Step {this.props.currentStep}</h2>
        <p>Total Steps: {this.props.totalSteps}</p>
        <p>Is Active: {this.props.isActive}</p>
        {children}
        <ItemGroup>
          <Button onClick={nextStep}>{nextStepText}</Button>
          {previous && (
            <Button onClick={previousStep} variant="secondary">
              Tilbake
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
