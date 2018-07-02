import React from "react"
import { Layout, Heading, Paragraph, Box } from "@staccx/base"
import OpenApiConsumer from "../components/OpenApiConsumer"
// import ApiReferenceInfo from "./ApiReference.Info"
import Method from "../components/Method/Method"
import Definitions from "../components/Definitions/Definitions"

const language = "javascript"

const ApiReference = () => (
  <OpenApiConsumer>
    {({ sorted, openapi, info, codeGeneratorInputs }) => {
      return (
        <Box size="flush" variant="apiContainer">
          {/*
            <ApiReferenceInfo info={info} />
            Removed for now, let’s try putting this info in one of the other pages
          */}

          {Object.keys(sorted).map(tag => {
            return (
              <div>
                <Heading id={tag} variant="documentation" level={1}>
                  {tag}
                </Heading>

                {openapi.tags ? (
                  openapi.tags.map(openApiTag => {
                    if (openApiTag.name === tag) {
                      return (
                        <Paragraph variant="documentationLede">
                          {openApiTag.description}
                        </Paragraph>
                      )
                    }
                  })
                ) : (
                  <Paragraph variant="documentationLede">
                    Missing description!
                  </Paragraph>
                )}
                <Layout
                  rowGap="huge"
                  paddingTop="medium"
                  paddingBottom="huge"
                  key={tag}
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
        </Box>
      )
    }}
  </OpenApiConsumer>
)

export default ApiReference
