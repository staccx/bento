import React from "react"
import { Layout, Button, Heading, Text, Wrapper } from "@staccx/base"
import { backwards } from "../components/transitions/transitions"
import { TranslatedText } from "@staccx/i18n"

const End = ({ history }) => {
  return (
    <Wrapper size="small">
      <Layout>
        <Heading level="1">
          <TranslatedText i18nKey="heading-avslutt-abonnementet" />
        </Heading>
        <Text>
          <TranslatedText i18nKey="intro-avslutt-abonnement" />
        </Text>

        <div>
          <Button
            onClick={() =>
              history.push({
                pathname: "/app/end/confirmation"
              })
            }
          >
            <TranslatedText i18nKey="knapp-avslutt-abonnement" />
          </Button>
          <Button
            onClick={() =>
              history.push({
                pathname: "/app/profile",
                state: backwards
              })
            }
            variant="secondary"
          >
            <TranslatedText i18nKey="tilbake-knapp-avslutt-abonnement" />
          </Button>
        </div>
      </Layout>
    </Wrapper>
  )
}

export default End
