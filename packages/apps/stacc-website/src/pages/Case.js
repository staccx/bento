import React from "react"
import styled from "styled-components"
import { spacing, wrapper, font } from "@staccx/theme"
import { Layout } from "@staccx/base"
import { SanityImage } from "@staccx/sanity"
import BlockContent from "@sanity/block-content-to-react"
import blockContentSerializer from "./blockContentSerializer"
import { NavigationSubpage, SectionHead } from "../components/_codeSplitting"
import { Helmet } from "react-helmet"

const Case = ({ match, location, caseStudy }) => (
  <div>
    {caseStudy.meta && (
      <SanityImage image={caseStudy.meta.image}>
        {({ image }) => (
          <Helmet>
            <meta property="og:title" content={caseStudy.meta.title} />
            <meta
              property="og:description"
              content={caseStudy.meta.description}
            />
            <meta property="og:type" content="website" />
            <meta property="og:url" content={caseStudy.meta.url} />
            <meta property="og:image" content={image.url()} />
          </Helmet>
        )}
      </SanityImage>
    )}
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
    max-width: ${wrapper.medium};
    line-height: 1.6;
  }

  > blockquote {
    padding: ${spacing.large} 0;

    > p {
      font-size: ${font.h3};
      font-style: italic;
      font-weight: 300;
      line-height: 1.6;
      margin-bottom: ${spacing.small};
    }
    > cite {
      font-style: normal;
    }
  }
`

export default Case
