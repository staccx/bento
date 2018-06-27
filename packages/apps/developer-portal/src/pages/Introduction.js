import React from "react"
import { Link } from "react-router-dom"
import { Layout, Box, Heading, Paragraph, Text, Wrapper } from "@staccx/base"
import styled from "styled-components"

const SwaggerDocs = () => (
  <div>
    <Layout paddingTop="large">
      <Heading variant="documentation" level={1}>
        Fundu developer portal
      </Heading>
      <Paragraph variant="documentationLede">
        Get familiar with Fundu and our features.
      </Paragraph>
      <LeftWrapper size="medium">
        <Layout grid="form" paddingTop="medium">
          <Box variant="documentationShortcut">
            <Heading level={2} variant="documentationShortcutHeading">
              Getting started
            </Heading>
            <Text>Get up and running with the Fundu platform</Text>
          </Box>
          <Box variant="documentationShortcut">
            <Heading level={2} variant="documentationShortcutHeading">
              API Key
            </Heading>
            <Text>Get your own API Key to use in your project</Text>
          </Box>
          <BoxLink to="/api-reference">
            <Box variant="documentationShortcut">
              <Heading level={2} variant="documentationShortcutHeading">
                API Reference
              </Heading>
              <Text>Get started with our REST API</Text>
            </Box>
          </BoxLink>
          <Box variant="documentationShortcut">
            <Heading level={2} variant="documentationShortcutHeading">
              Whitelabel
            </Heading>
            <Text>It’s awesome</Text>
          </Box>
        </Layout>
        <Layout paddingTop="large">
          <div>
            <Heading variant="documentation" level={2}>
              Questions?
            </Heading>
            <Paragraph>
              We're always happy to help with code or other questions you might
              have! Search our documentation, contact support, or connect with
              our sales team.
            </Paragraph>
          </div>
        </Layout>
      </LeftWrapper>
    </Layout>
  </div>
)

const LeftWrapper = styled(Wrapper)`
  margin-left: 0;
  padding: 0;
`

const onAttention = `&:hover, &:focus, &:active`

const BoxLink = styled(Link)`
  text-decoration: none;
  transition: transform 0.2s ease;

  ${onAttention} {
    transform: translateY(-3px);
  }
`

export default SwaggerDocs
