import React from "react"
import styled from "styled-components"
import { Heading, Divider } from "@staccx/base"
import { spacing, color, font } from "@staccx/theme"
import IconCheck from "../Icons/IconCheck"

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
            <Header>
              <IconCheck /> <H level={4}>{item.title}</H>
            </Header>
            <Body>{item.body}</Body>
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
    flex-basis: 45%;
    margin: 0 ${spacing.small} ${spacing.medium};
  }
`

const H = styled(Heading)`
  padding-left: ${spacing.tiny};
`

const Body = styled.p`
  color: ${color.wcag};
  font-size: ${font.small};
`

const Header = styled.div`
  display: flex;
`

export default FeatureList
