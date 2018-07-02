import React from "react"
import { Layout, Box, Heading, Paragraph } from "@staccx/base"
import { response } from "../../_fakeData/_fakeMethod"
import MethodExample from "./Method.Example"
import MethodAttrs from "./Method.Attrs"
import * as codeGenerators from "@staccx/code-generator"

const Method = ({ codeGeneratorInputs, operation, language }) => {
  const path = operation.path
  const type = operation.type

  const request = codeGenerators.nodeRequest(codeGeneratorInputs[path][type])
  console.log(operation.security)
  return (
    <div>
      <Heading variant="documentation" level={3}>
        {operation.summary}
      </Heading>
      <Box variant="codeBlock" flush>
        <Layout variant="documentationApiExample">
          <div>
            <Layout>
              {operation.description && (
                <Paragraph>{operation.description}</Paragraph>
              )}
              {operation.parameters && (
                <MethodAttrs parameters={operation.parameters} />
              )}
              {operation.responses && (
                <MethodAttrs responses={operation.responses} />
              )}
              {operation.security && (
                <MethodAttrs security={operation.security} />
              )}
            </Layout>
          </div>
          <div>
            <MethodExample
              language={language}
              code={{ request, response: response }}
              path={path}
              type={type}
            />
          </div>
        </Layout>
      </Box>
    </div>
  )
}

export default Method
