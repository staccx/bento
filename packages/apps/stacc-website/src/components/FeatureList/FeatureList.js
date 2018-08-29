import React from "react"
import styled from "styled-components"
import { Heading, Divider } from "@staccx/base"
import { spacing } from "@staccx/theme"
import IconCheck from "../Icons/IconCheck"
import GoTo from "../GoTo/GoTo"

const FeatureList = () => (
  <Container>
    <HeadingContainer>
      <Heading variant="emphasized" level={4}>
        Features
      </Heading>
    </HeadingContainer>
    <DividerContainer>
      <Divider />
    </DividerContainer>
    <Content>
      <Features>
        <li>
          <IconCheck /> Account creation
        </li>
        <li>
          <IconCheck /> Commisions & subversions
        </li>
        <li>
          <IconCheck /> Third-party products
        </li>
        <li>
          <IconCheck /> Account management
        </li>
        <li>
          <IconCheck /> Billing & Collection
        </li>
        <li>
          <IconCheck /> Insurance
        </li>
        <li>
          <IconCheck /> ClientContainer management
        </li>
        <li>
          <IconCheck /> Reporting & analysis
        </li>
      </Features>
      <GoTo to="#nowhere">See full technical specifications</GoTo>
    </Content>
  </Container>
)

const Container = styled.div`
  display: grid;
  grid-template-columns: 15% 85%;
  grid-template-rows: auto;
  grid-template-areas:
    "top top"
    " left right";
`

const DividerContainer = styled.div`
  grid-area: top;
  padding-bottom: ${spacing.small};
`

const HeadingContainer = styled.div`
  grid-area: left;
`

const Content = styled.div`
  grid-area: right;
`

const Features = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 0 -${spacing.small};
  overflow: hidden;

  > li {
    flex-basis: 30%;
    margin: 0 ${spacing.small} ${spacing.medium};
  }
`

export default FeatureList
