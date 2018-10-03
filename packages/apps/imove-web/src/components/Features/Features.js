import React from "react"
import styled from "styled-components"
import { spacing } from "@staccx/theme"
import { Wrapper, Heading, Layout } from "@staccx/base"
import Feature from "./Features.Feature"
import SectionHeading from "../SectionHeading/SectionHeading"

const Features = ({ heading, features }) => (
  <Content>
    <Wrapper size="largePlus">
      <SectionHeading>{heading}</SectionHeading>
      <List>
        {features.map(feature => (
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
`

const List = styled.ul`
  display: grid;
  grid-row-gap: ${spacing.large};
  grid-column-gap: ${spacing.huge};
  grid-template-columns: 1fr 1fr;
`

export default Features
