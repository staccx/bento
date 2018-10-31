import React from "react"

import { Layout, Heading, Paragraph, Divider } from "@staccx/base"

import FeaturesList from "./Features.List"

const Features = () => {
  return (
    <Layout as={"article"}>
      <header>
        <Layout rowGap={"small"}>
          <Heading variant="lined" level={2}>
            Features
          </Heading>
          <Paragraph>Here is an intro text</Paragraph>
          <Divider />
        </Layout>
      </header>
      <FeaturesList />
    </Layout>
  )
}

export default Features
