import React from "react"
import { Layout, Heading, Paragraph } from "@staccx/base"
import OpenApiConsumer from "../components/OpenApiConsumer"
import ApiReferenceInfo from "./ApiReference.Info"
import Method from "../components/Method/Method"
import Definitions from "../components/Definitions/Definitions"

const language = "javascript"

const ApiReference = () => (
  <OpenApiConsumer>
    {({ sorted, openapi, info, codeGeneratorInputs }) => {
      {
        /* console.log(openapi) */
      }
      return (
        <Layout
          paddingTop="large"
          paddingBottom="huge"
          variant="documentationApiReferences"
          rowGap="huge"
        >
          <ApiReferenceInfo info={info} />

          {Object.keys(sorted).map(tag => {
            console.log(
              tag,
              openapi.components.schemas[
                tag.charAt(0).toUpperCase() + tag.slice(1)
              ]
            )
            return (
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
                  {openapi.components.schemas[
                    tag.charAt(0).toUpperCase() + tag.slice(1)
                  ] && (
                    <Definitions
                      tag={tag}
                      definitions={
                        openapi.components.schemas[
                          tag.charAt(0).toUpperCase() + tag.slice(1)
                        ]
                      }
                    />
                  )}

                  {sorted[tag].map(operation => (
                    <Method
                      openapi={openapi}
                      codeGeneratorInputs={codeGeneratorInputs}
                      operation={operation}
                      language={language}
                      key={operation.path + operation.type}
                    />
                  ))}
                </Layout>
              </div>
            )
          })}
        </Layout>
      )
    }}
  </OpenApiConsumer>
)

export default ApiReference
