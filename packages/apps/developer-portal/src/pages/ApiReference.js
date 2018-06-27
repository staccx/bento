import React from "react"
import { Layout, Box, Heading, Paragraph, Text } from "@staccx/base"
import ApiRenderer from "../components/ApiRenderer"

const ApiReference = () => (
  <Layout paddingTop="large" variant="documentationApiReferences">
    <div>
      <Heading variant="documentation" level={2}>
        Authentication
      </Heading>
      <Box variant="codeBlock">
        <Layout variant="documentationApiExample">
          <div>
            <Paragraph>
              Authenticate your account by including your secret key in API
              requests. You can manage your API keys in the Dashboard. Your API
              keys carry many privileges, so be sure to keep them secure! Do not
              share your secret API keys in publicly accessible areas such
              GitHub, client-side code, and so forth. Inline code example{" "}
              <Text variant="documentationInline">400</Text>
            </Paragraph>
          </div>
          <div>
            <Heading level={4} variant="documentation">
              Example request
            </Heading>
            <pre>
              <code>Stacc.ApiKey = “st_BWOJRrjqwin219ewa”</code>
            </pre>
          </div>
        </Layout>
      </Box>
    </div>
  </Layout>
)

export default ApiReference
