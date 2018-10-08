import React from "react"
import styled from "styled-components"
import { media } from "../../styleUtils"
import { spacing } from "@staccx/theme"
import { Wrapper } from "@staccx/base"
import Feature from "./Features.Feature"
import SectionHeading from "../SectionHeading/SectionHeading"

const Features = ({ data }) => (
  <Content>
    <Wrapper size="largePlus">
      <SectionHeading>{data.heading}</SectionHeading>
      <List>
        {data.features.map(feature => (
          <Feature
            key={feature._key}
            heading={feature.heading}
            text={feature.text}
          />
        ))}
      </List>
    </Wrapper>
  </Content>
)

const Content = styled.div`
  padding: ${spacing("huge")} 0;
  ${media.chromeTablet`
    padding: ${spacing.large} 0;
  `};
`

const List = styled.ul`
  display: grid;
  grid-row-gap: ${spacing.large};
  grid-column-gap: ${spacing.huge};
  grid-template-columns: 1fr 1fr;
  ${media.chromeLaptop`
    grid-column-gap: ${spacing.large};
  `} ${media.chromeTablet`
    grid-template-columns: 1fr;
  `};
`

export default Features
