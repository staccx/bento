import React from "react"
import { Layout, Box, Heading, Paragraph, Text } from "@staccx/base"
import { request, response } from "../../_fakeData/_fakeMethod"
import MethodExample from "./Method.Example"
import MethodAttrs from "./Method.Attrs"

const Method = ({ operation, language }) => {
  // console.log(operation)
  return (
    <div>
      <Heading variant="documentation" level={3}>
        {operation.path} {operation.type}
      </Heading>
      <Box variant="codeBlock" flush>
        <Layout variant="documentationApiExample">
          <div>
            <Layout>
              <Paragraph>{operation.summary}</Paragraph>
              {operation.parameters && (
                <MethodAttrs parameters={operation.parameters} />
              )}
              {operation.responses && (
                <MethodAttrs responses={operation.responses} />
              )}
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
