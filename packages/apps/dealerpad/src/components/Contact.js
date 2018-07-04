import React from "react"
import styled from "styled-components"
import { Box, Heading, Flag, Portal } from "@staccx/base"
import { color } from "@staccx/theme"

const Icons = ({ phoneNumber, eMail }) => (
  <ContactIcons>
    <PortalLink href={`tel:${phoneNumber}`}>
      <Portal variant="secondary" tagName="Phone" />
    </PortalLink>
    <PortalLink href={`mailto:${eMail}`}>
      <Portal variant="secondary" tagName="Mail" />
    </PortalLink>
  </ContactIcons>
)

const Contact = ({ name, phoneNumber, eMail }) => (
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

const PortalLink = styled.a`
  color: ${color("contactIcon")};
  &:hover,
  &:focus,
  &:active {
    color: ${color("contactIconHover")};
  }
`

export default Contact
