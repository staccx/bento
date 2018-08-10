import React from "react"
import { Box, Layout, Flag, Text, Divider } from "@staccx/base"
import PortalLink from "./PortalLink"

const Contact = () => (
  <Box variant="contact">
    <Layout>
      <Text variant="inputSize">
        hverdager: 8:00 - 17:00 <br />
        tors: 8:00 - 19:00<br />
        lør: 10:00 - 14:00
      </Text>
      <Divider />
      <Flag small img={<PortalLink href={`tel:06245`} tagName="Phone" />}>
        <Text variant="inputSize">
          <a href={`tel:06245`}>06 245</a>
        </Text>
      </Flag>
    </Layout>
  </Box>
)

export default Contact
