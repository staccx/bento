import React from "react"
import styled from "styled-components"
import { Box, Heading, Flag } from "@staccx/base"
import PortalLink from "./PortalLink"

const Icons = ({ phoneNumber, eMail }) => (
  <ContactIcons>
    {phoneNumber && <PortalLink href={`tel:${phoneNumber}`} tagName="Phone" />}
    {eMail && <PortalLink href={`mailto:${eMail}`} tagName="Mail" />}
  </ContactIcons>
)

const ContactPerson = ({ name, phoneNumber, eMail }) => (
  <Box variant="contact">
    <Flag reverse img={<Icons phoneNumber={phoneNumber} eMail={eMail} />}>
      <Heading level="3" variant="ContactName">
        {name}
      </Heading>
      {phoneNumber && (
        <span>
          <a href={`tel:${phoneNumber}`}>{phoneNumber}</a> <br />
        </span>
      )}
      {eMail && <a href={`mailto:${eMail}`}>{eMail}</a>}
    </Flag>
  </Box>
)

const ContactIcons = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 6px;
`

export default ContactPerson
