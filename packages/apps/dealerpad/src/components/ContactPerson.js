import React from "react"
import styled from "styled-components"
import { Box, Heading, Flag } from "@staccx/base"
import PortalLink from "./PortalLink"

const Icons = ({ phoneNumber, eMail }) => (
  <ContactIcons>
    <PortalLink href={`tel:${phoneNumber}`} tagName="Phone" />
    <PortalLink href={`mailto:${eMail}`} tagName="Mail" />
  </ContactIcons>
)

const ContactPerson = ({ name, phoneNumber, eMail }) => (
  <Box variant="contact">
    <Flag reverse img={<Icons phoneNumber={phoneNumber} eMail={eMail} />}>
      <Heading level="3" variant="ContactName">
        {name}
      </Heading>
      <a href={`tel:${phoneNumber}`}>{phoneNumber}</a> <br />
      <a href={`mailto:${eMail}`}>{eMail}</a>
    </Flag>
  </Box>
)

const ContactIcons = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 6px;
`

export default ContactPerson
