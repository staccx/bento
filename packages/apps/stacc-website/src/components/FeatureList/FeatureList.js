import React from "react"
import styled from "styled-components"
import { Heading, Divider } from "@staccx/base"
import { spacing, color, font, wrapper } from "@staccx/theme"
import IconCheck from "../Icons/IconCheck"

const FeatureList = ({ items }) => (
  <Container>
    <HeadingContainer>
      <Heading variant="emphasized" level={4}>
        Features
      </Heading>
    </HeadingContainer>
    <DividerContainer>
      <FeatureDivider />
    </DividerContainer>
    <Content>
      <Features>
        {items.map(item => (
          <li key={item._key}>
            <Header>
              <IconContainer>
                <IconCheck />
              </IconContainer>
              <H level={4}>{item.title}</H>
            </Header>
            <Body>{item.body}</Body>
          </li>
        ))}
      </Features>
    </Content>
  </Container>
)

const Container = styled.div`
  @media only screen and (min-width: ${wrapper.large}) {
    display: grid;
    grid-template-columns: 15% 85%;
    grid-template-rows: auto;
    grid-template-areas:
      "top top"
      " left right";
  }
`

const IconContainer = styled.div`
  position: absolute;
  left: -24px;
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
  padding-left: ${spacing.medium};
  > li {
    margin-bottom: ${spacing.medium};
  }

  @media only screen and (min-width: ${wrapper.medium}) {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin: 0;

    > li {
      flex-basis: 45%;
      flex-grow: 1;

      &:nth-child(odd) {
        margin-right: ${spacing.large};
      }
    }
  }

  @media only screen and (min-width: ${wrapper.large}) {
    padding-left: 0;
  }
`

const H = styled(Heading)``

const Body = styled.p`
  color: ${color.wcag};
  font-size: ${font.small};
`

const Header = styled.div`
  display: flex;
  position: relative;
`

const FeatureDivider = styled(Divider)`
  height: 2px;
`

export default FeatureList
