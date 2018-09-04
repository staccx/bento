import React from "react"
import styled from "styled-components"
import { spacing } from "@staccx/theme"
import Advantage from "./Advantages.Advantage"
import { Wrapper } from "@staccx/base"

const Advantages = () => (
  <Content>
    <Wrapper size="largePlus">
      <Container>
        <StyledAdvantage
          heading="Enkelt"
          content="Du registrerer deg hos oss, og holder oversikt over bilen via vår app. Noe her om hvor enkelt det er."
          icon=""
        />
        <StyledAdvantage
          heading="Bil til ulike anledninger"
          content="Du velger den bilen du ønsker, når du trenger det. Du kan bytte bil når du vil og det er ingen bindingstid."
          icon=""
        />
        <StyledAdvantage
          heading="Alt inkludert"
          content="Forsikring, service, leiebil ved service, dekkskifte og veihjelp er inkludert."
          icon=""
        />
      </Container>
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

const StyledAdvantage = styled(Advantage)`
  flex: 1;
  margin: 0 ${spacing("medium")};
`

export default Advantages
