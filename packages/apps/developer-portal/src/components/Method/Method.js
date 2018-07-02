import React from "react"
import { Layout, Box, Heading, Paragraph } from "@staccx/base"
import { response } from "../../_fakeData/_fakeMethod"
import MethodExample from "./Method.Example"
import MethodAttrs from "./Method.Attrs"
import * as codeGenerators from "@staccx/code-generator"

const getCodeRendererLanguage = lang => {
  switch (lang) {
    default:
      return "javascript"
  }
}

console.log(codeGenerators)

const Method = ({ codeGeneratorInputs, operation, language }) => {
  if(!language) {
    return null
  }
  const path = operation.path
  const type = operation.type
  const request = codeGenerators[language].generate(codeGeneratorInputs[path][type])

  const codeRendererLanguage = getCodeRendererLanguage(language)

  console.log("Operation", operation)
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
