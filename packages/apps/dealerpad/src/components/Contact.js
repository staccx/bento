import React from "react"
import { Box, Flag, Text } from "@staccx/base"
import PortalLink from "./PortalLink"

const Contact = () => (
  <Box variant="contact">
    <Text variant="contactText">
      hverdager: 8:00 - 17:00 <br />
      tors: 8:00 - 19:00
      <br />
      lør: 10:00 - 14:00
    </Text>
    <div>
      <Flag small img={<PortalLink href={`tel:06245`} tagName="Phone" />}>
        <Text variant="inputSize">
          <a href={`tel:06245`}>06 245</a>
        </Text>
      </Flag>
    </div>
  </Box>
)

export default Contact
