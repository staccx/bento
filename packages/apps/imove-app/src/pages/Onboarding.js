import React from "react"
import StepWizard from "react-step-wizard"
import OnboardingWrapper from "../components/Onboarding/OnboardingWrapper"
import Household from "../components/Household"
import Contact from "../components/Contact"
import Included from "../components/Included"

const Onboarding = ({ history }) => (
  <StepWizard>
    <OnboardingWrapper history={history}>
      <Household />
    </OnboardingWrapper>
    <OnboardingWrapper previous history={history}>
      <Contact />
    </OnboardingWrapper>
    <OnboardingWrapper
      previous
      nextStepText="Vis bilene"
      history={history}
      goto={"/app/cars"}
    >
      <Included />
    </OnboardingWrapper>
  </StepWizard>
)

export default Onboarding
