import React from "react"
import styled from "styled-components"
import { spacing } from "@staccx/theme"
import { Wrapper, Heading } from "@staccx/base"

const Features = ({ children }) => (
  <Content>
    <Wrapper size="full">
      <StyledHeading level={2}>Med iMove får du</StyledHeading>
      <List>{children}</List>
      <Cars src="/img/cars@2x.png" alt="BMW i3, VW e-golf and KIA Soul" />
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

const Cars = styled.img`
  padding: 100px ${spacing("largePlusPlus")} 0;
`

export default Features
