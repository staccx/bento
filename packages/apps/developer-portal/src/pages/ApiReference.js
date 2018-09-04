import React from "react"
import { Layout, Heading, Paragraph, Box } from "@staccx/base"
import OpenApiConsumer from "../components/OpenApiConsumer"
// import ApiReferenceInfo from "./ApiReference.Info"
import Method from "../components/Method/Method"
import Definitions from "../components/Definitions/Definitions"

const ApiReference = () => (
  <OpenApiConsumer>
    {({ sorted, openapi, info, codeGeneratorInputs, preferredLanguage }) => {
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
                  openapi.tags.map(
                    openApiTag =>
                      openApiTag.name === tag ? (
                        <Paragraph variant="documentationLede">
                          {openApiTag.description}
                        </Paragraph>
                      ) : null
                  )
                ) : (
                  <Paragraph variant="documentationLede" />
                )}
                <Layout
                  rowGap="huge"
                  paddingTop="medium"
                  paddingBottom="huge"
                  key={tag}
                >
                  {openapi.definitions
                    ? openapi.definitions[
                        tag.charAt(0).toUpperCase() + tag.slice(1)
                      ] && (
                        <Definitions
                          tag={tag}
                          definitions={
                            openapi.definitions[
                              tag.charAt(0).toUpperCase() + tag.slice(1)
                            ]
                          }
                        />
                      )
                    : null}

                  {sorted[tag].map(operation => {
                    return (
                      <Method
                        openapi={openapi}
                        codeGeneratorInputs={codeGeneratorInputs}
                        operation={operation}
                        language={preferredLanguage}
                        key={operation.path + operation.type}
                      />
                    )
                  })}
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
