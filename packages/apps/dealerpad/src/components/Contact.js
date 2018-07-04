import React from "react"
import { Box, Heading } from "@staccx/base"
import { formatCurrency } from "@staccx/formatting"

const Contact = ({ name, phoneNumber, eMail }) => (
  <Box variant="contact">
    <Heading level="3" variant="ContactName">
      {name}
    </Heading>
    {phoneNumber} {eMail}
  </Box>
)

export default Contact
