import React from "react"
import styled from "styled-components"
import { media } from "../../styleUtils"
import { spacing, font, color, wrapper } from "@staccx/theme"
import { Wrapper } from "@staccx/base"
import SectionHeading from "../SectionHeading/SectionHeading"

const Advantages = ({ data }) => (
  <Content>
    <Wrapper size="largePlus">
      <SectionHeading>{data.heading}</SectionHeading>
      <Container>
        {data.advantages.map(x => (
          <Advantage key={x._key}>{x.advantage}</Advantage>
        ))}
      </Container>
    </Wrapper>
  </Content>
)

const Content = styled.div`
  padding: ${spacing.huge} ${spacing("largePlus")};
  ${media.chromeLaptop`
    padding: ${spacing("largePlus")} 0;
  `};
  ${media.chromeTablet`
    padding: ${spacing("large")} 0;
  `};
`

const Container = styled.ul`
  display: grid;
  grid-row-gap: ${spacing.medium};
  grid-column-gap: ${spacing.large};
  grid-template-columns: 1fr 1fr;
  font-size: ${font("largePlusPlus")};
  color: ${color("primary")};
  ${media.chromeLaptop`
    font-size: ${font("largePlus")};
    line-height: 1.4;
  `}
  ${media.chromeTablet`
    font-size: ${font("large")};
    grid-column-gap: ${spacing.medium};
  `}
  ${media.chromeMobileL`
    grid-template-columns: 1fr;
    max-width: ${wrapper.small};
    margin-left: auto;
    margin-right: auto;
  `}
  /*display: flex;
  justify-content: space-between;
  margin: 0 calc(${spacing("medium")} * -1);*/
`

const Advantage = styled.li`
  margin-left: 2em;
  &::before {
    content: "";
    background-color: ${color("primary")};
    display: inline-block;
    width: 1em;
    height: 1em;
    border-radius: 100%;
    border-bottom-right-radius: 0;
    position: relative;
    left: -2em;
    margin-right: -1em;
  }
`

export default Advantages
