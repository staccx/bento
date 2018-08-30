import React from "react"
import { Text, Heading } from "@staccx/base"
import Quote from "../components/Quote/Quote"
import Hero from "../components/Hero/Hero"

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
    sectionHead: ({ node }) => <Hero heading={node.title} lede={node.body} />,
    quote: ({ node }) => (
      <Quote name={node.subText} quote={node.quote} img={node.image} />
    )
  }
}
