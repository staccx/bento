import React from "react"
import styled from "styled-components"
import { color, spacing, wrapper, font } from "@staccx/theme"
import { Layout, Heading } from "@staccx/base"
import SectionHead from "../components/SectionHead/SectionHead"
import ContactUs from "../components/ContactUs/ContactUs"
import NavigationSubpage from "../components/NavigationSubpage/NavigationSubpage"
import Timeline from "../components/Timeline/Timeline"
import BlockContent from "@sanity/block-content-to-react"
import blockContentSerializer from "./blockContentSerializer"

const timeLineData = [
  {
    heading: "October 2014",
    body: "Bent starts with nothing but a laptop and a phone"
  },
  {
    heading: "November 2014",
    body: "Seed round completed with 2 MNOK in funding. Hires CTO & COO"
  },
  {
    heading: "January 2015",
    body: "Selects Stacc core infrastructure platform"
  }
]

const Case = ({ match, location, caseStudy }) => {
  console.log(caseStudy)
  return (
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
}

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

const Abstract = styled.p`
  border: 1px solid ${color.line};
  background-color: ${color("g4")};
  padding: ${spacing.medium};
`

export default Case
