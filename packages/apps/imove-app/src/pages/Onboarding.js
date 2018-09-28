import React from "react"
import StepWizard from "react-step-wizard"
import OnboardingWrapper from "../components/Onboarding/OnboardingWrapper"
import Household from "../components/Household"
import Contact from "../components/Contact"
import Included from "../components/Included"

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
