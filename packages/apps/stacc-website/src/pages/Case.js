import React from "react"
import styled from "styled-components"
import { Layout, theming } from "@staccx/base"
import BlockContent from "@sanity/block-content-to-react"
import blockContentSerializer from "./blockContentSerializer"
import { NavigationSubpage, SectionHead } from "../components/_codeSplitting"

const Case = ({ match, location, caseStudy }) => (
  <div>
    <NavigationSubpage name={"Monobank"} />
    <Layout rowGap="grid" paddingBottom="grid">
      <SectionHead
        heading={caseStudy.header.title}
        lede={caseStudy.header.body}
        illustration={caseStudy.header.image}
      />
      <BlockContent
        blocks={caseStudy.blocks}
        serializers={blockContentSerializer}
        renderContainerOnSingleChild
      />
    </Layout>
  </div>
)

export default Case
