import React from "react"
import styled from "styled-components"
import { Heading, Divider, Flag } from "@staccx/base"
import { spacing } from "@staccx/theme"
import IconCheck from "../Icons/IconCheck"

const FeatureList = ({ heading, callToAction }) => (
  <Container>
    <HeadingContainer>
      <Heading variant="emphasized" level={4}>
        Features
      </Heading>
    </HeadingContainer>
    <DividerContainer>
      <Divider />
    </DividerContainer>
    <Features>
      <li>
        <Flag tiny top img={<IconCheck />}>
          Account creation
        </Flag>
      </li>
      <li>
        <Flag tiny top img={<IconCheck />}>
          Commisions & subversions
        </Flag>
      </li>
      <li>
        <Flag tiny top img={<IconCheck />}>
          Third-party products
        </Flag>
      </li>
      <li>
        <Flag tiny top img={<IconCheck />}>
          Account management
        </Flag>
      </li>
      <li>
        <Flag tiny top img={<IconCheck />}>
          Billing & Collection
        </Flag>
      </li>
      <li>
        <Flag tiny top img={<IconCheck />}>
          Insurance
        </Flag>
      </li>
      <li>
        <Flag tiny top img={<IconCheck />}>
          ClientContainer management
        </Flag>
      </li>
      <li>
        <Flag tiny top img={<IconCheck />}>
          Reporting & analysis
        </Flag>
      </li>
    </Features>
  </Container>
)

const Container = styled.div`
  display: grid;
  grid-template-columns: 25% 75%;
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

const Features = styled.ul`
  grid-area: right;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 0 -${spacing.small};
  overflow: hidden;

  > li {
    flex-basis: 30%;
    margin: 0 ${spacing.small} ${spacing.small};
  }
`

export default FeatureList
