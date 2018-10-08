import React from "react"
import { Layout, Button, Heading, Text, Wrapper } from "@staccx/base"
import { TranslatedText } from "@staccx/i18n"

const SellConfirmation = ({ history }) => {
  return (
    <Wrapper size="small">
      <Layout>
        <Heading level="1">
          <TranslatedText i18nKey="heading-bekreftelse-selg-bil" />
        </Heading>
        <Text>
          <TranslatedText i18nKey="intro-bekreftelse-selge-bil" />
        </Text>

        <Button
          onClick={() =>
            history.push({
              pathname: "/app"
            })
          }
        >
          <TranslatedText i18nKey="knapp-bekreftelse-selg-bil" />
        </Button>
      </Layout>
    </Wrapper>
  )
}

export default SellConfirmation
