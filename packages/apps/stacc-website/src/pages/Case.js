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
      <BContenty>
        <BlockContent
          blocks={caseStudy.body}
          serializers={blockContentSerializer}
          renderContainerOnSingleChild
        />
      </BContenty>
      <BlockContent
        blocks={caseStudy.blocks}
        serializers={blockContentSerializer}
        renderContainerOnSingleChild
      />
    </Layout>
  </div>
)

const BContenty = styled(Layout)`
  > p {
    max-width: ${theming.wrapper.medium};
    line-height: 1.6;
  }

  > blockquote {
    padding: ${theming.spacing.large} 0;

    > p {
      font-size: ${theming.font.h3};
      font-style: italic;
      font-weight: 300;
      line-height: 1.6;
      margin-bottom: ${theming.spacing.small};
    }
    > cite {
      font-style: normal;
    }
  }
`

export default Case
