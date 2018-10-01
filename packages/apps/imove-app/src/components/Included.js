import React from "react"
import PropTypes from "prop-types"
// import styled from "styled-components"
import { Heading, Layout, CheckBox } from "@staccx/base"
import CheckmarkBlock from "./CheckmarkBlock"

const Contact = ({ name, phone, email, postalNumber, consent }) => (
  <Layout>
    <Heading level="1">Hva som er inkludert i prisen</Heading>
    <CheckmarkBlock title="Din egen miljøvennlige hverdagsbil">
      Vi ordner alt, unntatt drivstoff og parkering.
    </CheckmarkBlock>

    <CheckmarkBlock title="Du kan byttelåne med en hyttebil når du trenger det">
      Du kan disponere stasjonsvogn/SUV 10 dager i året
    </CheckmarkBlock>
    <CheckmarkBlock title="Ingen startleie eller bindingstid" />
  </Layout>
)

CheckBox.propTypes = {
  name: PropTypes.string,
  phone: PropTypes.number,
  email: PropTypes.string,
  postalNumber: PropTypes.number,
  consent: PropTypes.bool
}

Contact.defaultProps = {
  name: "",
  phone: "",
  email: "",
  postalNumber: "",
  consent: false
}

export default Contact
