import React from "react"
import { Layout, Button, Heading, Text } from "@staccx/base"

const WaitingListConfirmation = ({ history }) => {
  return (
    <Layout>
      <Heading level="1">Bli polotkunde {/* TODO: Sanitytext */}</Heading>
      <Text>
        Takk for henvendelsen, du vil få en bekreftelse på epost.{" "}
        {/* TODO: Sanitytext */}
      </Text>

      <Button
        onClick={() =>
          history.push({
            pathname: "/"
          })
        }
      >
        Ferdig {/* TODO: Sanitytext */}
      </Button>
    </Layout>
  )
}

export default WaitingListConfirmation
