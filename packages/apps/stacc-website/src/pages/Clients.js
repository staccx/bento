import React from "react"
import styled from "styled-components"
import { spacing } from "@staccx/theme"
import { List, Layout } from "@staccx/base"
import { SanityDocument, SanityList, SanityImage } from "@staccx/sanity"
import { ClientPreview, SectionHead } from "../components/_codeSplitting"
import { Helmet } from "react-helmet"

const Clients = () => (
  <Layout paddingTop="grid" paddingBottom="grid" rowGap="grid">
    <SanityDocument id={"831e840a-74e5-402d-ab6a-89505d19a01d"}>
      {({ document }) => {
        if (!document) {
          return <div>loading</div>
        }

        return (
          <React.Fragment>
            {document.meta && (
              <SanityImage image={document.meta.image}>
                {({ image }) => (
                  <Helmet>
                    <meta property="og:title" content={document.meta.title} />
                    <meta
                      property="og:description"
                      content={document.meta.description}
                    />
                    <meta property="og:type" content="website" />
                    <meta property="og:url" content={document.meta.url} />
                    <meta property="og:image" content={image.url()} />
                  </Helmet>
                )}
              </SanityImage>
            )}
            <SectionHead
              heading={document.header.title}
              lede={document.header.body}
              illustration={document.header.image}
            />

            <SanityList type={"client"}>
              {({ result }) => {
                if (!result) {
                  return <div>henter kunder...</div>
                }

                return (
                  <ClientsList>
                    {result.map(client => (
                      <li key={client._id}>
                        <ClientPreview
                          name={client.name}
                          logo={client.logo}
                          description={client.description}
                          website={client.url}
                          websiteName={"Gå til " + client.name}
                          cases={client.caseStudies || []}
                        />
                      </li>
                    ))}
                  </ClientsList>
                )
              }}
            </SanityList>
          </React.Fragment>
        )
      }}
    </SanityDocument>
  </Layout>
)

const ClientsList = styled(List)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: ${spacing.large};
  row-gap: ${spacing.large};
`

export default Clients
