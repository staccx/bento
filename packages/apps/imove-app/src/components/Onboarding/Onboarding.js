import React from "react"
import StepWizard from "react-step-wizard"
import OnboardingWrapper from "./OnboardingWrapper"
import Household from "../Household"
import Contact from "../Contact"
import Included from "../Included"

const Onboarding = () => (
  <StepWizard>
    <OnboardingWrapper>
      <Household />
    </OnboardingWrapper>
    <OnboardingWrapper previous>
      <Contact />
    </OnboardingWrapper>
    <OnboardingWrapper previous nextStepText="Vis bilene">
      <Included />
    </OnboardingWrapper>
  </StepWizard>
)

export default Onboarding
