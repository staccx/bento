import React from "react"
import { Layout, Button, Heading, Text } from "@staccx/base"

const SellConfirmation = () => {
  return (
    <Layout>
      <Heading level="1">Selg min bil</Heading>
      <Text>Takk for henvendelsen! Vi kontakter deg om kort tid.</Text>

      <Button onClick={() => null}>Ferdig</Button>
    </Layout>
  )
}

export default SellConfirmation
