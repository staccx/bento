import React from "react"
import { Layout, Button, Heading, Text, Wrapper } from "@staccx/base"
import { TranslatedText } from "@staccx/i18n"

const WaitingListConfirmation = ({ history }) => {
  return (
    <Wrapper size="small">
      <Layout>
        <Heading level="1">
          <TranslatedText i18nKey="heading-venteliste-bekreftelse" />
        </Heading>
        <Text>
          <TranslatedText i18nKey="intro-venteliste-bekreftelse" />
        </Text>

        <Button
          onClick={() =>
            history.push({
              pathname: "/app"
            })
          }
        >
          <TranslatedText i18nKey="knapp-venteliste-bekreftelse" />
        </Button>
      </Layout>
    </Wrapper>
  )
}

export default WaitingListConfirmation
