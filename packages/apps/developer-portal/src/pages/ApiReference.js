import React from "react"
import { Layout, Heading } from "@staccx/base"
import OpenApiConsumer from "../components/OpenApiConsumer"
import ApiReferenceInfo from "./ApiReference.Info"
import Method from "../components/Method/Method"

const language = "javascript"

const ApiReference = () => (
  <OpenApiConsumer>
    {({ sorted, openapi, info }) => {
      return (
        <Layout
          paddingTop="large"
          paddingBottom="huge"
          variant="documentationApiReferences"
          rowGap="huge"
        >
          <ApiReferenceInfo info={info} />

          {Object.keys(sorted).map(tag => (
            <div>
              <Heading id={tag} variant="documentation" level={1}>
                {tag}
              </Heading>

              <Layout
                paddingTop="large"
                paddingBottom="huge"
                variant="documentationApiReferences"
                rowGap="huge"
              >
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
