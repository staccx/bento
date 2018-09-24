import React from "react"
import {
  Heading,
  Wrapper,
  Input,
  Layout,
  PhoneInput,
  Button,
  Box
} from "@staccx/base"

const Contact = () => (
  <Layout paddingTop="grid" rowGap="grid">
    <Wrapper size="medium">
      <Heading level={2} variant="primary">
        Hello there!
      </Heading>
      We work with businesses of all sizes, from small startups to big
      international banks and insurance companies. We have extended experience
      both as entrepreneurs, investors ourselves and consulting for others and
      loves to offer our services to new friends. Say hi - have a coffee with
      us.
    </Wrapper>
    <Wrapper size="large">
      <Box variant="contact">
        <Wrapper size="medium">
          <Layout>
            <Heading level="2" variant="primary">
              Get in touch
            </Heading>
          </Layout>
        </Wrapper>
      </Box>
    </Wrapper>
    <Wrapper size="medium">
      <Heading level={3}>Speaking requests</Heading>
      <p>
        If you are interested in having someone from Stacc speak at your event,
        please drop us a line at{" "}
        <a href="mailto:speaking@stacc.com">speaking@stacc.com</a>
      </p>
    </Wrapper>
  </Layout>
)

export default Contact
