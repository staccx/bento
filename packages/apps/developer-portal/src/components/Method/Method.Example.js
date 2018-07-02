import React from "react"
import { Layout, Heading, CodeRenderer, Box, Text } from "@staccx/base"

const MethodExample = ({ code, language, type, path }) => {
  return (
    <Layout variant="documentationExample" rowGap="large">
      <div>
        <Box variant="documentationTypePath" size="flush">
          {type && (
            <Text variant="documentationOperationType" type={type}>
              {type}
            </Text>
          )}
          {path && <Text variant="documentationOperationPath">{path}</Text>}
        </Box>
      </div>
      <div>
        <Heading level={4} variant="apiExample">
          <span>Example request</span>
        </Heading>
        <CodeRenderer code={code.request} language={language} />
      </div>
      <div>
        <Heading level={4} variant="apiExample">
          <span>Example response</span>
        </Heading>
        <CodeRenderer code={code.response} language={language} />
      </div>
    </Layout>
  )
}

export default MethodExample
