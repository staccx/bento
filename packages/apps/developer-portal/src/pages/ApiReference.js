import React from "react"
import { Layout, Heading, Paragraph } from "@staccx/base"
import OpenApiConsumer from "../components/OpenApiConsumer"
import ApiReferenceInfo from "./ApiReference.Info"
import Method from "../components/Method/Method"

const language = "javascript"

const ApiReference = () => (
  <OpenApiConsumer>
    {({ sorted, openapi, info }) => {
      console.log(openapi)
      return (
        <Layout
          paddingTop="large"
          paddingBottom="huge"
          variant="documentationApiReferences"
          rowGap="huge"
        >
          <ApiReferenceInfo info={info} />

          {Object.keys(sorted).map(tag => (
            <div key={tag}>
              <Heading id={tag} variant="documentation" level={1}>
                {tag}
              </Heading>
              <Paragraph varaint="documentationLede">
                Tag description goes here
              </Paragraph>

              <Layout
                paddingTop="large"
                paddingBottom="huge"
                variant="documentationApiReferences"
                rowGap="huge"
              >
                <div>List of definitions</div>
                {sorted[tag].map(operation => (
                  <Method
                    operation={operation}
                    language={language}
                    key={operation.path + operation.type}
                  />
                ))}
              </Layout>
            </div>
          ))}
        </Layout>
      )
    }}
  </OpenApiConsumer>
)

export default ApiReference
