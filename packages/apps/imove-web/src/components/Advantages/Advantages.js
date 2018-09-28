import React from "react"
import styled from "styled-components"
import { spacing } from "@staccx/theme"
import { Wrapper } from "@staccx/base"

const Advantages = () => (
  <Content>
    <Wrapper size="largePlus">
      <Container />
    </Wrapper>
  </Content>
)

const Content = styled.div`
  padding: ${spacing.huge} ${spacing("largePlusPlus")};
`

const Container = styled.ul`
  display: flex;
  justify-content: space-between;
  margin: 0 calc(${spacing("medium")} * -1);
`

const StyledAdvantage = styled.li`
  flex: 1;
  margin: 0 ${spacing("medium")};
`

export default Advantages
