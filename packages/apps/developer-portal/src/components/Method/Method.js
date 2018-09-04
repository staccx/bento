import React from "react"
import { Layout, Box, Heading, Paragraph } from "@staccx/base"
import MethodExample from "./Method.Example"
import MethodAttrs from "./Method.Attrs"
import * as codeGenerators from "@staccx/code-generator"

const getCodeRendererLanguage = lang => {
  switch (lang) {
    default:
      return "javascript"
  }
}

const Method = ({ codeGeneratorInputs, operation, language }) => {
  if (!language) {
    return null
  }
  const path = operation.path
  const type = operation.type
  const request = codeGenerators[language].generate(
    codeGeneratorInputs[path][type]
  )

  let response = JSON.stringify({})

  if (
    operation.responses &&
    operation.responses["200"] &&
    operation.responses["200"].content &&
    operation.responses["200"].content["application/json"] &&
    operation.responses["200"].content["application/json"].example
  ) {
    response = JSON.stringify(
      operation.responses["200"].content["application/json"].example,
      null,
      2
    )
  }

  console.log("RESPONSE", response)
  // operation.responses["200"].content["application/json"].example
  // console.log("operation>>>>>>", operation)

  const codeRendererLanguage = getCodeRendererLanguage(language)

  return (
    <div>
      {operation.name ? (
        <Heading variant="documentation" level={3}>
          {operation.name}
        </Heading>
      ) : (
        <Heading variant="documentation" level={3}>
          MISSING NAME!
        </Heading>
      )}

      <Box variant="codeBlock" flush>
        <Layout variant="documentationApiExample">
          <div>
            <Layout>
              {operation.summary && <Paragraph>{operation.summary}</Paragraph>}
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
              language={codeRendererLanguage}
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
