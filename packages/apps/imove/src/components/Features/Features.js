import React from "react"
import styled from "styled-components"
import { spacing } from "@staccx/theme"
import { Wrapper, Heading } from "@staccx/base"
import Feature from "./Features.Feature"

const Features = () => (
  <Content>
    <Wrapper size="full">
      <StyledHeading level={2}>Med iMove får du</StyledHeading>
      <ul>
        <Feature
          heading="Bil når du trenger det"
          content="Noen setninger her som beskriver denne fordelen, i litt mer detalj enn presentert på resten av siden."
        />
        <Feature
          heading="Forsikringer, service og alt det der"
          content="Noen setninger her som beskriver denne fordelen, i litt mer detalj enn presentert på resten av siden."
        />
        <Feature
          heading="Vi selger din gamle bil"
          content="Noen setninger her som beskriver denne fordelen, i litt mer detalj enn presentert på resten av siden."
        />
        <Feature
          heading="Bil når du trenger det"
          content="Noen setninger her som beskriver denne fordelen, i litt mer detalj enn presentert på resten av siden."
        />
      </ul>
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

const Cars = styled.img`
  padding: 100px ${spacing("largePlusPlus")} 0;
`

export default Features
