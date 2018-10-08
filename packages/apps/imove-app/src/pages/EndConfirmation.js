import React from "react"
import { Layout, Button, Heading, Text, Wrapper } from "@staccx/base"
import { TranslatedText } from "@staccx/i18n"

const EndConfirmation = ({ history }) => {
  return (
    <Wrapper size="small">
      <Layout>
        <Heading level="1">
          <TranslatedText i18nKey="heading-avslutt-abonnementet" />
        </Heading>
        <Text>
          <TranslatedText i18nKey="intro-avslutt-abonnement-bekreftelse" />
        </Text>

        <Button
          onClick={() =>
            history.push({
              pathname: "/app/"
            })
          }
        >
          <TranslatedText i18nKey="knapp-avslutt-abonnement-bekreftelse" />
        </Button>
      </Layout>
    </Wrapper>
  )
}

export default EndConfirmation
