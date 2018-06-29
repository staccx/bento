import React from "react"
import { Layout, Heading, CodeRenderer } from "@staccx/base"

const MethodExample = ({ code, language }) => {
  return (
    <Layout rowGap="large">
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
