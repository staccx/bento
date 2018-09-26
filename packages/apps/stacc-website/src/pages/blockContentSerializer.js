import React from "react"
import styled from "styled-components"
import { Layout } from "@staccx/base"
import { spacing, font, color } from "@staccx/theme"
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
  ContactUs,
  Trinity,
  ClientPreview,
  Typeform
} from "../components/_codeSplitting"
import { ClientsList } from "../components/ClientList/ClientList"

const serializer = {
  container: props => (
    <Layout rowGap="gridLarge" paddingTop="grid" paddingBottom="gridLarge">
      {props.children}
    </Layout>
  ),
  types: {
    richText: ({ node }) => (
      <BodyContent>
        <BlockContent blocks={node.bodyContent} serializer={serializer} />
      </BodyContent>
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
      if (!head) {
        return null
      }
      return (
        <div>
          <Layout rowGap="large">
            <SectionHead
              heading={head.title}
              lede={head.body}
              headingLevel={head.isPageHeader ? 1 : 2}
              illustration={head.image}
            />

            {links && <ContentLinks>{links.map(getLinkItem)}</ContentLinks>}
          </Layout>
        </div>
      )
    },
    featureList: ({ node }) => <FeatureList items={node.features} />,
    stories: ({ node }) => <Stories items={node.list} />,
    timeline: ({ node }) => <Timeline items={node.entries} />,
    contactPerson: ({ node, ...rest }) => {
      return (
        <ContactUs
          heading={node.heading}
          person={{
            name: node.employee.name,
            phone: node.employee.phone,
            email: node.employee.email
          }}
          emailSubject={node.emailSubject}
          image={node.image}
          imageCutOut={node.imageCutout}
        />
      )
    },
    peopleList: ({ node }) => <PeopleList node={node} />,
    clientList: ({ node }) => <ClientList node={node} />,
    trinity: ({ node }) => {
      return <Trinity heading={node.title} items={node.trinity.texts} />
    },
    logoSalad: ({ node }) => {
      return (
        <ClientsList>
          {node.logos.map(logo => {
            return (
              <li key={logo._id}>
                <ClientPreview
                  name={logo.name}
                  logo={logo.logo}
                  description={logo.description}
                  website={logo.url}
                  websiteName={
                    logo.url ? logo.url.replace(/(^\w+:|^)\/\//, "") : ""
                  }
                  cases={[]}
                />
              </li>
            )
          })}
        </ClientsList>
      )
    },
    typeform: ({ node }) => <Typeform heading={node.heading} url={node.url} />
  }
}

const BodyContent = styled.div`
  p,
  ul {
    max-width: 760px;
    margin-bottom: ${spacing.medium};
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-bottom: ${spacing.small};
  }

  h1 {
    font-size: ${font.h1};
  }

  h2 {
    font-size: ${font.h2};
  }

  h3 {
    font-size: ${font.h3};
  }

  h4 {
    font-size: ${font.h4};
  }

  h5 {
    font-size: ${font.h5};
  }

  h6 {
    font-size: ${font.h6};
  }

  ul {
    list-style-type: disc;
  }

  a {
    color: ${color.primary};
  }
`

export default serializer
