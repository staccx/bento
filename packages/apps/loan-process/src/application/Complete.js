import React from "react"
import IllustrationSuccess from "../../components/IllustrationSuccess"
import SystemText from "../../components/SystemText"
import { Wrapper } from "@staccx/base"
import { Lead, Heading, CenteredContainer } from "../../Styles"
import Button from "../../components/button/Button"

const Complete = () => (
  <Wrapper size="medium">
    <CenteredContainer>
      <IllustrationSuccess />
      <Heading>
        <SystemText
          systemKey="APPLICATION_CONFIRMATION_HEADING"
          fallback="Gode greier!"
        />
      </Heading>
      <Lead>
        <SystemText
          systemKey="APPLICATION_CONFIRMATION_LEAD"
          fallback="Da har vi fått det vi trenger. Pengene skal normalt sett være tilgjengelig innen ett døgn."
        />
      </Lead>
      <Button to="/profile">
        <SystemText systemKey="GO_TO_MY_PROFILE" fallback="Gå til min side" />
      </Button>
    </CenteredContainer>
  </Wrapper>
)

export default Complete
