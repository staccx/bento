import React from "react"
import { Layout } from "@staccx/base"
import BlockContent from "@sanity/block-content-to-react"
import blockContentSerializer from "./blockContentSerializer"
import { NavigationSubpage, SectionHead } from "../components/_codeSplitting"

const Case = ({ match, location, caseStudy }) => {
  const content = [caseStudy.header, ...caseStudy.blocks]

  return (
    <div>
      <NavigationSubpage name={"Monobank"} />
      <Layout rowGap="grid" paddingBottom="grid">
        <BlockContent
          blocks={content}
          serializers={blockContentSerializer}
          renderContainerOnSingleChild
        />
      </Layout>
    </div>
  )
}

export default Case
