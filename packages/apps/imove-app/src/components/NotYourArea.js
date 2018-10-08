import React from "react"
import { Heading, Layout, Text } from "@staccx/base"
import { TranslatedText } from "@staccx/i18n"

const NotYourArea = () => (
  <Layout>
    <Heading level="1">
      <TranslatedText i18nKey="heading-ikke-i-ditt-omrade" />
    </Heading>

    <Text>
      <TranslatedText i18nKey="intro-ikke-i-ditt-omrade" />
    </Text>
  </Layout>
)

export default NotYourArea
