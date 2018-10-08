import React from "react"
// import styled from "styled-components"
import { Heading, Layout } from "@staccx/base"
import CheckmarkBlock from "./CheckmarkBlock"
import { TranslatedText } from "@staccx/i18n"

const Included = () => (
  <Layout>
    <Heading level="1">
      <TranslatedText i18nKey="heading-intro-hva-er-inkludert" />
    </Heading>
    <CheckmarkBlock
      title={<TranslatedText i18nKey="onboarding-included-heading-1" />}
    >
      <TranslatedText i18nKey="onboarding-included-intro-1" />
    </CheckmarkBlock>

    <CheckmarkBlock
      title={<TranslatedText i18nKey="onboarding-included-heading-2" />}
    >
      <TranslatedText i18nKey="onboarding-included-intro-2" />
    </CheckmarkBlock>
    <CheckmarkBlock
      title={<TranslatedText i18nKey="onboarding-included-heading-3" />}
    >
      <TranslatedText i18nKey="onboarding-included-intro-3" />
    </CheckmarkBlock>
  </Layout>
)

export default Included
