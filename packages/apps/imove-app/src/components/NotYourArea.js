import React from "react"
import { Heading, Layout, Text } from "@staccx/base"

const Contact = ({ name, phone, email, postalNumber, consent }) => (
  <Layout>
    <Heading level="1">
      imove har ennå ikke kommet til ditt område
      {/* TODO: Sanitytext */}
    </Heading>

    <Text>
      Pilotperioden for imove vil inntil videre foregå i Bergen. Vi kan
      imidlertid lagre dine opplysninger slik at du blir førstemann til å få
      beskjed når vi er klare til å lansere imove hos deg. Du kan når som helst
      slette din konto og opplysningene som ligger lagret hos oss.
      {/* TODO: Sanitytext */}
    </Text>
  </Layout>
)

export default Contact
