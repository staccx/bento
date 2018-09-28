import React from "react"
import { Layout, Button, Heading, Text } from "@staccx/base"
import { withRouter } from "react-router"

const SellConfirmation = ({ history }) => {
  return (
    <Layout>
      <Heading level="1">Selg min bil</Heading>
      <Text>Takk for henvendelsen! Vi kontakter deg om kort tid.</Text>

      <Button
        onClick={() =>
          history.push({
            pathname: "/"
          })
        }
      >
        Ferdig
      </Button>
    </Layout>
  )
}

export default withRouter(SellConfirmation)
