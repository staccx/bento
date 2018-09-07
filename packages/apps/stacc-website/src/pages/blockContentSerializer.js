import React from "react"
import { Text, Heading, Layout } from "@staccx/base"
import { SanityImage } from "@staccx/sanity"
import Quote from "../components/Quote/Quote"
import SectionHead from "../components/SectionHead/SectionHead"
import Hero from "../components/Hero/Hero"
import { getLinkItem } from "../components/ContentLinks/ContentLinks.Item"
import ContentLinks from "../components/ContentLinks/ContentLinks"
import FeatureList from "../components/FeatureList/FeatureList"
import Stories from "../components/Stories/Stories"
import Timeline from "../components/Timeline/Timeline"

export default {
  container: props => (
    <Layout rowGap="grid" paddingBottom="grid">
      {props.children}
    </Layout>
  ),
  types: {
    block: props => {
      switch (props.node.style) {
        case "h1":
        case "h2":
        case "h3":
        case "h4":
        case "h5":
          return <Heading level={props.node.style}>{props.children}</Heading>
        default:
          return <Text>{props.children}</Text>
      }
    },
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
    linkBlock: ({ node }) => {
      return getLinkItem(node)
    },
    section: ({ node }) => {
      const { head, links } = node
      return (
        <div>
          <Layout>
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

            <ContentLinks>{links.map(getLinkItem)}</ContentLinks>
          </Layout>
        </div>
      )
    },
    featureList: ({ node }) => {
      return <FeatureList items={node.features} />
    },
    stories: ({ node }) => {
      console.log(node)
      return <Stories items={node.list} />
    },
    timeline: ({node}) => <Timeline items={node.entries}/>
  }
}
