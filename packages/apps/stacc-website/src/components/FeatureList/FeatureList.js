import React from "react"
import styled from "styled-components"
import { Heading, Divider } from "@staccx/base"
import { spacing } from "@staccx/theme"
import IconCheck from "../Icons/IconCheck"
import GoTo from "../GoTo/GoTo"

const FeatureList = ({ items }) => (
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
        {items.map(item => (
          <li>
            <IconCheck /> {item.title}
          </li>
        ))}
      </Features>
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
