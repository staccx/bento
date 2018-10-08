import React from "react"
import styled from "styled-components"
import { media } from "../../styleUtils"
import { spacing, font, color } from "@staccx/theme"
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
  ${media.chromeTablet`
    padding: ${spacing.large} 0;
  `};
`

const Container = styled.ul`
  display: grid;
  grid-row-gap: tiny;
  grid-column-gap: 0;
  grid-template-columns: 1fr 1fr;
  font-size: ${font("largePlusPlus")};
  color: ${color("primary")};
  /*display: flex;
  justify-content: space-between;
  margin: 0 calc(${spacing("medium")} * -1);*/
`

const Advantage = styled.li`
  margin: ${spacing("small")} 0;
  &::before {
    content: "";
    background-color: ${color("primary")};
    display: inline-block;
    width: 1em;
    height: 1em;
    border-radius: 100%;
    border-bottom-right-radius: 0;
    margin-right: 0.7em;
  }
`

export default Advantages
