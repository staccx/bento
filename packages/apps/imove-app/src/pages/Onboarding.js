import React from "react"
import { Wrapper } from "@staccx/base"
import StepWizard from "react-step-wizard"
import OnboardingWrapper from "../components/Onboarding/OnboardingWrapper"
import Household from "../components/Household"
import Contact from "../components/Contact"
import Included from "../components/Included"
import { TranslatedText } from "@staccx/i18n"

const Onboarding = ({ history }) => (
  <Wrapper size="small">
    <StepWizard>
      <OnboardingWrapper history={history}>
        <Household />
      </OnboardingWrapper>
      <OnboardingWrapper previous history={history}>
        <Contact />
      </OnboardingWrapper>
      <TranslatedText i18nKey="knapp-siste-steg-onboarding">
        {translated => (
          <OnboardingWrapper
            previous
            nextStepText={translated}
            history={history}
            goto={"/app/cars"}
          >
            <Included />
          </OnboardingWrapper>
        )}
      </TranslatedText>
    </StepWizard>
  </Wrapper>
)

export default Onboarding
