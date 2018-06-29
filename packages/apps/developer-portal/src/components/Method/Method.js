import React from "react"
import { Layout, Box, Heading, Paragraph, Text, Table } from "@staccx/base"
import { attributes, request, response } from "../../_fakeData/_fakeMethod"
import MethodExample from "./Method.Example"
import MethodAttrs from "./Method.Attrs"

const Method = ({ operation, language }) => {
  return (
    <div>
      <Heading variant="documentation" level={3}>
        {operation.path} {operation.type}
      </Heading>
      <Box variant="codeBlock" flush>
        <Layout variant="documentationApiExample">
          <div>
            <Layout>
              <Paragraph>
                {operation.summary}
                <Text variant="documentationInline">400</Text>
              </Paragraph>

              <div className="method-list">
                <Heading level={5} className="method-list-title">
                  Attributes
                </Heading>

                <MethodAttrs attributes={attributes} />
              </div>
            </Layout>
          </div>
          <div>
            <MethodExample
              language={language}
              code={{ request: request, response: response }}
            />
          </div>
        </Layout>
      </Box>
    </div>
  )
}

export default Method
