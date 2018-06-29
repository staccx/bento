import React from "react"
import { Layout, Box, Heading, Paragraph } from "@staccx/base"

const ApiReferenceInfo = ({ info }) => (
  <div>
    <Heading id="info" variant="documentation" level={2}>
      {`${info.title} (${info.version})`}
    </Heading>
    <Box size="flush">
      <Layout>
        <div>
          <Layout>
            <Paragraph>{info.description}</Paragraph>
          </Layout>
        </div>
        <div>
          <Layout grid="form" rowGap="large">
            <div>
              <Heading level={4}>
                <span>Contact</span>
              </Heading>
              <Paragraph>
                <a href={"mailTo:" + info.contact.email}>
                  {info.contact.email}
                </a>
              </Paragraph>
            </div>
            <div>
              <Heading level={4}>
                <span>License</span>
              </Heading>
              <a href={info.license.url}>{info.license.name}</a>
            </div>
            <div>
              <Heading level={4}>
                <a href={info.termsOfService}>
                  <span>Terms of service</span>
                </a>
              </Heading>
            </div>
          </Layout>
        </div>
      </Layout>
    </Box>
  </div>
)

export default ApiReferenceInfo
