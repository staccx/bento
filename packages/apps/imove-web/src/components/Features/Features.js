import React from "react"
import styled from "styled-components"
import { spacing } from "@staccx/theme"
import { Wrapper, Heading } from "@staccx/base"
import Feature from "./Features.Feature"

const Features = ({ heading, features }) => (
  <Content>
    <Wrapper size="full">
      <StyledHeading level={2}>{heading}</StyledHeading>
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

const StyledHeading = styled(Heading)`
  text-align: center;
  padding-bottom: calc(
    ${spacing("huge")} - 20px
  ); /* Using calc for optical adjustment: */
`

const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`

export default Features
