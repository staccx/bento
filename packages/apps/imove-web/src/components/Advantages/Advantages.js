import React from "react"
import styled from "styled-components"
import { spacing, font, color } from "@staccx/theme"
import { Wrapper, Layout, Heading } from "@staccx/base"

const Advantages = ({ heading, advantages }) => (
  <Content>
    <Wrapper size="largePlus">
      <Layout rowGap="huge">
        <Heading level={2}>{heading}</Heading>
        <Container>
          {advantages.map(x => (
            <Advantage>{x.advantage}</Advantage>
          ))}
        </Container>
      </Layout>
    </Wrapper>
  </Content>
)

const Content = styled.div`
  padding: ${spacing.huge} ${spacing("largePlusPlus")};
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
