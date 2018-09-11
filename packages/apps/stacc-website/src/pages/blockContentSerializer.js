import React from "react"
import styled from "styled-components"
import { Heading, Layout } from "@staccx/base"
import { SanityImage } from "@staccx/sanity"
import BlockContent from "@sanity/block-content-to-react"
import { getLinkItem } from "../components/ContentLinks/ContentLinks.Item"
import {
  ClientList,
  ContentLinks,
  FeatureList,
  Hero,
  PeopleList,
  Quote,
  SectionHead,
  Stories,
  Timeline,
  ContactUs
} from "../components/_codeSplitting"

const serializer = {
  container: props => (
    <Layout rowGap="grid" paddingBottom="grid">
      {props.children}
    </Layout>
  ),
  types: {
    block: props => {
      console.log(props)
      switch (props.node.style) {
        case "h1":
        case "h2":
        case "h3":
        case "h4":
        case "h5":
          return <Heading level={props.node.style}>{props.children}</Heading>
        default:
          return <BodyContent>{props.children}</BodyContent>
      }
    },
    richText: ({ node }) => (
      <BlockContent blocks={node.bodyContent} serializer={serializer} />
    ),
    sectionHead: ({ node }) => (
      <SectionHead
        illustration={node.image}
        heading={node.title}
        lede={node.body}
        headingLevel={node.isPageHeader ? 1 : 2}
      />
    ),
    quote: ({ node }) => (
      <SanityImage image={node.image}>
        {({ image }) => (
          <Quote name={node.subText} quote={node.quote} img={image.url()} />
        )}
      </SanityImage>
    ),
    productClients: props => props.children,
    hero: ({ node }) => (
      <Hero heading={node.title} lede={node.body} trinity={node.trinity} />
    ),
    linkBlock: ({ node }) => getLinkItem(node),
    section: ({ node }) => {
      const { head, links } = node
      return (
        <div>
          <Layout>
            {head.image && (
              <SanityImage image={head.image}>
                {({ image }) => (
                  <SectionHead
                    heading={head.title}
                    lede={head.body}
                    headingLevel={head.isPageHeader ? 1 : 2}
                    illustration={image.url()}
                  />
                )}
              </SanityImage>
            )}

            {links && <ContentLinks>{links.map(getLinkItem)}</ContentLinks>}
          </Layout>
        </div>
      )
    },
    featureList: ({ node }) => <FeatureList items={node.features} />,
    stories: ({ node }) => <Stories items={node.list} />,
    timeline: ({ node }) => <Timeline items={node.entries} />,
    contactPerson: ({ node }) => (
      <ContactUs
        heading={node.heading}
        person={{
          name: node.employee.name,
          phone: node.employee.phone,
          email: node.employee.email
        }}
        image={node.image}
      />
    ),
    peopleList: ({ node }) => <PeopleList node={node} />,
    clientList: ({ node }) => <ClientList node={node} />
  }
}

const BodyContent = styled.div`
  > p {
    max-width: 760px;
  }
`

export default serializer
