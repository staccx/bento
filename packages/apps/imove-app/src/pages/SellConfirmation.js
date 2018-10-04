import React from "react"
import { Layout, Button, Heading, Text } from "@staccx/base"

const SellConfirmation = ({ history }) => {
  return (
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
  )
}

export default SellConfirmation
