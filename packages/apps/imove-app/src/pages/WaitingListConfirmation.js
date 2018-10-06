import React from "react"
import { Layout, Button, Heading, Text, Wrapper } from "@staccx/base"

const WaitingListConfirmation = ({ history }) => {
  return (
    <Wrapper size="small">
      <Layout>
        <Heading level="1">Bli pilotkunde {/* TODO: Sanitytext */}</Heading>
        <Text>
          Takk for henvendelsen, du vil få en bekreftelse på epost.{" "}
          {/* TODO: Sanitytext */}
        </Text>

        <Button
          onClick={() =>
            history.push({
              pathname: "/app"
            })
          }
        >
          Ferdig {/* TODO: Sanitytext */}
        </Button>
      </Layout>
    </Wrapper>
  )
}

export default WaitingListConfirmation
