import React from "react"
import { Layout, Wrapper, List } from "@staccx/base"

export const extractTextFromBlocks = (blocks = []) =>
  blocks
    .filter(val => val._type === "block")
    .map(block =>
      block.children
        .filter(child => child._type === "span")
        .map(span => span.text)
        .join("")
    )
    .join("")

export const serializers = {
  container: props => {
    if (props.children.some(c => c.props.node._type === "block")) {
      return <Layout rowGap="medium">{props.children}</Layout>
    }
    return <Layout rowGap="grid">{props.children}</Layout>
  },
  list: props => (
    <Wrapper size="small">
      <List>{props.children}</List>
    </Wrapper>
  )
  // listItem: ({ children }) => <li>{children}</li>,
}
