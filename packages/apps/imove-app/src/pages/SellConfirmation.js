import React from "react"
import { Layout, Button, Heading, Text, Wrapper } from "@staccx/base"

const SellConfirmation = ({ history }) => {
  return (
    <Wrapper size="small">
      <Layout>
        <Heading level="1">Selg min bil {/* TODO: Sanitytext */}</Heading>
        <Text>
          Takk for henvendelsen! Vi kontakter deg om kort tid.{" "}
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

export default SellConfirmation
