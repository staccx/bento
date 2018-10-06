import React from "react"
import { Layout, Button, Heading, Text, Wrapper } from "@staccx/base"

const EndConfirmation = ({ history }) => {
  return (
    <Wrapper size="small">
      <Layout>
        <Heading level="1">
          Avslutt abonnementet {/* TODO: Sanitytext */}
        </Heading>
        <Text>
          Oppsigelse mottatt. Abonnememntet ditt løper frem til{" "}
          <code>dagens dato + 30 dager</code>. Vi kontakter deg for å avtale det
          praktiske rundt tilbakeleveringen av bilen.
          {/* TODO: Sanitytext */}
        </Text>

        <Button
          onClick={() =>
            history.push({
              pathname: "/app/"
            })
          }
        >
          Ok {/* TODO: Sanitytext */}
        </Button>
      </Layout>
    </Wrapper>
  )
}

export default EndConfirmation
