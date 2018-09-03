import React from "react"
import { Text, Heading } from "@staccx/base"
import { SanityDocument } from "@staccx/sanity"
import Quote from "../components/Quote/Quote"
import SectionHead from "../components/SectionHead/SectionHead"
import Hero from "../components/Hero/Hero"
import ContentLinksItem, {
  getLinkItem
} from "../components/ContentLinks/ContentLinks.Item"
import ContentLinks from "../components/ContentLinks/ContentLinks"
import FeatureList from "../components/FeatureList/FeatureList"

export default {
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
      <Quote name={node.subText} quote={node.quote} img={node.image} />
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
          <SectionHead
            heading={head.title}
            lede={head.body}
            headingLevel={head.isPageHeader ? 1 : 2}
            illustration={head.image}
          />
          <ContentLinks>{links.map(getLinkItem)}</ContentLinks>
        </div>
      )
    },
    featureList: ({ node }) => {
      console.log(node)
      return <FeatureList items={node.features} />
    }
  }
}
