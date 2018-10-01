import React from "react"
import { Layout, Button, Heading, Text } from "@staccx/base"

const EndConfirmation = ({ history }) => {
  return (
    <Layout>
      <Heading level="1">Avslutt abonnementet {/* TODO: Sanitytext */}</Heading>
      <Text>
        Oppsigelse mottatt. Abonnememntet ditt løper frem til{" "}
        <code>dagens dato + 30 dager</code>. Vi kontakter deg for å avtale det
        praktiske rundt tilbakeleveringen av bilen.
        {/* TODO: Sanitytext */}
      </Text>

      <Button
        onClick={() =>
          history.push({
            pathname: "/"
          })
        }
      >
        Ok {/* TODO: Sanitytext */}
      </Button>
    </Layout>
  )
}

export default EndConfirmation
